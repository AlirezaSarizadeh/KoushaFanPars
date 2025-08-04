import React from 'react';
import RootLayout from '../../layout';
import ProductListHero from '../../components/ProductListHero/ProductListHero';
import ProductList from '../../components/ProductList/ProductList';
import ProductCategoryHero from '../../components/ProductCategory/ProductCategoryHero/ProductCategoryHero';
import Link from 'next/link';
import Script from 'next/script';

// ✅ متادیتا داینامیک (Next.js 13+)
export async function generateMetadata({ params }) {
  const { category } = params;

  try {
    const formData = new FormData();
    formData.append('id', category);

    const res = await fetch('https://api.kfp-dental.com/api/category', {
      method: 'POST',
      body: formData,
      cache: 'no-store',
    });

    if (!res.ok) throw new Error('Meta fetch failed');
    const data = await res.json();

    return {
      title: `${data?.title || 'محصولات'} | کوشافن پارس`,
      description:
        data?.description ||
        `لیست محصولات دسته ${data?.title} از برند کوشافن پارس. مشاهده جزئیات و خرید آنلاین.`,
      openGraph: {
        title: `${data?.title} | کوشافن پارس`,
        description: data?.description || 'لیست محصولات و تجهیزات دندانپزشکی.',
        url: `https://example.com/product-category/${category}`,
        images: [{ url: data?.image || '/assets/images/default-category.jpg', alt: data?.title }],
        type: 'website',
      },
      alternates: { canonical: `https://example.com/product-category/${category}` },
    };
  } catch {
    return {
      title: 'دسته‌بندی محصولات | کوشافن پارس',
      description: 'مشاهده لیست محصولات و دسته‌بندی‌های تجهیزات دندانپزشکی کوشافن پارس.',
    };
  }
}

export default async function ProductCategoryPage({ params }) {
  const { category } = params;
  let categories = null;
  let categoryProduct = [];
  let hasError = false;

  try {
    // ✅ Category fetch
    const formData = new FormData();
    formData.append('id', category);

    const res = await fetch('https://api.kfp-dental.com/api/category', {
      method: 'POST',
      body: formData,
      cache: 'no-store',
    });

    if (!res.ok) throw new Error('Category fetch failed');
    categories = await res.json();

    // ✅ Products fetch
    const formData2 = new FormData();
    formData2.append('category_id', category);

    const res2 = await fetch('https://api.kfp-dental.com/api/categoryProduct', {
      method: 'POST',
      body: formData2,
      cache: 'no-store',
    });

    if (!res2.ok) throw new Error('Category product fetch failed');
    categoryProduct = await res2.json();
  } catch (error) {
    console.error('Error:', error.message);
    hasError = true;
  }

  // ✅ JSON-LD Schema (دسته‌بندی محصول)
  const categorySchema = categories && {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": categories?.title,
    "description": categories?.description || "لیست محصولات این دسته.",
    "url": `https://example.com/product-category/${category}`,
  };

  return (
    <>
      {categories && (
        <Script id="category-schema" type="application/ld+json">
          {JSON.stringify(categorySchema)}
        </Script>
      )}

      {hasError || !categories ? (
        <div className="text-center py-20 text-red-600 text-xl font-bold alert alert-primary mt-5 p-5 d-flex align-items-center justify-content-center gap-4 flex-column">
          متاسفیم، اطلاعاتی برای نمایش یافت نشد.
          <Link href="/">بازگشت به صفحه اصلی</Link>
        </div>
      ) : (
        <>
          <ProductCategoryHero startColor={categories.color} />
          <ProductListHero data={categories} gradient="linear-gradient(#bae0f5 0%, #fff 30%)" />
          {categoryProduct.length > 0 ? (
            <ProductList
              title={categories.title}
              bgColor={categories.color}
              hoverColor={categories.color}
              data={categoryProduct}
            />
          ) : (
            <div className="text-center py-10 text-gray-600 text-lg alert alert-primary mt-5 p-5 d-flex align-items-center justify-content-center gap-4">
              هیچ محصولی در این دسته‌بندی ثبت نشده است.
              <Link href="/">بازگشت به صفحه اصلی</Link>
            </div>
          )}
        </>
      )}
    </>
  );
}
