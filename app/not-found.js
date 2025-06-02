import Link from 'next/link'
import './globals.css'
import './not-found.css'
import RootLayout from './(main)/layout'
import Button from './components/utils/button/Button'
export default function NotFound() {
  return (
    <RootLayout>
      <div className="text-center bg-404 d-flex align-items-center justify-content-center rounded-5 my-lg-5 my-4 p-3">

        <div className="text-center flex-column d-flex align-items-start justify-content-center rounded-5 my-lg-5 ms-lg-5">
          <h1 className='fw-bold ms-lg-5'>صفحه مورد نظر یافت نشد!</h1>
          <p className='lead mt-3 ms-lg-5 text-justify'>
            صفحه ای که به دنبال آن ، ممکن است آدرس صفحه تغییر کرده و یا از بین رفته باشد
          </p>
          <span className='ms-auto mt-lg-5 me-lg-0 me-3'>
            <Button href={'/'} title={'بازگشت'} />

          </span>
        </div>
      </div>
    </RootLayout>
  )
}