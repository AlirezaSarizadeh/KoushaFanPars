import images from '@/app/public/assets/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './productCard.css'
import { Card } from 'react-bootstrap'

const ProductCard = ({ hoverColor , bgColor , data}) => {

    const safeData = Array.isArray(data) ? data : [data];

    return (
        <Link href={'/'}>
            <Card className="border-0 text-center p-3 rounded-4 product-list-card" style={{ minHeight: '400px', backgroundColor: bgColor}}>
                {/* Image */}
                <div className="popCours-card-img rounded-4 p-3"
                    style={{
                        transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#bae0f5")} // Reset to original
                >
                    <Image
                        src={images.productSample}
                        width={288} // Adjust based on your design
                        height={288}
                        alt="Doctor"
                        className="rounded-4 w-100"
                        style={{ objectFit: 'scale-down' }}
                    />
                </div>

                {/* Card Body */}
                <Card.Body>
                    <Card.Title className="fw-bold fs-5">{safeData[0].title}</Card.Title>
                    {/* <Card.Text className="text-muted fs-6">
                    دوره مبتدی دندان‌سازی
                </Card.Text> */}
                </Card.Body>
            </Card>
        </Link>
    )
}

export default ProductCard
