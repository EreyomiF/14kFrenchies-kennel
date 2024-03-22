import React from 'react';
import ImageCarousel from '../Components/ProductsCard';
import productData from '../Data/productData';

const ProductsShow = () => {
  return (
<div className="flex items-center justify-center min-h-screen bg-stone-800">
<div className="mx-auto my-8 px-4 text-center w-full">
      <h2 className="text-3xl text-yellow-500 font-bold mb-2">Explore Our Canine Companions</h2>
      <p className="text-lg text-gray-400 mb-10">Step into the heart of our kennel and get to know the delightful members of our four-legged family. We're thrilled to introduce you to our charming dogs, each possessing a unique character and lovable qualities.</p>

      {/* Your card grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {productData.map((product) => (
          <div key={product.id} className="max-w-sm bg-yellow-500 border border-gray-200 rounded-lg shadow mb-8 ">
            <ImageCarousel imageNames={product.imageNames} />

            <div className="p-4">
  <a href={product.link}>
    <span className="inline-block bg-black rounded mb-2">
      <h5 className="text-xl font-bold tracking-tight text-yellow-500 dark:text-yellow-500">{product.title}</h5>
    </span>
  </a>
              <p className="mb-4 text-stone-950 dark:text-gary-400">{product.description}</p>
              <a href={product.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-yellow-500 bg-black rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-black dark:hover:bg-yellow-500 dark:focus:ring-yellow-500">
                Call Now
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default ProductsShow;
