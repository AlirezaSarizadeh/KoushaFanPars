import React from 'react'
import RootLayout from '../(main)/layout'
import ProductListHero from '../components/ProductListHero/ProductListHero'
import ProductList from '../components/ProductList/ProductList'


const page = () => {
    return (
        <RootLayout>
            <ProductListHero gradient={"linear-gradient(#4ec983 0%, #fff 30%)"} />
            <ProductList />
        </RootLayout>
    )
}

export default page
