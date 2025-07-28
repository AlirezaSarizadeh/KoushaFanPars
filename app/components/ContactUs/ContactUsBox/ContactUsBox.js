// components/ContactCard.tsx
import React from "react";
import './contactUsBox.css'
import Title from "../../utils/title/Title";
import Image from "next/image";
import images from "@/app/public/assets/images";
import Link from "next/link";
import AnimatedInput from "../../AnimatedInput/AnimatedInput";
import Button from "../../utils/button/Button";
import ContactFormClient from "../../ContactFormClient/ContactFormClient";

const ContactUsBox = () => {
    return (
        <section
            className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg ctu-box position-relative mt-lg-5 mt-4"
            aria-labelledby="contact-us-title"
            role="region"
        >
            {/* Header Section */}
            {/* Main Content */}
            <div className="p-lg-5 p-4 bg-gray-50 ctu-main-content row">

                <Title id="contact-us-title" as="h1" className="ps-lg-5 pb-lg-5" title={'تماس با ما'} />

                <article className="col-lg-7 ps-lg-5" aria-label="توضیح درباره شرکت و ثبت نظر">
                    <p>
                        امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.
                    </p>
                    <section
                        className="p-lg-3 rounded"
                        aria-labelledby="feedback-title contact-methods-title"
                    >
                        <h2 id="feedback-title" className="d-flex align-items-center gap-2 mt-lg-3 mt-2 fs-5 textColor">
                            <Image src={images.chatIcon} alt="آیکون گفتگو" width={24} height={24} />
                            ثبت نظر
                        </h2>

                        {/* فرم داینامیک تماس */}
                        <ContactFormClient />

                        <h2 id="contact-methods-title" className="d-flex align-items-center gap-2 mt-lg-5 mt-4 fs-5 textColor">
                            راه های ارتباطی
                        </h2>

                        <address>
                            <p className="d-flex align-items-center justify-content-start gap-1 mt-lg-4 mt-2">
                                <Image src={images.cut_loc} alt="آیکون لوکیشن" width={24} height={24} />
                                دفتر مرکزی: تهران، شهرک غرب، بلوار فرحزادی، بالاتر از بیمارستان آتیه، خیابان سپهر، پلاک 45
                            </p>
                            <p className="d-flex align-items-center justify-content-start gap-1 mt-lg-4 mt-2">
                                <Image src={images.cut_loc} alt="آیکون لوکیشن" width={24} height={24} />
                                کارخانه: جاده قدیم قم، شهرک صنعتی شمس آباد، فاز 3، بلوار سروستان، خیابان گل سرخ 9
                            </p>
                            <p className="d-flex align-items-center justify-content-start gap-1 mt-lg-4 mt-2" aria-label="تلفن دفتر مرکزی">
                                <Image src={images.ctu_mail} alt="آیکون تلفن" width={24} height={24} />
                                <span className="me-lg-4 me-2">تلفن دفتر مرکزی: 02155545958</span>
                                <span className="me-lg-4 me-2">تلفن دفتر مرکزی: 02155545958</span>
                            </p>
                            <p className="d-flex align-items-center justify-content-start gap-1 mt-lg-4 mt-2" aria-label="پست الکترونیک">
                                <Image src={images.ctu_cart} alt="آیکون ایمیل" width={24} height={24} />
                                <span>پست الکترونیک: <a href="mailto:info@kfp-dental.com" className="text-decoration-underline">info@kfp-dental.com</a></span>
                            </p>
                        </address>
                    </section>
                </article>

                <aside className="col-lg-5 d-flex align-items-end justify-content-end flex-column gap-3 gap-lg-5 pe-lg-5" aria-label="اطلاعات و لینک شبکه‌های اجتماعی">
                    <figure className="w-100 h-100">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d389.37649604964514!2d51.35730682669518!3d35.767887174784484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e07927f0eeb51%3A0x892406f57238bf30!2sKFP%20Dental%20Co!5e0!3m2!1sfa!2s!4v1753683748204!5m2!1sfa!2s"
                            width="600"
                            height="450"
                            style={{ border: 0, width: '100%', height: '100%' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="نقشه گوگل دفتر مرکزی کوشافن پارس"
                        ></iframe>
                        <figcaption className="visually-hidden">نقشه گوگل دفتر مرکزی کوشافن پارس</figcaption>
                    </figure>

                    <nav aria-label="شبکه‌های اجتماعی">
                        <ul className="d-flex align-items-center justify-content-end gap-3 social-media-container list-unstyled mb-0">
                            <li>
                                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="اینستاگرام">
                                    <Image src={images.instagramCtu} alt="آیکون اینستاگرام" width={32} height={32} />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="یوتیوب">
                                    <Image src={images.youtube_icon} alt="آیکون یوتیوب" width={32} height={32} />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://wa.me" target="_blank" rel="noopener noreferrer" aria-label="واتساپ">
                                    <Image src={images.whatasapp_icon} alt="آیکون واتساپ" width={32} height={32} />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="لینکدین">
                                    <Image src={images.linkedin_icon} alt="آیکون لینکدین" width={32} height={32} />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </aside>

            </div>

        </section>
    );
};

export default ContactUsBox;
