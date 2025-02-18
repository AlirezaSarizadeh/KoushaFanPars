import React from 'react'
import CounterBox from '../../utils/counterBox/CounterBox'
import './counters.css'
import images from '@/app/public/assets/images'
const Counters = () => {
  return (
    <section className="row row-cols-lg-4 row-cols-2 align-items-center py-lg-5 py-3 container-custom counterSeciton">
      <CounterBox targetNumber={340} label="پوشش مراکز درمانی" icon={images.counterIcon1} />
      <CounterBox targetNumber={70} label="تجهیز لابراتوارهای کشور" icon={images.counterIcon2} />
      <CounterBox targetNumber={20} label="سال سابقه خدماتی" icon={images.counterIcon3} />
      <CounterBox targetNumber={20} label="نمایندگی استانی در کشور" icon={images.counterIcon4} />
    </section>
  )
}

export default Counters
