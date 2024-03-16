import React from 'react';
import Navbar from '../components/Navbar';
import Announcment from '../components/Announcment';
import Slider from '../components/Slider';
import Categories from '../components/Categories';

const Home = () => {
  return (
    <div>
        <Announcment/>
        <Navbar />
        <Slider />
        <Categories />
    </div>
  )
}

export default Home
