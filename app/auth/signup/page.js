'use client'
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Eye, EyeOff } from 'lucide-react';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container fluid>
            <Row className="vh-100 d-flex align-items-center">
                <Col md={6} className="bg-primary text-white p-5">
                    {/* Left side content */}
                    <h1>ثبت نام</h1>
                    <p>در کاردار سالانه تولیدی و رسمی با شرکت های مطرح دبیاز (Vita ,3shape ,imes-icore ,Redon) همکاری متقابل داشته و پاسخگو به لازم جامعه دندانپزشکی و دندانسازی ایران همیشه نگاهوارد زودنیا باشد.</p>
                </Col>
                <Col md={6} className="p-5">
                    {/* Right side form */}
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>نام</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicLastName">
                            <Form.Control type="text" placeholder="نام خانوادگی" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="ایمیل" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPhone">
                            <Form.Control type="tel" placeholder="شماره تلفن" />
                        </Form.Group>
                        <Form.Group controlId="formBasicAddress">
                            <Form.Control type="text" placeholder="آدرس" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <InputGroup>
                                <FormControl
                                    type={showPassword ? "text" : "password"}
                                    placeholder="رمز عبور"
                                />
                                <InputGroup.Text onClick={togglePasswordVisibility}>
                                    {showPassword ? <EyeOff /> : <Eye />}
                                </InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group controlId="formBasicConfirmPassword">
                            <InputGroup>
                                <FormControl
                                    type={showPassword ? "text" : "password"}
                                    placeholder="تکرار رمز عبور"
                                />
                                <InputGroup.Text onClick={togglePasswordVisibility}>
                                    {showPassword ? <EyeOff /> : <Eye />}
                                </InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100 mt-3">
                            ثبت نام
                        </Button>
                        <div className="mt-4">
                            <span>قبلاً ثبت نام کرده‌اید؟</span>
                            <Button variant="link">ورود</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginForm;