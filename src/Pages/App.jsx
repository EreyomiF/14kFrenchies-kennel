import React, { useState } from 'react';
import Navbar from '../Components/NavBar';
import HeroSection from '../Components/HeroSection';
import Footer from '../Components/FooterSection';
import AboutUs from './AboutUs';

const App = () => {

  return (

<div className="flex flex-col min-h-screen">
 <div className="flex-grow">

 <Navbar/>
 <HeroSection />
 <AboutUs />
 </div>
<Footer />
</div>
  );
};

export default App;
