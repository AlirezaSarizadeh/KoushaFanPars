import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Image from 'next/image'
import images from '../public/assets/images'
import Link from 'next/link'

const Header = () => {
    return (
        <header className='d-flex align-items-center justify-content-between container-custom'>
            <Navbar />
            <Link href={'/'}>
                <Image src={images.mainLogo} alt='KFP LOGO' width={175} height={50} />
            </Link>
            <Link href={'/'}>
                <Image src={images.userIco} alt='USER ICON' width={40} height={40} />
            </Link>
        </header>
    )
}

export default Header
