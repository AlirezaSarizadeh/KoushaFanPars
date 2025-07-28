import RootLayout from '@/app/layout';
import ProductGallery from '@/app/components/productShow/ProductGallery/ProductGallery';
import './productShow.css';
import ProductDetails from '@/app/components/productShow/ProductDetails/ProductDetails';
import Button from '@/app/components/utils/button/Button';
import images from '@/app/public/assets/images';
import Link from 'next/link';
import Image from 'next/image';
import ProductReviews from '@/app/components/ProductReviews/ProductReviews';
import RelatedProducts from '@/app/components/RelatedProducts/RelatedProducts';
import { notFound } from 'next/navigation';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export async function generateMetadata({ params }) {
  const productId = params.productId;

  // دریافت اطلاعات محصول برای متادیتا
  const formData = new FormData();
  formData.append('id', productId);

  let productData = null;
  try {
    const res = await fetch('https://api.kfp-dental.com/api/product', {
      method: 'POST',
      body: formData,
      cache: 'no-cache',
    });
    if (res.ok) {
      productData = await res.json();
    }
  } catch (err) {
    console.error('Metadata fetch error:', err);
  }

  return {
    title: productData?.title || 'محصول | کوشافن پارس',
    description:
      productData?.description ||
      `مشاهده مشخصات و خرید آنلاین ${productData?.title || 'محصول'} از کوشافن پارس.`,
    openGraph: {
      title: productData?.title || 'محصول | کوشافن پارس',
      description:
        productData?.description ||
        'مشخصات کامل محصول تجهیزات دندانپزشکی',
      url: `https://example.com/product/${productId}`,
      images: [
        {
          url: productData?.main_image || '/assets/images/default-product.jpg',
          alt: productData?.title,
        },
      ],
      type: 'website', // ✅ جلوگیری از ارور OG
    },
    alternates: {
      canonical: `https://example.com/product/${productId}`,
    },
  };
}

export default async function ProductPage({ params }) {
  const productId = params.productId;

  // ----------- ۱) دریافت جزئیات محصول -----------
  const productForm = new FormData();
  productForm.append('id', productId);

  const productRes = await fetch('https://api.kfp-dental.com/api/product', {
    method: 'POST',
    body: productForm,
    cache: 'no-cache',
  });

  if (!productRes.ok) {
    notFound();
  }

  const productData = await productRes.json();
  if (!productData || !productData.id) {
    notFound();
  }

  // ----------- ۲) دریافت محصولات مشابه -----------
  let relatedProducts = [];
  try {
    const relatedForm = new FormData();
    relatedForm.append('product_id', productData.id);

    const relatedRes = await fetch(
      'https://api.kfp-dental.com/api/relatedProduct',
      {
        method: 'POST',
        body: relatedForm,
        cache: 'no-cache',
      }
    );

    if (relatedRes.ok) {
      relatedProducts = await relatedRes.json();
      if (!Array.isArray(relatedProducts)) relatedProducts = [];
    }
  } catch {
    relatedProducts = [];
  }

  // ----------- ۳) رندر صفحه -----------
  return (
    <>
      <div className="row align-items-start mt-lg-5 pt-lg-5 mt-3 pt-3">
        <div className="col-lg-4 mt-lg-0">
          <div className="position-relative product-gallery-container">
            <ProductGallery images={productData.gallery ?? []} />
          </div>

          <div className="d-flex flex-column gap-lg-4 gap-2 mt-lg-3 mt-3">
            {productData.catalog_file && (
              <Link href={productData.catalog_file} className="primaryButton custom-button w-100">
                دریافت کاتالوگ
                <span className="button-arrow">
                  <Image src={images.downloadCatalogIcon} width={22} alt="arrow-button" />
                </span>
              </Link>
            )}

            {productData.tutorial_video && (
              <Link href={productData.tutorial_video} className="primaryButton custom-button w-100">
                مشاهده ویدیو آموزشی
                <span className="button-arrow">
                  <Image src={images.videoIconProduct} width={22} alt="arrow-button" />
                </span>
              </Link>
            )}

            {productData.update && (
              <Link href={productData.update} className="primaryButton custom-button w-100">
                نصب فایل آپدیت
                <span className="button-arrow">
                  <Image src={images.folderOpenIcon} width={22} alt="arrow-button" />
                </span>
              </Link>
            )}
          </div>
        </div>

        <div className="col-lg-8 mt-lg-0">
          <ProductDetails data={productData} />
          <div className="d-flex align-items-center justify-content-between container gap-lg-5 gap-2 justify-content-lg-start p-0">
            <Button title="ارتباط با کارشناسان" variant="secondary" href="#" />
            <Button title="خرید محصول" variant="primary" href="#" />
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <RelatedProducts hoverColor="#333" bgColor="#ccc" data={relatedProducts} title="محصولات مشابه" />
      )}

      <div className="row align-items-start mt-lg-5 pt-lg-5 justify-content-center">
        <div className="col-lg-10">
          <ProductReviews id={productData.id} />
        </div>
      </div>
    </>
  );
}
