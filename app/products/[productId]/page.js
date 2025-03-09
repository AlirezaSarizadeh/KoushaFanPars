
import RootLayout from '@/app/(main)/layout';
import ProductGallery from '@/app/components/productShow/ProductGallery/ProductGallery';
import './productShow.css'
import ProductDetails from '@/app/components/productShow/ProductDetails/ProductDetails';
import Button from '@/app/components/utils/button/Button';
import images from '@/app/public/assets/images';
import Link from 'next/link';
import Image from 'next/image';
import ProductList from '@/app/components/ProductList/ProductList';
import ProductReviews from '@/app/components/ProductReviews/ProductReviews';
export default function page() {


  return (
    <RootLayout>
      <div className='row align-items-start mt-lg-5 pt-lg-5'>
        <div className='col-lg-4 mt-lg-0'>
          <div className='position-relative product-gallery-container'>
            <ProductGallery />
          </div>
          <div className='d-flex flex-column gap-lg-4 gap-2 mt-lg-3 mt-1'>
            <Link href={''} className="primaryButton custom-button w-100">
              دریافت کاتالوگ

              <span className='button-arrow'>
                <Image src={images.downloadCatalogIcon} width={22} alt='arrow-button' />
              </span>
            </Link>
            <Link href={''} className="primaryButton custom-button w-100">
              مشاهده ویدیو آموزشی

              <span className='button-arrow'>
                <Image src={images.videoIconProduct} width={22} alt='arrow-button' />
              </span>
            </Link>
            <Link href={''} className="primaryButton custom-button w-100">
              نصب فایل آپدیت
              <span className='button-arrow'>
                <Image src={images.folderOpenIcon} width={22} alt='arrow-button' />
              </span>
            </Link>

          </div>
        </div>
        <div className='col-lg-8 mt-lg-0'>
          <ProductDetails />
          <div className='d-flex align-items-center justify-content-start container gap-lg-5 gap-2'>
            <Button title={'ارتباط با کارشناسان'} variant={'secondary'} href={'moz'} />
            <Button title={'خرید محصول'} variant={'primary'} href={'moz'} />
          </div>
        </div>
      </div>
      {/* <div className='row align-items-start mt-lg-5 pt-lg-5'> */}
      <ProductList hoverColor={'#bae0f5'} bgColor='#bae0f5' title={'محصولات مشابه'} />
      {/* </div> */}

      {/* Product Reviews Component */}
      <div className='row align-items-start mt-lg-5 pt-lg-5 justify-content-center'>
        <div className='col-lg-10'>
          <ProductReviews />
        </div>
      </div>
    </RootLayout>
  );
}