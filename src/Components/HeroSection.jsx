import React from 'react';
import videoSource from '../videos/video.mp4';

const HeroSection = () => {
  return (
    <section className="relative bg-black">
      {/* Video element */}
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for the video */}
      <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:from-black/95 sm:to-black/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      {/* Content */}
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right text-white">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
          Welcome to       <br />
         "14k Bullies & French Dogs"
<strong className="block font-extrabold text-rose-700"> Alabama's best frenchies
 </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
          Join us on a journey where every bully is a testament to our dedication, and every home welcomes an unparalleled companion.           </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
