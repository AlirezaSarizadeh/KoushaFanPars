"use client";
import Image from "next/image";
import './counterbox.css'
import { useState, useEffect, useRef } from "react";

const CounterBox = ({ targetNumber, label, icon }) => {
    const [count, setCount] = useState(0);
    const boxRef = useRef(null);
    const observer = useRef(null);

    useEffect(() => {
        if (!boxRef.current) return;

        observer.current = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const duration = 2000; // 2 seconds animation
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
        <div ref={boxRef} className="d-flex align-items-center rounded-lg shadow-md gap-2">
            <Image src={icon} alt="counter-img" />
            <div className="d-flex flex-column">
                <span className="fs-4 fw-bold">{count}+</span>
                <span className="lead fw-normal">{label}</span>
            </div>
        </div>
    );
};

export default CounterBox;
