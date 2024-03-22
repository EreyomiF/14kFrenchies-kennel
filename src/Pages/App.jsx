import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Components/NavBar';
import HeroSection from '../Components/HeroSection';
import Footer from '../Components/FooterSection';
import ProductsShow from '../Components/ProductsShow';
import AboutUs from '../Components/AboutUs';
import ContactForm from '../Components/ContactMe';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Navbar />
          <HeroSection />
          <AboutUs />
          <ProductsShow />
          <ContactForm />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
