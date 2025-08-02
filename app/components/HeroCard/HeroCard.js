'use client'
import React from 'react'
import './hero.css'
import Card from 'react-bootstrap/Card'
import Title from '../utils/title/Title'
import Button from '../utils/button/Button'

const HeroCard = () => {
    return (
        <>

            {/* This Card Only Shows On Desktop */}
            <Card
                bg={'light'}
                key={'light'}
                text={'dark'}
                style={{ width: '18rem' }}
                className="mb-2 w-100 hero-card d-none d-lg-block"
            >
                <Card.Header className='border-0 bg-transparent'>
                    <Title title={'درباره ما'} />
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        <h2 className='fw-bold d-flex flex-column gap-3'>
                            <span className='lead fw-normal fs-3'>
                                شرکت مهندسی تولیدی
                            </span>
                            دانش بنیان کوشافن پارس
                        </h2>
                    </Card.Title>
                    <Card.Text className='text-justify mt-3'>
                        شـرکت مهندسـي تولیدي کوشـافن پارس در زمینه تولید تجهیـزات دندانپزشـکي و دندانسـازي و نیـز تامین مـواد مصرفی فعالیت می نماید. کوشـا فـن پـارس بزرگترین تولیـد کننده تجهیـزات و لوازم دندانپزشـکی و دندانسـازی در کشـور مـی باشـد کـه بـا سـرمایه گـذاری در بخـش تحقیـق و توسـعه و با هدف توسـعه فنـاوری در زمینـه طراحـی، سـاخت و تولیـد تجهیـزات مرتبـط بـا صنعت دندانپزشـکی و دندانسـازی فعالیت دارد. هـم اکنون محصـولات تولیدی این شرکت با بالاتریـن کیفیت و قیمت رقابتی نسـبت بـه سـایر برندهـای هم تـراز خود در دنیـا مورد اسـتفاده مصـرف کنندگان قـرار می گیرد. کوره های دندانسازی شامل کوره پرسلن AT 100 و AT 300 تمام اتوماتیک، کوره پرس AT 300P تمام اتوماتیک، کوره پرسلن AT 3000 تمام اتوماتیک، کوره های حذف موم سیلندر، کوره گلیزر، کوره زینترینگ زیرکونیا است. میزهای تولیدی این شرکت به دو گروه لابراتواری و آموزشی کلینیکی تقسیم می شود
                    </Card.Text>
                    <Card.Footer className='d-flex align-items-center gap-lg-4 border-0 bg-transparent px-0'>
                        <Button variant={'secondary'} title={'درباره ما'} />
                        <Button variant={'primary'} title={'تماس باما'} />
                    </Card.Footer>
                </Card.Body>
            </Card>

            {/* This Card Is For Mobile Screen  */}
            <Card
                bg={'light'}
                key={'light2'}
                text={'dark'}
                style={{ width: '18rem' }}
                className="mb-2 w-100 d-lg-none border-0 bg-transparent"
            >
                <Card.Header className='border-0 bg-transparent px-0'>
                    <Title title={'درباره ما'} />
                </Card.Header>
                <Card.Body className='p-0'>
                    <Card.Title>
                        <h1 className='fw-bold d-flex flex-column gap-3'>
                            <span className='lead fw-normal fs-3'>
                                شرکت مهندسی تولیدی
                            </span>
                            دانش بنیان کوشافن پارس
                        </h1>
                    </Card.Title>
                    <Card.Text className='text-justify mt-3'>
                        شـرکت مهندسـي تولیدي کوشـافن پارس در زمینه تولید تجهیـزات دندانپزشـکي و دندانسـازي و نیـز تامین مـواد مصرفی فعالیت می نماید. کوشـا فـن پـارس بزرگترین تولیـد کننده تجهیـزات و لوازم دندانپزشـکی و دندانسـازی در کشـور مـی باشـد کـه بـا سـرمایه گـذاری در بخـش تحقیـق و توسـعه و با هدف توسـعه فنـاوری در زمینـه طراحـی، سـاخت و تولیـد تجهیـزات مرتبـط بـا صنعت دندانپزشـکی و دندانسـازی فعالیت دارد. هـم اکنون محصـولات تولیدی این شرکت با بالاتریـن کیفیت و قیمت رقابتی نسـبت بـه سـایر برندهـای هم تـراز خود در دنیـا مورد اسـتفاده مصـرف کنندگان قـرار می گیرد. کوره های دندانسازی شامل کوره پرسلن AT 100 و AT 300 تمام اتوماتیک، کوره پرس AT 300P تمام اتوماتیک، کوره پرسلن AT 3000 تمام اتوماتیک، کوره های حذف موم سیلندر، کوره گلیزر، کوره زینترینگ زیرکونیا است. میزهای تولیدی این شرکت به دو گروه لابراتواری و آموزشی کلینیکی تقسیم می شود
                    </Card.Text>
                    <Card.Footer className='d-flex align-items-center gap-lg-4 border-0 bg-transparent px-0 justify-content-between'>
                        <Button variant={'secondary'} title={'درباره ما'} />
                        <Button variant={'primary'} title={'تماس باما'} />
                    </Card.Footer>
                </Card.Body>
            </Card>
        </>
    )
}

export default HeroCard
