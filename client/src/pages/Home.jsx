import React from 'react';
import Navbar from '../components/Navbar';
import Announcment from '../components/Announcment';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div>
        <Announcment/>
        <Navbar />
        <Slider />
    </div>
  )
}

export default Home
