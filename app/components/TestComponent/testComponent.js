"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../Hero/Hero";

const CardComponent = () => {
    const [showSecondCard, setShowSecondCard] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowSecondCard(true);
            } else {
                setShowSecondCard(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="position-relative d-flex justify-content-center mt-5">
            {/* First Card */}
            <Hero />

            {/* Second Card with Framer Motion */}
            <motion.div
                className="position-absolute"
                style={{ width: "100%", top: "0px" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showSecondCard ? 1 : 0, y: showSecondCard ? 0 : 20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Hero />
            </motion.div>
        </div>
    );
};

export default CardComponent;
