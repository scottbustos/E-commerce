import React from 'react'
import styled from 'styled-components'
import { popularProducts, sliderItems } from '../data'

const Container = styled.div``
const Product = () => {
  return (
    <Container>
    {popularProducts.map((item) => (
        <Product item={item} key={item.id}/>
    ))}

    </Container>
  )
}

export default Product
