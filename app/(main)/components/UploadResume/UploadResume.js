'use client';
import React, { useRef, useState } from 'react';
import Button from '@/app/(main)/components/utils/button/Button';
import Image from 'next/image';
import images from '@/app/public/assets/images';
import toast, { Toaster } from 'react-hot-toast';

export default function UploadResume() {
    const fileInputRef = useRef(null);
    const [uploading, setUploading] = useState(false);

    const handleButtonClick = () => fileInputRef.current.click();

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploading(true);

        try {
            // ✅ 1. Upload to local API
            const formData = new FormData();
            formData.append('file', file);

            const uploadRes = await fetch('/api/job/upload', { method: 'POST', body: formData });
            const uploadData = await uploadRes.json();

            if (!uploadData.success) throw new Error('خطا در آپلود فایل');

            const fileUrl = uploadData.url;

            // ✅ 2. Send URL to backend API
            const cvRes = await fetch('https://api.kfp-dental.com/api/cv_insert', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 'file': fileUrl }),
            });

            if (!cvRes.ok) throw new Error('خطا در ارسال اطلاعات رزومه');

            toast.success(' رزومه شما با موفقیت ارسال شد');
        } catch (err) {
            toast.error(`❌ ${err.message}`);
        } finally {
            setUploading(false);
        }
    };

    return (
        <>
            {/* ✅ Toast container */}
            <Toaster position="top-center" reverseOrder={false} />

            <div className='send-resume row row-cols-lg-2 bg-primary col-lg-8 m-auto rounded-5 align-items-center py-4 py-lg-2'>
                <Image src={images.sendResumeAvatar} alt='user' style={{ objectFit: 'contain' }} />
                <div className='d-flex flex-column pe-4'>
                    <span className='fw-bold fs-4 text-light'>ارسال رزومه</span>
                    <span className='fw-light fs-4 text-light'>کوشافن پارس استخدام میکند</span>
                    <p className='text-light mt-3 text-justify'>
                        مرکز آموزش کوشافن پارس، دروازه ورود به دنیای نوین دندانپزشکی است...
                    </p>

                    {/* ✅ Hidden file input */}
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        accept=".pdf,.doc,.docx,.csv"
                        onChange={handleFileChange}
                    />

                    {/* ✅ Button to trigger upload */}
                    <Button
                        className='mt-lg-3 mt-2 me-auto'
                        variant={'secondary'}
                        title={uploading ? 'در حال ارسال...' : 'ارسال رزومه'}
                        onClick={handleButtonClick}
                    />
                </div>
            </div>
        </>
    );
}
