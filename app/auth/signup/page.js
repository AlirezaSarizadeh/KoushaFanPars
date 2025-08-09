'use client';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../global.auth.css';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import images from '@/app/public/assets/images';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (password !== confirmPassword) {
      setError('رمز عبور و تکرار آن مطابقت ندارند');
      setLoading(false);
      return;
    }

    try {
      const formdata = new FormData();
      formdata.append('first_name', firstName);
      formdata.append('last_name', lastName);
      formdata.append('phone', phone);
      formdata.append('password', password);
      formdata.append('password_confirmation', confirmPassword);

      const response = await fetch('/api/register', {
        method: 'POST',
        body: formdata,
      });

      if (response.status === 203) {
        toast.error('این شماره تلفن قبلا ثبت شده است ، لطفا وارد شوید');
        setTimeout(() => {
          router.push('/auth/login');
        }, 1000);
        return;
      }

      const result = await response.json();

      if (response.ok && result[0]?.token) {
        toast.success('ثبت نام با موفقیت انجام شد!');
        setTimeout(() => {
          router.push('/auth/login');
        }, 1500);
      } else {
        setError(result.message || 'خطایی در ثبت نام رخ داد');
        toast.error(result.message || 'خطایی در ثبت نام رخ داد');
      }
    } catch {
      setError('خطایی در ارتباط با سرور رخ داد');
      toast.error('خطایی در ارتباط با سرور رخ داد');
    } finally {
      setLoading(false);
    }
  };

  const handleLoginRedirect = () => {
    router.push('/auth/login');
  };

  return (
    <Container fluid>
      <Toaster position="top-right" reverseOrder={false} />
      <Row className="h-100 d-flex align-items-center auth-color-side">
        <Col md={5} className="p-5 bg-white vh-100 auth-form-side">
          <Form className="d-flex flex-column justify-content-around" onSubmit={handleRegister} noValidate>
            <div className="auth-heading d-flex flex-column gap-2">
              <Image src={images.mainLogo} alt="logo" />
              <h3 className="fs-1 mt-lg-5 mt-3 fw-bold">ثبت نام</h3>
              <p className="text-justify fw-medium">
                در کنار 30 سال تولید ملی بصورت انحصاری و رسمی با شرکت های مطرح دنیا از جمله (Vita ، 3shape ، imes-icore ، Redon) همکاری متقابل داشته باشد و پاسخگوی نیاز روز جامعه دندانپزشکی و دندانسازی ایران همپای تکنولوژی روز دنیا باشد.
              </p>
            </div>
            {error && <p className="text-danger mb-3">{error}</p>}
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>نام</Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>نام خانوادگی</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>شماره تلفن</Form.Label>
              <Form.Control
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>رمز عبور</Form.Label>
              <InputGroup>
                <Form.Control
                  style={{ borderRadius: '0 8px 8px 0' }}
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
                <InputGroup.Text className="opacity-75" onClick={togglePasswordVisibility} role="button" tabIndex={0} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') togglePasswordVisibility(); }}>
                  {showPassword ? <Eye /> : <EyeOff />}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>تکرار رمز عبور</Form.Label>
              <InputGroup>
                <Form.Control
                  style={{ borderRadius: '0 8px 8px 0' }}
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  required
                />
                <InputGroup.Text className="opacity-75" onClick={togglePasswordVisibility} role="button" tabIndex={0} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') togglePasswordVisibility(); }}>
                  {showPassword ? <Eye /> : <EyeOff />}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <Button
              variant=""
              className="auth-primary-button w-100 my-3"
              type="submit"
              disabled={loading}
            >
              {loading ? 'در حال ثبت نام...' : 'ثبت نام'}
            </Button>
            <div className="auth-hr-devider position-relative text-center">
              <span className="px-2 position-relative bg-white small" style={{ zIndex: 2 }}>
                یا
              </span>
            </div>
            <Button
              variant=""
              className="auth-secondary-button w-100 mt-3"
              onClick={handleLoginRedirect}
              disabled={loading}
            >
              ورود
            </Button>
          </Form>
        </Col>
        <Col md={6} className="text-white p-0">{/* Left side content */}</Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;
