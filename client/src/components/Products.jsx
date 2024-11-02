import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Product from './Product';
import axios from 'axios';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filter }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:3001/api/products?category=${cat}`
            : "http://localhost:3001/api/products"
        );
        setProducts(res.data);
      } catch (err) {
        setError(err.message);
      }
    };
    getProducts();
  }, [cat]);

  const filteredProducts = products.filter((item) =>
    Object.entries(filter).every(([key, value]) =>
      item[key].includes(value)
    )
  );

  return (
    <Container>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        filteredProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))
      )}
    </Container>
  );
};

export default Products;
