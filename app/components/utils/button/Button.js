import React from 'react';
import './button.css';
import Image from 'next/image';
import images from '@/app/public/assets/images';

const Button = ({ variant = 'primary', title, onClick, type = 'button', className = '' }) => {
    const baseClasses = 'custom-button';

    const variantClasses = {
        primary: 'primaryButton',
        secondary: 'secondaryButton',
    };

    const buttonClasses = `border ${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${className}`.trim();

    return (
        <button type={type} onClick={onClick} className={buttonClasses}>
            {title}
            <span className='button-arrow'>
                <Image src={images.arrowLeftIco} width={18} alt='arrow-button' />
            </span>
        </button>
    );
};

export default Button;
