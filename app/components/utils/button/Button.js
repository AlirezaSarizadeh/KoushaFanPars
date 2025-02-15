import React from 'react'
import './button.css'
import Image from 'next/image'
import images from '@/app/public/assets/images'

const Button = ({ variant, title }) => {
    return (
        <a className={`${variant === "primary" ? 'primaryButton' : 'secondaryButton'} custom-button`}>
            {title}

            <span className='button-arrow'>
                <Image src={images.arrowLeftIco} width={18} alt='arrow-button' />
            </span>
        </a>
    )
}

export default Button
