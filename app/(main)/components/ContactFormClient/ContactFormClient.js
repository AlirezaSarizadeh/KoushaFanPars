'use client';

import React, { useEffect, useState } from "react";
import AnimatedInput from "../AnimatedInput/AnimatedInput";
import Button from "../utils/button/Button";
import { toast } from "react-hot-toast";

const ContactFormClient = () => {
    const [fields, setFields] = useState([]);
    const [formData, setFormData] = useState({});

    // ✅ Initialize fields and empty formData
    useEffect(() => {
        const initialFields = [
            { key: "full_name", label: "نام و نام خانوادگی", type: "text" },
            { key: "phone", label: "تلفن", type: "number" },
            { key: "desc", label: "توضیحات", type: "textarea" }
        ];
        setFields(initialFields);

        const emptyData = initialFields.reduce((acc, f) => ({ ...acc, [f.key]: "" }), {});
        setFormData(emptyData);
    }, []);

    // ✅ Controlled input update
    const handleChange = (key, value) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    // ✅ Check all fields are filled
    const validateForm = () => {
        for (const field of fields) {
            const val = formData[field.key]?.trim();
            if (!val) {
                toast.error(`لطفا ${field.label} را پر کنید`);
                return false;
            }
        }
        return true;
    };

    // ✅ Submit form
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return; // ⛔ stop if any field empty

        toast.loading("در حال ارسال...", { id: "contact" });

        try {
            const res = await fetch("https://api.kfp-dental.com/api/contact_us_form_insert", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                toast.success("پیام شما با موفقیت ارسال شد", { id: "contact" });

                // ✅ Reset state to empty
                const cleared = fields.reduce((acc, f) => ({ ...acc, [f.key]: "" }), {});
                setFormData(cleared);
            } else {
                toast.error("ارسال پیام ناموفق بود", { id: "contact" });
            }
        } catch {
            toast.error("مشکلی در ارتباط با سرور وجود دارد", { id: "contact" });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row align-items-center justify-content-start">
                {fields.map((field) => (
                    <div key={field.key} className={`col-lg-${field.type === "textarea" ? "12" : "6"} mt-lg-5 mt-4`}>
                        <span className="mt-3 mt-lg-5">
                            <AnimatedInput
                                id={field.key}
                                label={field.label}
                                name={field.key}
                                type={field.type === "textarea" ? undefined : field.type}
                                as={field.type === "textarea" ? "textarea" : undefined}
                                rows={field.type === "textarea" ? 4 : undefined}
                                value={formData[field.key] ?? ""}
                                onChange={(e) => handleChange(field.key, e.target.value)}
                            />
                        </span>
                    </div>
                ))}
                <div className="col-12 mt-lg-4 mt-2 d-flex align-items-center justify-content-end">
                    {/* ✅ Button must be type submit */}
                    <Button title="ثبت دیدگاه" variant="secondary" type="submit" />
                </div>
            </div>
        </form>
    );
};

export default ContactFormClient;
