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
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg ctu-box position-relative mt-lg-5 mt-4">
            {/* Header Section */}

            {/* Main Content */}
            <div className="p-lg-5 p-4 bg-gray-50 ctu-main-content row">

                <Title className="ps-lg-5 pb-lg-5" title={'تماس با ما'} />

                <div className="col-lg-7 ps-lg-5">
                    <p>
                        امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.
                    </p>
                    <div className=" p-lg-3 rounded">
                        <span className="d-flex align-items-center gap-2 mt-lg-3 mt-2 fs-5 textColor">
                            <Image src={images.chatIcon} alt="icon" />
                            {/* <Title title={'صدای مشتری'} /> */}
                            ثبت نظر
                        </span>
                        {/* <form>
                            <div className="row align-items-center justify-content-start">
                                <div className="col-lg-6 mt-lg-5 mt-4">
                                    <span className="mt-3 mt-lg-5">
                                        <AnimatedInput id="name" label="نام" name="name" type="text" />
                                    </span>
                                </div>
                                <div className="col-lg-6 mt-lg-5 mt-4">
                                    <span className="mt-3 mt-lg-5">
                                        <AnimatedInput id="name" label="نام خانوادگی" name="name" type="text" />
                                    </span>
                                </div>
                                <div className="col-lg-12 mt-lg-5 mt-4">
                                    <span className="mt-3 mt-lg-5">
                                        <AnimatedInput id="description" label="شرح دهید" name="description" as="textarea" rows="4" />
                                    </span>
                                </div>
                                <div className="col-12 mt-lg-4 mt-2 d-flex align-items-center justify-content-end">
                                    <Button title={'ثبت دیدگاه'} variant={'secondary'} />
                                </div>
                            </div>
                        </form> */}
                        {/* ✅ Dynamic Contact Form */}
                        <ContactFormClient />
                        <span className="d-flex align-items-center gap-2 mt-lg-3 mt-2 fs-5 textColor">
                            راه های ارتباطی
                        </span>
                        <span className="d-flex align-items-center justify-content-start gap-1 mt-lg-4 mt-2">
                            <Image src={images.cut_loc} alt="icon" />
                            دفتر مرکزی:تهران، شهرک غرب، بلوار فرحزادی، بالاتر از بیمارستان آتیه، خیابان سپهر،پلاک 45
                        </span>
                        <span className="d-flex align-items-center justify-content-start gap-1 mt-lg-4 mt-2">
                            <Image src={images.cut_loc} alt="icon" />
                            کارخانه:آدرس کارخانه: جاده قدیم قم، شهرک صنعتی شمس آباد، فاز 3، بلوار سروستان ،خیابان گل سرخ 9
                        </span>
                        <span className="d-flex align-items-center justify-content-start gap-1 mt-lg-4 mt-2">
                            <Image src={images.ctu_mail} alt="icon" />
                            <span className="me-lg-4 me-2">
                                تلفن دفتر مرکزی : 02155545958
                            </span>
                            <span className="me-lg-4 me-2">
                                تلفن دفتر مرکزی : 02155545958
                            </span>
                        </span>
                        <span className="d-flex align-items-center justify-content-start gap-1 mt-lg-4 mt-2">
                            <Image src={images.ctu_cart} alt="icon" />
                            پست الکترونیک:
                            info@kfp-dental.com
                        </span>
                    </div>
                </div>

                <div className="col-lg-5 d-flex align-items-end justify-content-end flex-column gap-3 gap-lg-5 pe-lg-5">
                    <span className="w-100">
                        <Image className="w-100 iran_map_pic" style={{ objectFit: 'cover' }} src={images.mapImage} alt="" />
                    </span>

                    <span className="d-flex align-items-center justify-content-end gap-3 social-media-container">
                        <Link href={'mapImage'}><Image src={images.instagramCtu} alt="icon" /></Link>
                        <Link href={'mapImage'}><Image src={images.youtube_icon} alt="icon" /></Link>
                        <Link href={'mapImage'}><Image src={images.whatasapp_icon} alt="icon" /></Link>
                        <Link href={'mapImage'}><Image src={images.linkedin_icon} alt="icon" /></Link>
                    </span>
                </div>

            </div>

        </div>
    );
};

export default ContactUsBox;