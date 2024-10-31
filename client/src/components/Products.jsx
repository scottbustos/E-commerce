import React from 'react'
import styled from 'styled-components'
import Product from './Product'
import { popularProducts } from '../data'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;


`
const Products = (cat, filter, sort) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
  /**
   * Function to get products from the API, either with a specific category or not.
   * @param {string} [cat] - The category of products to fetch.
   */
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:3001/api/products?category=${cat}`
            : "http://localhost:3001/api/products"
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getProducts();
  },[cat])

  useEffect (() => {
    cat && setFilteredProducts(
      products.filter((item) =>
        Object.entries(filter).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    )
    console.log("Filtered Products:", filteredProducts);
  },[products, cat, filter]
)


  return (
    <Container>
    {products.map((item) => (
        <Product item={item} key={item.id}/>
    ))}
    </Container>
  )
}

export default Products
