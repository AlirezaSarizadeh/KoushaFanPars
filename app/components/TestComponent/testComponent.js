"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroCard from "../HeroCard/HeroCard";
import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import './testcomponent.css'
import images from "@/app/public/assets/images";
import CounterBox from "../utils/counterBox/CounterBox";

const CardComponent = () => {
    const [showSecondCard, setShowSecondCard] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
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
            {/* First Card (Hero) with opacity transition */}
            <motion.div
                style={{ width: "100%" }}
                initial={{ opacity: 1 }}
                animate={{ opacity: showSecondCard ? 0 : 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <HeroCard />
            </motion.div>

            {/* Second Card with Framer Motion */}
            <motion.div
                className="position-absolute"
                style={{ width: "100%", top: "0px" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showSecondCard ? 1 : 0, y: showSecondCard ? 0 : 20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Card
                    bg={"#7dbded"}
                    key={"light"}
                    text={"dark"}
                    style={{ width: "18rem" }}
                    className="mb-2 w-100 hero-2nd-card"
                >
                    <Card.Body>
                        <Row className="justify-content-around">
                            <Col md={6} className="d-flex align-items-center">
                                <div className="row row-cols-2">

                                    <div className="p-2">
                                        <div className="hero-datas-card">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <CounterBox labelColor={'text-white'} countSize={'fs-2'} targetNumber={340} />
                                                <Image src={images.heroIcon1} alt="icon" width={100} height={100} />
                                            </div>
                                            <p className="lead text-white">
                                                سال پیشگام در تولید
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-2">
                                        <div className="hero-datas-card">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <CounterBox labelColor={'text-white'} countSize={'fs-2'} targetNumber={340} />
                                                <Image src={images.heroIcon2} alt="icon" width={100} height={100} />
                                            </div>
                                            <p className="lead text-white">
                                                سال پیشگام در تولید
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-2">
                                        <div className="hero-datas-card">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <CounterBox labelColor={'text-white'} countSize={'fs-2'} targetNumber={340} />
                                                <Image src={images.heroIcon3} alt="icon" width={100} height={100} />
                                            </div>
                                            <p className="lead text-white">
                                                سال پیشگام در تولید
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-2">
                                        <div className="hero-datas-card">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <CounterBox labelColor={'text-white'} countSize={'fs-2'} targetNumber={340} />
                                                <Image src={images.heroIcon4} alt="icon" width={100} height={100} />
                                            </div>
                                            <p className="lead text-white">
                                                سال پیشگام در تولید
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                            <Col md={5}>
                                <Image
                                    src={images.hero2ndpic}
                                    alt="pic"
                                    className="hero-2nd-left-pic"
                                />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </motion.div>
        </div>
    );
};

export default CardComponent;
