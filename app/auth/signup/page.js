'use client'
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../global.auth.css';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import images from '@/app/public/assets/images';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast'; // Import react-hot-toast

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Use Next.js router for navigation
  const [loading, setLoading] = useState(false); // Manage loading state

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
      formdata.append("first_name", firstName);
      formdata.append("last_name", lastname);
      formdata.append("phone", phone);
      formdata.append("password", password);
      formdata.append("password_confirmation", confirmPassword);

      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      const response = await fetch("https://api.kfp-dental.com/api/register", requestOptions);

      // ✅ اگر وضعیت 203 باشد، پیام خاص نمایش داده و هدایت به صفحه ورود انجام شود
      if (response.status === 203) {
        toast.error('این شماره تلفن قبلا ثبت شده است ، لطفا وارد شوید');
        setTimeout(() => {
          router.push('/auth/login');
        }, 1000); // کمی تأخیر برای نمایش toast
        return;
      }

      // ✅ در غیر این صورت پاسخ را به صورت JSON پردازش کن
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
    } catch (error) {
      setError('خطایی در ارتباط با سرور رخ داد');
      toast.error('خطایی در ارتباط با سرور رخ داد');
    } finally {
      setLoading(false);
    }
  };


  const handleLoginRedirect = () => {
    router.push('/auth/login'); // Use router for navigation
  };

  return (
    <Container fluid>
      <Toaster position="top-right" reverseOrder={false} /> {/* Add Toaster component */}
      <Row className="h-100 d-flex align-items-center auth-color-side">
        <Col md={5} className="p-5 bg-white vh-100 auth-form-side">
          <Form className='d-flex flex-column justify-content-around'>
            <div className='auth-heading d-flex flex-column gap-2'>
              <Image src={images.mainLogo} alt='logo' />
              <h3 className='fs-1 mt-lg-5 mt-3 fw-bold'>
                ثبت نام
              </h3>
              <p className='text-justify fw-medium'>
                در کنار 30 سال تولید ملی بصورت انحصاری و رسمی با شرکت های مطرح دنیا از جمله (Vita ، 3shape ، imes-icore ، Redon) همکاری متقابل داشته باشد و پاسخگوی نیاز روز جامعه دندانپزشکی و دندانسازی ایران همپای تکنولوژی روز دنیا باشد.
              </p>
            </div>
            {error && <p className="text-danger mb-3">{error}</p>}
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>نام</Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>نام خانوادگی</Form.Label>
              <Form.Control
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>شماره تلفن</Form.Label>
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
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <InputGroup.Text className='opacity-75' onClick={togglePasswordVisibility}>
                  {showPassword ? <Eye /> : <EyeOff />}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>تکرار رمز عبور</Form.Label>
              <InputGroup>
                <Form.Control
                  style={{ borderRadius: '0 8px 8px 0' }}
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <InputGroup.Text className='opacity-75' onClick={togglePasswordVisibility}>
                  {showPassword ? <Eye /> : <EyeOff />}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <Button
              variant=""
              className="auth-primary-button w-100 my-3"
              onClick={handleRegister}
              disabled={loading}
            >
              {loading ? 'در حال ثبت نام...' : 'ثبت نام'}
            </Button>
            <div className='auth-hr-devider position-relative text-center'>
              <span className='px-2 position-relative bg-white small' style={{ zIndex: '2' }}>
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
        <Col md={6} className="text-white p-0">
          {/* Left side content */}
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;