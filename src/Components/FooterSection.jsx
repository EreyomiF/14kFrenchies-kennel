import React from 'react';
import Logoo from '../images/Logoo.PNG'; 
import '../index.css'; 


const Footer = () => {
  return (
    <footer className="bg-black text-red-500 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <img src={Logoo} alt="Example"
                           style={{ width: '50px', height: '50px', borderRadius: '50%' }}
          
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white logofont">
                Micro Bullies Kennel
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* ... Rest of your code ... */}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{' '}
            <a href="https://flowbite.com/" className="hover:underline">
              Micro Bullies Kennel™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {/* ... Social media icons ... */}
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
