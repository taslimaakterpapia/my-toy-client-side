import React from 'react';
import './Home.css';
import Toys from '../Toys/Toys';
import Banner from './Banner';




const Home = () => {
  return (
    <div>
    <Banner></Banner>
    
    <Toys></Toys>
    
    
    </div>
  );
};

export default Home;