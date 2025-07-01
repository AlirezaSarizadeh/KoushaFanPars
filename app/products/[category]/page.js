import React from 'react';
import RootLayout from '../../(main)/layout';
import ProductListHero from '../../components/ProductListHero/ProductListHero';
import ProductList from '../../components/ProductList/ProductList';
import ProductCategoryHero from '../../components/ProductCategory/ProductCategoryHero/ProductCategoryHero';
import Link from 'next/link';

export const metadata = {
    title: 'دسته‌بندی محصولات',
};

export default async function ProductCategoryPage({ params }) {

    const {param} = params.category;
    let categories = null;
    let categoryProduct = [];
    let hasError = false;

    try {
        // Category fetch
        const formData = new FormData();
        formData.append('id', param);

        const res = await fetch('https://api.kfp-dental.com/api/category', {
            method: 'POST',
            body: formData,
            cache: 'no-cache',
        });

        if (!res.ok) throw new Error('Category fetch failed');

        if (res.headers.get('content-type')?.includes('application/json')) {
            categories = await res.json();
        }

        // Products fetch
        const formData2 = new FormData();
        formData2.append('category_id', param);

        const res2 = await fetch('https://api.kfp-dental.com/api/categoryProduct', {
            method: 'POST',
            body: formData2,
            cache: 'no-cache',
        });

        if (!res2.ok) throw new Error('Category product fetch failed');

        if (res2.headers.get('content-type')?.includes('application/json')) {
            categoryProduct = await res2.json();
        } else {
            throw new Error('Invalid JSON in categoryProduct response');
        }

    } catch (error) {
        console.error('Error:', error.message);
        hasError = true;
    }

    return (
        <RootLayout>
            {hasError || !categories ? (
                <div className="text-center py-20 text-red-600 text-xl font-bold alert alert-primary mt-5 p-5 d-flex align-items-center justify-content-center gap-4 flex-column">
                    متاسفیم، اطلاعاتی برای نمایش یافت نشد.
                    <Link href={'/'}>
                        بازگشت به صفحه اصلی
                    </Link>
                </div>
            ) : (
                <>
                    <ProductCategoryHero startColor={categories.color} />
                    <ProductListHero data={categories} gradient={`linear-gradient(#bae0f5 0%, #fff 30%)`} />
                    {categoryProduct.length > 0 ? (
                        <ProductList title={categories.title} bgColor={categories.color} hoverColor={categories.color} data={categoryProduct} />
                    ) : (
                        <div className="text-center py-10 text-gray-600 text-lg alert alert-primary mt-5 p-5 d-flex align-items-center justify-content-center gap-4">
                            هیچ محصولی در این دسته‌بندی ثبت نشده است.
                            <Link href={'/'}>
                                بازگشت به صفحه اصلی
                            </Link>
                        </div>
                    )}
                </>
            )}
        </RootLayout>
    );
}
