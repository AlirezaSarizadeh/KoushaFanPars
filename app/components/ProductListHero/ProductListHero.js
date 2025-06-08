'use client'
import React from 'react'
import './productListHero.css'
import Card from 'react-bootstrap/Card'
import Title from '../utils/title/Title'
import Button from '../utils/button/Button'

const ProductListHero = ({ gradient , data }) => {
    return (
        <Card
            bg={'light'}
            key={'light'}
            text={'dark'}
            className="mb-2 w-100 hero-card product-list-hero-card"
            style={{ '--hero-bg': gradient }}
        >
            <Card.Header className='border-0 bg-transparent'>
                <Title title={data.title} />
            </Card.Header>
            <Card.Body>
                {/* <Card.Title>
                    <h1 className='fw-bold d-flex flex-column gap-3'>
                        <span className='lead fw-normal fs-3'>
                            شرکت مهندسی تولیدی
                        </span>
                        دانش بنیان کوشافن پارس
                    </h1>
                </Card.Title> */}
                <Card.Text className='text-justify mt-3'>
                    {data.desc}
                </Card.Text>
                <Card.Footer className='d-flex align-items-center gap-lg-4 border-0 bg-transparent px-0'>
                    <Button variant={'primary'} title={'تماس باما'} />
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}

export default ProductListHero
