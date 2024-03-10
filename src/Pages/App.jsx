import React, { useState } from 'react';
import Navbar from '../Components/NavBar';
import HeroSection from '../Components/HeroSection';

const App = () => {

  return (

<div className="flex flex-col min-h-screen">
 <div className="flex-grow">

 <Navbar/>
 <HeroSection />
 </div>

</div>
  );
};

export default App;
