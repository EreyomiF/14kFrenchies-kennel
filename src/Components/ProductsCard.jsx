// ImageCarousel.jsx
import React, { useState } from 'react';

const ImageCarousel = ({ imageNames }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? imageNames.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === imageNames.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="relative w-full">
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        onClick={handlePrevSlide}
      >
        Prev
      </button>

      {/* Carousel wrapper */}
      {imageNames.map((imageName, index) => (
  <div
    key={index}
    className={`${
      index === activeSlide ? 'opacity-100' : 'opacity-0'
    } duration-700 ease-in-out`}
  >
<img
  src={`/images/dogs/${imageName}`}
  className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity"
  alt={`Slide ${index + 1}`}
  onLoad={() => console.log(`Image ${index + 1} loaded`)}
/>
          </div>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        onClick={handleNextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default ImageCarousel;
