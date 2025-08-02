import React from 'react';
import './button.css';
import Image from 'next/image';
import Link from 'next/link';
import images from '@/app/public/assets/images';

const Button = ({ variant = 'primary', title, href, onClick, type = 'button', className = '' }) => {
    const baseClasses = 'custom-button';

    const variantClasses = {
        primary: 'primaryButton',
        secondary: 'secondaryButton',
    };

    const buttonClasses = `border ${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${className}`.trim();

    // ✅ If href is provided, render as Link
    if (href) {
        return (
            <Link href={href} className={buttonClasses}>
                {title}
                <span className="button-arrow">
                    <Image src={images.arrowLeftIco} width={18} alt="arrow-button" />
                </span>
            </Link>
        );
    }

    // ✅ Otherwise render as regular button
    return (
        <button type={type} onClick={onClick} className={buttonClasses}>
            {title}
            <span className="button-arrow">
                <Image src={images.arrowLeftIco} width={18} alt="arrow-button" />
            </span>
        </button>
    );
};

export default Button;
