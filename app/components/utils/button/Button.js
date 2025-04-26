import React from 'react'
import './button.css'
import Image from 'next/image'
import images from '@/app/public/assets/images'
import Link from 'next/link'

const Button = ({ variant = 'primary', title, href, className = '' }) => {
    // Base button classes
    const baseClasses = 'custom-button'
    
    // Variant classes
    const variantClasses = {
        primary: 'primaryButton',
        secondary: 'secondaryButton',
        // Add more variants as needed
    }
    
    // Combine all classes
    const buttonClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${className}`.trim()

    return (
        <Link href={href || '#'} className={buttonClasses}>
            {title}

            <span className='button-arrow'>
                <Image src={images.arrowLeftIco} width={18} alt='arrow-button' />
            </span>
        </Link>
    )
}

export default Button