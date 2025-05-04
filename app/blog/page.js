import React from 'react'
import RootLayout from '../(main)/layout'
import Title from '../components/utils/title/Title'
import Image from 'next/image'
import images from '../public/assets/images'
import BlogList from '../components/Blog/BlogList/BlogList'

const page = () => {
    return (
        <RootLayout>
            <div className='row align-items-center mt-lg-2 pt-lg-2 about-main-desc'>
                <div className='col-lg-12 mt-lg-5'>
                    <Title title={'مجله ی کوشافن پارس'} />
                    <h2 className='fw-bold d-flex flex-column gap-3 mt-3'>
                        <span className='lead fs-3 fw-normal'>
                            مقالات و رویداد ها
                        </span>
                        پنجره ای رو به دنیای نوآورانه دندانپزشکی و دندانسازی
                    </h2>
                    <p className='text-justify py-2 lead'>
                        مجله کوشافن پارس، پنجره‌ای رو به دنیای نوآورانه دندانپزشکی و دندانسازی است. در هر شماره از این مجله، با آخرین دستاوردهای علمی و تکنولوژیکی در این حوزه آشنا شده و از نزدیک شاهد حضور فعال شرکت کوشافن پارس در رویدادهای مهم صنعت خواهیم بود. وبلاگ تخصصی این مجله، فضایی است برای تبادل نظر و ارائه مقالات علمی توسط متخصصان و پژوهشگران. همچنین، گالری تصاویر نمایشگاهی، روایتگر حضور پررنگ محصولات و خدمات کوشافن پارس در نمایشگاه‌های داخلی و بین‌المللی است. با دنبال کردن اخبار این مجله، همواره از جدیدترین محصولات و خدمات شرکت و همچنین رویدادهای مهم صنعت دندانپزشکی آگاه خواهید شد
                    </p>
                </div>
                <div className='col-12 d-flex align-items-center justify-content-start gap-lg-4 gap-2 mt-lg-3 '>
                    <span className='rounded-3 px-3 py-2 d-flex align-items-center justify-content-between gap-2 textColor fw-bold' style={{ background: '#bae0f5' }}>
                        <Image src={images.blog_avatars} alt='avatars' />
                        +1000 کاربر
                    </span>
                    <div className='d-flex align-items-center justify-content-between gap-2 textColor fw-normal flex-column lead'>
                        <span className='fw-bold' dir='ltr'>
                            +12k
                        </span>
                        <span>
                            خواننده فعال
                        </span>
                    </div>
                    <div className='d-flex align-items-center justify-content-between gap-2 textColor fw-normal flex-column lead'>
                        <span className='fw-bold' dir='ltr'>
                            +12k
                        </span>
                        <span>
                            خواننده فعال
                        </span>
                    </div>
                    <div className='d-flex align-items-center justify-content-between gap-2 textColor fw-normal flex-column lead'>
                        <span className='fw-bold' dir='ltr'>
                            +12k
                        </span>
                        <span>
                            خواننده فعال
                        </span>
                    </div>
                </div>
            </div>

            {/* COURSES SLIDER */}
            <div className='row align-items-center mt-lg-5 mt-2 py-lg-5 px-lg-4  p-2 justify-content-center' style={{ background: '#e4f0fd', borderRadius: '15px' }}>
                {/* <EducateCourses heading={'دوره مبتدی'} /> */}
                <BlogList heading={'مقالات'}  />
                <BlogList heading={'نمایشگاه ها'}  />
                <BlogList heading={'اخبار'}  />
            </div>
        </RootLayout>
    )
}

export default page
