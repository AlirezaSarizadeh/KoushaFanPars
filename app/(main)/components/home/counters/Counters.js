'use client'
import React from 'react'
import CounterBox from '../../utils/counterBox/CounterBox'
import './counters.css'
import images from '@/app/public/assets/images'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.5, ease: 'easeOut' }
  })
}

const Counters = () => {
  return (
    <motion.section
      className="row row-cols-lg-4 row-cols-2 align-items-center py-lg-5 py-3 container-custom"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="col" variants={fadeInUp} custom={0}>
        <CounterBox targetNumber={340} label="پوشش مراکز درمانی" icon={images.counterIcon1} />
      </motion.div>
      <motion.div className="col" variants={fadeInUp} custom={1}>
        <CounterBox targetNumber={70} label="تجهیز لابراتوارهای کشور" icon={images.counterIcon2} />
      </motion.div>
      <motion.div className="col" variants={fadeInUp} custom={2}>
        <CounterBox targetNumber={20} label="سال سابقه خدماتی" icon={images.counterIcon3} />
      </motion.div>
      <motion.div className="col" variants={fadeInUp} custom={3}>
        <CounterBox targetNumber={20} label="نمایندگی استانی در کشور" icon={images.counterIcon4} />
      </motion.div>
    </motion.section>
  )
}

export default Counters
