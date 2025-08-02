'use client';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../global.auth.css';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import images from '@/app/public/assets/images';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { useUser } from '@/context/UserContext';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const userContext = useUser();

  if (!userContext) {
    console.error('UserContext is not available. Ensure LoginForm is wrapped in UserProvider.');
    return <div>خطا: لطفاً بررسی کنید که UserContext به درستی تنظیم شده است.</div>;
  }

  const { login } = userContext;

  // Load remembered credentials on component mount
  useEffect(() => {
    const remembered = JSON.parse(localStorage.getItem('rememberMe'));
    if (remembered) {
      setPhone(remembered.phone || '');
      setPassword(remembered.password || '');
      setRememberMe(true);
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const formdata = new FormData();
      formdata.append('phone', phone);
      formdata.append('password', password);

      const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };

      const response = await fetch('https://api.kfp-dental.com/api/login', requestOptions);
      const result = await response.json();
      console.log('API Response:', result); // Debug log

      if (response.ok && result[0]?.token) {
        const userData = {
          first_name: result[0].first_name,
          last_name: result[0].last_name,
          phone: result[0].phone,
          email: result[0].email,
          token: result[0].token,
          id: result[0].id
        };
        console.log('User Data to Save:', userData); // Debug log
        login(userData);

        if (rememberMe) {
          localStorage.setItem('rememberMe', JSON.stringify({ phone, password }));
        } else {
          localStorage.removeItem('rememberMe');
        }

        toast.success('ورود با موفقیت انجام شد!');
        setTimeout(() => {
          router.push('/');
        }, 1500);
      } else {
        setError(result.message || 'خطایی در ورود رخ داد');
        toast.error(result.message || 'خطایی در ورود رخ داد');
      }
    } catch (error) {
      console.error('Login Error:', error); // Debug log
      setError('نام کاربری یا رمز عبور اشتباه است');
      toast.error('نام کاربری یا رمز عبور اشتباه است');
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterRedirect = () => {
    router.push('/auth/signup');
  };

  return (
    <Container fluid>
      <Toaster position="top-right" reverseOrder={false} />
      <Row className="h-100 d-flex align-items-center auth-color-side">
        <Col md={5} className="p-5 bg-white vh-100 auth-form-side">
          <Form className="d-flex flex-column justify-content-around h-100" onSubmit={handleLogin}>
            <div className="auth-heading d-flex flex-column gap-2">
              <Image src={images.mainLogo} alt="logo" />
              <h3 className="fs-1 mt-lg-5 mt-3 fw-bold">ورود کاربر</h3>
              <p className="text-justify fw-medium">
                در کنار 30 سال تولید ملی بصورت انحصاری و رسمی با شرکت های مطرح دنیا از جمله (Vita ، 3shape ،
                imes-icore ، Redon) همکاری متقابل داشته باشد و پاسخگوی نیاز روز جامعه دندانپزشکی و دندانسازی
                ایران همپای تکنولوژی روز دنیا باشد.
              </p>
            </div>
            {error && <p className="text-danger mb-3">{error}</p>}
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>
                نام کاربری
                <span className="small ms-1">(نام کاربری همان شماره تلفن شماست)</span>
              </Form.Label>
              <Form.Control
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>رمز عبور</Form.Label>
              <InputGroup>
                <Form.Control
                  style={{ borderRadius: '0 8px 8px 0' }}
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <InputGroup.Text className="opacity-75" onClick={togglePasswordVisibility}>
                  {showPassword ? <Eye /> : <EyeOff />}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <div className="d-flex align-items-center justify-content-between">
              <Form.Group className="" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  className="px-0 small"
                  label="به خاطر داشته باش"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
              </Form.Group>
              <Link className="text-decoration-underline text-dark" href="/auth/forgot-password">
                فراموشی رمز عبور
              </Link>
            </div>
            <Button
              variant=""
              className="auth-primary-button w-100 my-3"
              type="submit"
              disabled={loading}
            >
              {loading ? 'در حال ورود...' : 'ورود'}
            </Button>
            <div className="auth-hr-devider position-relative text-center">
              <span className="px-2 position-relative bg-white small" style={{ zIndex: '2' }}>
                یا
              </span>
            </div>
            <Button
              variant=""
              className="auth-secondary-button w-100 mt-3"
              onClick={handleRegisterRedirect}
              disabled={loading}
            >
              ثبت نام
            </Button>
          </Form>
        </Col>
        <Col md={6} className="text-white p-0">{/* Left side content */}</Col>
      </Row>
    </Container>
  );
};

export default LoginForm;