'use client'
import React from 'react'
import DOMPurify from 'dompurify'
import './productListHero.css'
import Card from 'react-bootstrap/Card'
import Title from '../utils/title/Title'
import Button from '../utils/button/Button'

const ProductListHero = ({ gradient, data }) => {
    // Sanitize the HTML
    const safeDesc = DOMPurify.sanitize(data.desc || '');

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
                <Card.Text
                    className='text-justify mt-3'
                    dangerouslySetInnerHTML={{ __html: safeDesc }}
                />
                <Card.Footer className='d-flex align-items-center gap-lg-4 border-0 bg-transparent px-0'>
                    <Button variant={'primary'} title={'تماس باما'} />
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}

export default ProductListHero
