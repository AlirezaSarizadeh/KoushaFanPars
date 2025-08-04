"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./counterbox.css";

const CounterBox = ({ targetNumber, label, icon, labelColor, countSize }) => {
    const [count, setCount] = useState(0);
    const boxRef = useRef(null);
    const observer = useRef(null);

    useEffect(() => {
        if (!boxRef.current) return;

        observer.current = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const duration = 3000; // 3 seconds animation
                    const startTime = performance.now();

                    const animate = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        if (elapsed < duration) {
                            setCount(Math.min(Math.floor((elapsed / duration) * targetNumber), targetNumber));
                            requestAnimationFrame(animate);
                        } else {
                            setCount(targetNumber);
                        }
                    };

                    requestAnimationFrame(animate);
                    observer.current.disconnect(); // Stop observing after animation
                }
            },
            { threshold: 0.5 }
        );

        observer.current.observe(boxRef.current);

        return () => observer.current?.disconnect();
    }, [targetNumber]);

    return (
        <motion.div
            ref={boxRef}
            className="d-flex align-items-center rounded-lg shadow-md gap-2 flex-lg-row flex-column mt-4 mt-lg-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }} // Animate only once when 50% visible
        >
            {icon && <Image src={icon} alt="counter-img" width={50} height={50} />}
            <div className="d-flex flex-column counter-content">
                <span className={`fw-bold ${labelColor || ""} ${countSize || "fs-4"}`}>{count}+</span>
                <span className={`lead fw-normal counter-text ${labelColor || ""}`}>{label}</span>
            </div>
        </motion.div>
    );
};

export default CounterBox;
