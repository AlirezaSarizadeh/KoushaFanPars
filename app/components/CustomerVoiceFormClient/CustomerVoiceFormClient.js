'use client';

import React, { useEffect, useState } from "react";
import AnimatedInput from "../AnimatedInput/AnimatedInput";
import Button from "../utils/button/Button";
import { toast } from "react-hot-toast";

const CustomerVoiceFormClient = () => {
    const [fields, setFields] = useState([]);
    const [formData, setFormData] = useState({});

    // ✅ Initialize form structure
    useEffect(() => {
        const initialFields = [
            { key: "first_name", label: "نام", type: "text" },
            { key: "last_name", label: "نام خانوادگی", type: "text" },
            { key: "phone", label: "تلفن", type: "number" },
            { key: "medic_place", label: "محل طبابت", type: "text" },
            { key: "medic_phone", label: "تلفن محل طبابت", type: "number" },
            { key: "city", label: "شهر", type: "text" },
            { key: "product_name", label: "نام محصول", type: "text" },
            { key: "serial", label: "سریال محصول", type: "number" },
            { key: "subject", label: "موضوع", type: "text" },
            { key: "desc", label: "توضیحات", type: "textarea" }
        ];
        setFields(initialFields);
        setFormData(initialFields.reduce((acc, f) => ({ ...acc, [f.key]: "" }), {}));
    }, []);

    const handleChange = (key, value) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    // ✅ Validate before sending
    const validateForm = () => {
        for (let f of fields) {
            if (!formData[f.key] || formData[f.key].trim() === "") {
                toast.error(`لطفا ${f.label} را وارد کنید`);
                return false;
            }
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        toast.loading("در حال ارسال...", { id: "customer" });

        try {
            const res = await fetch("https://api.kfp-dental.com/api/customer_form_insert", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                toast.success("نظر شما با موفقیت ثبت شد", { id: "customer" });
                setFormData(fields.reduce((acc, f) => ({ ...acc, [f.key]: "" }), {}));
            } else {
                toast.error("ثبت نظر ناموفق بود", { id: "customer" });
            }
        } catch {
            toast.error("مشکلی در ارتباط با سرور وجود دارد", { id: "customer" });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row align-items-center justify-content-center">
                {fields.map((field, i) => (
                    <div key={field.key} className={`col-lg-${field.type === "textarea" ? "12" : "4"} mt-3`}>
                        <AnimatedInput
                            id={field.key}
                            label={field.label}
                            name={field.key}
                            type={field.type === "textarea" ? undefined : field.type}
                            as={field.type === "textarea" ? "textarea" : undefined}
                            rows={field.type === "textarea" ? 4 : undefined}
                            value={formData[field.key] || ""}
                            onChange={(e) => handleChange(field.key, e.target.value)}
                        />
                    </div>
                ))}
                <div className="col-12 mt-4 d-flex align-items-center justify-content-end">
                    <Button title="ثبت دیدگاه" variant="primary" type="submit" />
                </div>
            </div>
        </form>
    );
};

export default CustomerVoiceFormClient;
