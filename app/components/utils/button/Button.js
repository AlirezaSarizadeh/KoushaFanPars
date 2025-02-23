import React from 'react'
import './button.css'
import Image from 'next/image'
import images from '@/app/public/assets/images'
import Link from 'next/link'

const Button = ({ variant, title , href}) => {
    return (
        <Link href={'' + href} className={`${variant === "primary" ? 'primaryButton' : 'secondaryButton'} custom-button`}>
            {title}

            <span className='button-arrow'>
                <Image src={images.arrowLeftIco} width={18} alt='arrow-button' />
            </span>
        </Link>
    )
}

export default Button
