"use client";
import Image from "next/image";
import "./counterbox.css";
import { useState, useEffect, useRef } from "react";

const CounterBox = ({ targetNumber, label, icon, labelColor, countSize }) => {
    const [count, setCount] = useState(0);
    const boxRef = useRef(null);
    const observer = useRef(null);

    useEffect(() => {
        if (!boxRef.current) return;

        observer.current = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const duration = 3000; // 2 seconds animation
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
            { threshold: 0.5 } // Trigger when 50% visible
        );

        observer.current.observe(boxRef.current);

        return () => observer.current?.disconnect();
    }, [targetNumber]);

    return (
        <div ref={boxRef} className="d-flex align-items-center rounded-lg shadow-md gap-2 flex-lg-row flex-column mt-4 mt-lg-0">
            {/* Render the Image only if icon exists */}
            {icon && <Image src={icon} alt="counter-img" width={50} height={50} />}
            <div className="d-flex flex-column counter-content">
                {/* Dynamically set the font size of count */}
                <span className={`fw-bold ${labelColor || ""} ${countSize || "fs-4"}`}>{count}+</span>
                {/* Dynamically set the color class for the label */}
                <span className={`lead fw-normal ${labelColor || ""}`}>{label}</span>
            </div>
        </div>
    );
};

export default CounterBox;
