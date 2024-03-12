import React, { useState } from 'react';
import Navbar from '../Components/NavBar';
import HeroSection from '../Components/HeroSection';
import Footer from '../Components/FooterSection';
import ProductsShow from '../Components/ProductsShow';
import AboutUs from '../Components/AboutUs';

const App = () => {

  return (

<div className="flex flex-col min-h-screen">
 <div className="flex-grow">

 <Navbar/>
 <HeroSection />
 <AboutUs />
 <ProductsShow />
 </div>
<Footer />
</div>
  );
};

export default App;
