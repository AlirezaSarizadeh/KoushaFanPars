'use client'
import React from 'react'
import { motion } from 'framer-motion'
import './educationCenter.css'
import Title from '../../utils/title/Title'
import Lead from '../../utils/lead/Lead'
import Button from '../../utils/button/Button'
import CircledTestimonial from '../../CircledTestimonial/CircledTestimonial'

const EducationCenter = () => {
    return (
        <motion.div
            className='row align-items-center my-lg-5 pt-lg-5 my-4'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <motion.div
                className='col-lg-8 mt-lg-5'
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
                <Title title={'مرکز آموزش'} />
                <Lead boldText={'دانشکده کوشافن پارس'} lightText={'مهارت های خود را با کوشافن پارس ارتقا دهید'} />
                <motion.p
                    className='text-justify py-2'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    مرکز آموزش کوشافن پارس، دروازه ورود به دنیای نوین دندانپزشکی است. این مرکز جامع آموزشی، با ارائه دوره‌های متنوع در سطوح مبتدی، نیمه پیشرفته و پیشرفته، پاسخگوی نیازهای تمام دندانپزشکان و دندانسازان است. چه تازه وارد دنیای دندانپزشکی باشید و چه سال‌ها تجربه داشته باشید، در کوشافن پارس، دوره‌ای متناسب با سطح دانش و مهارت خود خواهید یافت. تنها با یک ثبت‌نام ساده، به دنیایی از دانش و تجربه دسترسی پیدا خواهید کرد و می‌توانید مهارت‌های خود را ارتقا داده و با آخرین تکنیک‌ها و فناوری‌های روز دنیا آشنا شوید.
                </motion.p>
                <motion.div
                    className='d-flex align-items-center gap-lg-4 border-0 bg-transparent px-0 justify-content-between justify-content-lg-start'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <Button variant={'secondary'} title={'مرکز آموزش'} />
                    <Button variant={'primary'} title={'ثبت نام دوره'} />
                </motion.div>
            </motion.div>

            <motion.div
                className='col-lg-4 mt-lg-5 d-none d-lg-block'
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <CircledTestimonial />
            </motion.div>
        </motion.div>
    )
}

export default EducationCenter
