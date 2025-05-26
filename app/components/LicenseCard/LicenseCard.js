import images from '@/app/public/assets/images'
import Image from 'next/image'
import './licenseCard.css'
import React from 'react'

const LicenseCard = () => {
  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>
      <Image src={images.licenseImage} alt='license' className='license-img'/>
      <p style={{color:'#044F97'}} className='fw-light mt-3 fs-5'>
        ISO 43385
      </p>
    </div>
  )
}

export default LicenseCard
