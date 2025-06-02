'use client'
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../global.auth.css'
import Image from 'next/image';
import images from '@/app/public/assets/images';

const forgetPassword = () => {

    return (
        <Container fluid>
            <Row className="h-100 d-flex align-items-center auth-color-side">
                <Col md={5} className="p-5 bg-white vh-100 auth-form-side">
                    {/* Right side form */}
                    <Form className='d-flex flex-column justify-content-around'>
                        <div className='auth-heading d-flex flex-column gap-2'>
                            <Image src={images.mainLogo} alt='logo' />
                            <h3 className='fs-1 mt-lg-5 mt-3 fw-bold'>
                                بازنشانی رمز عبور
                            </h3>
                            <p className='text-justify fw-medium'>

                            برای بازنشانی گذرواژه خود ابتدا شماره موبایل خود را وارد نمایید
                            </p>
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>شماره موبایل</Form.Label>
                            <Form.Control type="number" placeholder="" />
                            {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <Button variant="" className="auth-primary-button w-100 my-3" type="submit">
                            ارسال رمز یکبار مصرف
                        </Button>
                    </Form>
                </Col>
                <Col md={6} className="text-white p-0 ">
                    {/* Left side content */}
                </Col>
            </Row>
        </Container>
    );
};

export default forgetPassword;