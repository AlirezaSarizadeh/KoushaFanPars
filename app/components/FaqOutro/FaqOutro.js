'use client'
import React, { useEffect, useState } from 'react'
import { Accordion, Spinner } from 'react-bootstrap'
import './faqoutro.css'
import Title from '../utils/title/Title'
import Lead from '../utils/lead/Lead'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.2 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

export default function FaqOutro() {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    // ✅ Fetch only "برتر" category from API
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://api.kfp-dental.com/api/question_and_answer',{
                    method:'POST'
                });
                const data = await res.json();
                if (data['برتر']) setQuestions(data['برتر']);
            } catch (err) {
                console.error('❌ Error fetching FAQ Outro data:', err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <motion.section
            className="faqOutro pt-3 mb-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* ✅ Title */}
            <motion.div variants={itemVariants}>
                <Title title="سوالات متداول" />
            </motion.div>

            {/* ✅ Subtitle */}
            <motion.div variants={itemVariants}>
                <Lead
                    boldText="هرآنچه سوال شماست"
                    lightText="کوشافن پارس پاسخگوی تمام سوالات شما خواهد بود"
                />
            </motion.div>

            {/* ✅ Accordion for "برتر" Category */}
            <motion.div className="py-lg-5 container-custom" variants={itemVariants}>
                {loading ? (

                        <Spinner animation="border" size="sm" /> 

                ) : questions.length > 0 ? (
                    <Accordion defaultActiveKey="0">
                        {questions.map((item, index) => (
                            <motion.div key={item.id} variants={itemVariants}>
                                <Accordion.Item eventKey={index.toString()} className="mt-lg-4 mt-3">
                                    <Accordion.Header>{item.title}</Accordion.Header>
                                    <Accordion.Body>{item.desc}</Accordion.Body>
                                </Accordion.Item>
                            </motion.div>
                        ))}
                    </Accordion>
                ) : (
                    <p className="text-muted text-center">سوالی برای نمایش وجود ندارد.</p>
                )}
            </motion.div>
        </motion.section>
    );
}
