import React from 'react'
import Title from '../../utils/title/Title'
import Lead from '../../utils/lead/Lead'
import Button from '../../utils/button/Button'

const CustomerServices = () => {
  return (
    <div className='row align-items-center'>
      <div className='col-lg-8'>
        <Title title={'خدمات پس از فروش'} />
        <Lead boldText={'کوشایار'} lightText={'همراه همیشگی شما در هر شرایط'} />
        <p className='text-justify py-2'>
          امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.
        </p>
        <div className='d-flex align-items-center gap-lg-4 border-0 bg-transparent px-0'>
          <Button variant={'secondary'} title={'صدای مشتری'} />
          <Button variant={'primary'} title={'ارتباط با کارشناسان'} />
        </div>
      </div>
      <div className='col-lg-4'>
        Iran map
      </div>
    </div>
  )
}

export default CustomerServices
