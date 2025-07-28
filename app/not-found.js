import Link from 'next/link';
import Button from './components/utils/button/Button';
import './globals.css';
import './not-found.css';

export const metadata = {
  title: 'صفحه مورد نظر یافت نشد - کوشافن پارس',
  description: 'صفحه‌ای که دنبال آن هستید وجود ندارد یا حذف شده است. لطفا به صفحه اصلی بازگردید.',
};

export default function NotFound() {
  return (
    <div className="text-center bg-404 d-flex align-items-center justify-content-center rounded-5 my-lg-5 my-4 p-3" style={{ minHeight: '60vh' }}>
      <div className="text-center flex-column d-flex align-items-start justify-content-center rounded-5 my-lg-5 ms-lg-5 px-3">
        <h1 className="fw-bold ms-lg-5">صفحه مورد نظر یافت نشد!</h1>
        <p className="lead mt-3 ms-lg-5 text-justify">
          صفحه‌ای که به دنبال آن هستید، ممکن است آدرس آن تغییر کرده یا حذف شده باشد.
        </p>
        <span className="ms-auto mt-lg-5 me-lg-0 me-3">
          <Button href="/" title="بازگشت به صفحه اصلی" />
        </span>
      </div>
    </div>
  );
}
