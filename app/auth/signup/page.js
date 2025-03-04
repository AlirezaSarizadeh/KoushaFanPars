'use client'
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../global.auth.css'
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import images from '@/app/public/assets/images';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container fluid>
            <Row className="h-100 d-flex align-items-center auth-color-side">
                <Col md={5} className="p-5 bg-white vh-100 auth-form-side">
                    {/* Right side form */}
                    <Form className='d-flex flex-column justify-content-around'>
                        <div className='auth-heading d-flex flex-column gap-2'>
                            <Image src={images.mainLogo} alt='logo' />
                            <h3 className='fs-1 mt-lg-5 mt-3 fw-bold'>
                                ثبت نام
                            </h3>
                            <p className='text-justify fw-medium'>
                                در کنار 30 سال تولید ملی بصورت انحصاری و رسمی با شرکت های مطرح دنیا از جمله  (Vita ، 3shape ، imes-icore ، Redon ) همکاری متقابل داشته باشد و پاسخگوی نیاز روز جامعه دندانپزشکی و دندانسازی ایران همپای تکنولوژِی روز دنیا باشد.

                            </p>
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>نام</Form.Label>
                            <Form.Control type="text" placeholder="" />
                            {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>نام خانوادگی</Form.Label>
                            <Form.Control type="text" placeholder="" />
                            {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>ایمیل </Form.Label>
                            <Form.Control type="email" placeholder="" />
                            {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>کد ملی </Form.Label>
                            <Form.Control type="number" placeholder="" />
                            {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>رمز عبور</Form.Label>
                            <InputGroup>
                                <Form.Control style={{ borderRadius: '0 8px 8px 0' }} type={showPassword ? "text" : "password"} />
                                {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                                <InputGroup.Text className='opacity-75' onClick={togglePasswordVisibility}>
                                    {showPassword ? <Eye /> : <EyeOff />}
                                </InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>تکرار رمز عبور</Form.Label>
                            <InputGroup>
                                <Form.Control style={{ borderRadius: '0 8px 8px 0' }} type={showPassword ? "text" : "password"} />
                                {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                                <InputGroup.Text className='opacity-75' onClick={togglePasswordVisibility}>
                                {showPassword ? <Eye /> : <EyeOff />}
                                </InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <Button variant="" className="auth-primary-button w-100 my-3" type="submit">
                            ثبت نام
                        </Button>
                        <div className='auth-hr-devider position-relative text-center'>
                            <span className='px-2 position-relative bg-white small' style={{ zIndex: '2' }}>
                                یا
                            </span>
                        </div>
                        <Button variant="" className="auth-secondary-button w-100 mt-3" type="submit">
                            ورود
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

export default LoginForm;