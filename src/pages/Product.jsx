import React from 'react'
import ProductInfo from '../components/ProductPageComp/ProductInfo'
import SmoothScrollWrapper from '../context/SmoothScrollWrapper'
import Nav from '../components/Nav/Nav'

const Product = () => {
  return (
    <>

      <SmoothScrollWrapper>
        <Nav />
        <ProductInfo />
      </SmoothScrollWrapper>
    </>
  )
}

export default Product