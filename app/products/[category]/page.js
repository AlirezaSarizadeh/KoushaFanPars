import React from 'react'
import RootLayout from '../../(main)/layout'
import ProductListHero from '../../components/ProductListHero/ProductListHero'
import ProductList from '../../components/ProductList/ProductList'
import ProductCategoryHero from '../../components/ProductCategory/ProductCategoryHero/ProductCategoryHero'

export const metadata = {
    title: 'دسته‌بندی محصولات',
};

export default async function ProductCategoryPage({ params }) {

    const param = params.category;


    // Fetching Category Fetching 

    const formData = new FormData();
    formData.append('id', param.category);

    const res = await fetch('https://api.kfp-dental.com/api/category', {
        method: 'POST',
        body: formData,
        // Optional: include token or headers if needed
        // headers: { Authorization: 'Bearer YOUR_TOKEN_HERE' },
        cache: 'no-cache', // or 'force-cache' depending on need
    });

    const categories = await res.json();


    // Fetching Category of Products Fetching 

    const formData2 = new FormData();
    formData2.append('category_id', param.productId);

    const res2 = await fetch('https://api.kfp-dental.com/api/categoryProduct', {
        method: 'POST',
        body: formData2,
        // Optional: include token or headers if needed
        // headers: { Authorization: 'Bearer YOUR_TOKEN_HERE' },
        cache: 'no-cache', // or 'force-cache' depending on need
    });

    const categoryProduct = await res2.json();


    return (
        <RootLayout>
            <ProductCategoryHero startColor={categories.color} />
            <ProductListHero data={categories} gradient={`linear-gradient(#bae0f5 0%, #fff 30%)`} />
            {categoryProduct.map(p => <ProductList title={categories.title} bgColor={categories.color} data={categoryProduct} />)}

        </RootLayout>
    );
}
