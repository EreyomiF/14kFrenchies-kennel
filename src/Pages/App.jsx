import React, { useState } from 'react';
import Navbar from '../Components/NavBar';
import Gallery from '../Components/GallerySection';
import HeroSection from '../Components/HeroSection';

const App = () => {

  return (
<>
<Navbar
className="mb-2"
 />
 <HeroSection />
 <Gallery />


</>
  );
};

export default App;
