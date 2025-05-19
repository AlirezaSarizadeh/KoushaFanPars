'use client'
import React from 'react'
import { Accordion } from 'react-bootstrap'
import './faqoutro.css'
import Title from '../utils/title/Title'
import Lead from '../utils/lead/Lead'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
            when: 'beforeChildren',
            staggerChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
}

const FaqOutro = () => {
    return (
        <motion.section
            className='faqOutro pt-3'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }} // Triggers when 20% is visible
        >
            <motion.div variants={itemVariants}>
                <Title title={'سوالات متداول'} />
            </motion.div>

            <motion.div variants={itemVariants}>
                <Lead
                    boldText={'هرآنچه سوال شماست'}
                    lightText={'کوشافن پارس پاسخگوی تمام سوالات شما خواهد بود'}
                />
            </motion.div>

            <motion.div className='py-lg-5 container-custom' variants={itemVariants}>
                <Accordion defaultActiveKey="0">
                    {[...Array(4)].map((_, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Accordion.Item eventKey={index.toString()} className='mt-lg-4 mt-3'>
                                <Accordion.Header>
                                    آیا ایمپلنت دندانی اویتا مجوز های مورد نیاز را دارد؟
                                </Accordion.Header>
                                <Accordion.Body>
                                    مشتریان عزیز ما با ارسال پیام‌های رضایتمندی، از کیفیت بالای خدمات طراحی
                                    وبسایت اوستاوب ابراز خشنودی کرده‌اند. آنها به طور ویژه به طراحی زیبا،
                                    کاربری آسان و همچنین پشتیبانی حرفه‌ای تیم ما اشاره کرده‌اند. این نظرات
                                    ارزشمند، انگیزه ما را برای ارائه خدمات بهتر و نوآورانه‌تر دوچندان می‌کند. ما
                                    مفتخریم که توانسته‌ایم اعتماد و رضایت مشتریان خود را جلب کنیم.
                                </Accordion.Body>
                            </Accordion.Item>
                        </motion.div>
                    ))}
                </Accordion>
            </motion.div>
        </motion.section>
    )
}

export default FaqOutro
