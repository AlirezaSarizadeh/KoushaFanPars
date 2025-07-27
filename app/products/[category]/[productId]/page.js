import RootLayout from '@/app/layout';
import ProductGallery from '@/app/components/productShow/ProductGallery/ProductGallery';
import './productShow.css';
import ProductDetails from '@/app/components/productShow/ProductDetails/ProductDetails';
import Button from '@/app/components/utils/button/Button';
import images from '@/app/public/assets/images';
import Link from 'next/link';
import Image from 'next/image';
import ProductList from '@/app/components/ProductList/ProductList';
import ProductReviews from '@/app/components/ProductReviews/ProductReviews';
import { notFound } from 'next/navigation';
import RelatedProducts from '@/app/components/RelatedProducts/RelatedProducts'

export const metadata = {
  title: 'دسته‌بندی محصولات',
};

export default async function ProductCategoryPage({ params }) {
  const productId = params.productId;

  /* ---------- 1) دریافت جزئیات محصول ---------- */
  const productForm = new FormData();
  productForm.append('id', productId);

  const productRes = await fetch('https://api.kfp-dental.com/api/product', {
    method: 'POST',
    body: productForm,
    cache: 'no-cache',
  });

  if (!productRes.ok) {
    // در صورت خطای سرور یا آیدی نامعتبر
    notFound();
  }

  const productData = await productRes.json();
  console.log(productData);
  
  

  // اگر محصولی پیدا نشد
  if (!productData || !productData.id) {
    notFound();
  }

  /* ---------- 2) دریافت محصولات مشابه ---------- */
  let relatedProducts = [];
  try {
    const relatedForm = new FormData();
    // فرض بر این‌که API با کلید category_id کار می‌کند؛ در صورت نیاز کلید را تغییر دهید
    relatedForm.append('product_id', productData.id);

    const relatedRes = await fetch(
      'https://api.kfp-dental.com/api/relatedProduct',
      {
        method: 'POST',
        body: relatedForm,
        cache: 'no-cache',
      },
    );

    if (relatedRes.ok) {
      relatedProducts = await relatedRes.json();
      // اطمینان از آن‌که حتماً یک آرایه تحویل می‌دهیم
      if (!Array.isArray(relatedProducts)) relatedProducts = [];
    }
  } catch {
    // در صورت هر گونه خطا آرایه خالی باقی می‌ماند
    relatedProducts = [];
  }

  /* ---------- 3) رندر صفحه ---------- */
  return (
    <RootLayout>
      <div className="row align-items-start mt-lg-5 pt-lg-5 mt-3 pt-3">
        <div className="col-lg-4 mt-lg-0">
          <div className="position-relative product-gallery-container">
            <ProductGallery images={productData.gallery ?? []} />
          </div>

          {/* دکمه‌ها فقط در صورت وجود لینک معتبر نمایش داده می‌شوند */}
          <div className="d-flex flex-column gap-lg-4 gap-2 mt-lg-3 mt-3">
            {productData.catalog_file && (
              <Link
                href={productData.catalog_file}
                className="primaryButton custom-button w-100"
              >
                دریافت کاتالوگ
                <span className="button-arrow">
                  <Image
                    src={images.downloadCatalogIcon}
                    width={22}
                    alt="arrow-button"
                  />
                </span>
              </Link>
            )}

            {productData.tutorial_video && (
              <Link
                href={productData.tutorial_video}
                className="primaryButton custom-button w-100"
              >
                مشاهده ویدیو آموزشی
                <span className="button-arrow">
                  <Image
                    src={images.videoIconProduct}
                    width={22}
                    alt="arrow-button"
                  />
                </span>
              </Link>
            )}

            {productData.update && (
              <Link
                href={productData.update}
                className="primaryButton custom-button w-100"
              >
                نصب فایل آپدیت
                <span className="button-arrow">
                  <Image
                    src={images.folderOpenIcon}
                    width={22}
                    alt="arrow-button"
                  />
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

      {/* محصولات مشابه؛ اگر آرایه خالی باشد چیزی نمایش داده نمی‌شود */}
      {relatedProducts.length > 0 && (
        <RelatedProducts
          hoverColor="#333"
          bgColor="#ccc"
          data={relatedProducts}
          title="محصولات مشابه"
        />
      )}

      <div className="row align-items-start mt-lg-5 pt-lg-5 justify-content-center">
        <div className="col-lg-10">
          <ProductReviews id={productData.id} />
        </div>
      </div>
    </RootLayout>
  );
}
