import React from 'react';
import Navbar from '../components/Navbar';
import Announcment from '../components/Announcment';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';

const Home = () => {
  return (
    <div>
        <Announcment/>
        <Navbar />
        <Slider />
        <Categories />
        <Products />
    </div>
  )
}

export default Home
