import React from 'react';
import heroImage from '../images/Lava2.jpg'; // Replace 'your-image.jpg' with your image file path

const HeroSection = () => {
  return (
    <section className="relative bg-black">
      {/* Image background */}
      <div
        className="absolute inset-0 w-full h-full  bg-center filter"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Glass effect overlay */}
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed" />

      {/* Content */}
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right text-white">
          <h1 className="text-3xl font-extrabold sm:text-5xl lg:text-6xl">
            Welcome to <br />
            <span className="text-rose-700 block text-xl sm:text-2xl lg:text-3xl">
              "14k Bullies & French Dogs"
            </span>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Join us on a journey where every bully is a testament to our dedication, and every home welcomes an unparalleled companion.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-rose-600 px-8 py-2 text-sm sm:px-12 sm:py-3 lg:px-16 lg:py-4 text-white font-medium shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-8 py-2 text-sm sm:px-12 sm:py-3 lg:px-16 lg:py-4 text-rose-600 font-medium shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
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
