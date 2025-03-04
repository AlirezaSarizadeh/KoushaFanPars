import React from 'react'
import Menu from '../components/Menu/Menu'
import Image from 'next/image'
import images from '../public/assets/images'
import Link from 'next/link'
import { LuUsers } from "react-icons/lu";
import { Users } from 'lucide-react'


const Header = () => {
    return (
        <header className='d-flex align-items-center justify-content-between pt-lg-4'>
            <Menu />
            <Link href={'/'}>
                <Image src={images.mainLogo} alt='KFP LOGO' width={175} height={50} />
            </Link>
            <Link href={'/'}>
                {/* <Image src={images.userIco} alt='USER ICON' width={40} height={40} /> */}
                <Users size={32} className='text-dark' />
            </Link>
        </header>
    )
}

export default Header
