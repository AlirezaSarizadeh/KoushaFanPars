'use client'
import images from '@/app/public/assets/images';
import Image from 'next/image';
import React from 'react'
import { Card } from "react-bootstrap";
import './JobOpsStepCard.css'
const JobOpsStepCard = () => {
    return (
        <div>
            <Card className='jobOpsStepsCard py-3' style={{ width: "18rem", border: "none" }}>
                <Card.Body>
                    <span className='josc-icon mb-3'>
                        <Image src={images.stepOne} className='img-fluid' alt='sa' />
                    </span>
                    <Card.Title className="text-center fw-normal" style={{ color: "#333", fontSize: "1.2rem" }}>
                        پرکردن فرم و ارسال زمه
                    </Card.Title>
                    <Card.Text className="text-center fw-light" style={{ color: "#666", marginTop: "1rem" }}>
                        Curabitur sit amet maximus ligula. Nam<br />
                        a nulla ante. Nam sodales
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default JobOpsStepCard
