import React from 'react'
import RootLayout from '../(main)/layout'
import ProductListHero from '../components/ProductListHero/ProductListHero'
import ProductList from '../components/ProductList/ProductList'
import ProductCategoryHero from '../components/ProductCategory/ProductCategoryHero/ProductCategoryHero'


const page = () => {
    return (
        <RootLayout>
            <ProductCategoryHero startColor={'#446a90'} />
            <ProductListHero gradient={"linear-gradient(#bae0f5 0%, #fff 30%)"} />
            <ProductList title={'محصولات تولیدی'} bgColor={'#bae0f5'} />
        </RootLayout>
    )
}

export default page
