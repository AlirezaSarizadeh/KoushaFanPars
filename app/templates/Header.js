'use client';
import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu/Menu';
import Image from 'next/image';
import images from '../public/assets/images';
import Link from 'next/link';
import { Users, LogOut } from 'lucide-react';
import { useUser } from '@/context/UserContext';
import toast, { Toaster } from 'react-hot-toast';

const Header = () => {
    const { user, isLoggedIn, logout } = useUser();
    const [isLoading, setIsLoading] = useState(true); // Track loading state
    const [menuData, setMenuData] = useState([]);

    // Debug context values and manage loading state
    useEffect(() => {


        const fetchMenu = async () => {
            try {
                const formData = new FormData();
                formData.append("parent_id", 0);

                const response = await fetch("https://api.kfp-dental.com/api/menu", {
                    method: "POST",
                    body: formData,
                });

                if (!response.ok) throw new Error("Failed to fetch");

                const data = await response.json();
                setMenuData(data);

            } catch (error) {
                console.error("Error fetching menu:", error);
            }
        };

        fetchMenu();
        setIsLoading(false);
    }, [user, isLoggedIn]);

    const userLink = isLoggedIn ? '/dashboard' : '/auth/login';

    const handleLogout = () => {
        logout();
        toast.success('با موفقیت خارج شدید', {
            position: 'top-center',
            duration: 3000,
        });
    };

    return (
        <header className="d-flex align-items-center justify-content-between pt-lg-4 pt-4">
            <Toaster position="top-center" reverseOrder={false} />
            <Menu menuData={menuData} />
            <Link href="/">
                <Image src={images.mainLogo} alt="KFP LOGO" className="main-logo" width={175} height={50} />
            </Link>
            <div className="d-flex align-items-center">
                {isLoading ? (
                    <div className="d-flex align-items-center">
                        <div className="ms-3 placeholder-glow">
                            <span className="placeholder col-12" style={{ width: '120px', height: '32px', borderRadius: '25px' }}></span>
                        </div>
                    </div>
                ) : (
                    <>
                        {isLoggedIn && user && (
                            <span className="me-2">پنل کاربری</span>
                        )}
                        <Link href={userLink}>
                            <Users size={32} className="text-dark" />
                        </Link>
                        {isLoggedIn && (
                            <button
                                onClick={handleLogout}
                                className="ms-3 btn text-dark text-decoration-none d-flex align-items-center"
                            >
                                خروج
                                <LogOut size={32} className="text-dark ms-2" />
                            </button>
                        )}
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;