import React, { useState } from 'react';
import Logoo from '../images/Logoo.PNG'; 
import '../index.css'; 



const Navbar = () => {
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-black">
<div className="flex items-center justify-between mx-auto p-4 w-full">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse flex-shrink-0">
          <img
            src={Logoo}
            alt="Example"
            style={{ width: '50px', height: '50px', borderRadius: '50%' }}
          />
<span className="self-center text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-yellow-500 logofont">
  Micro Bullies Kennel
</span>
        </a>
        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse relative">
        <button
  type="button"
  data-dropdown-toggle="language-dropdown-menu"
  className="inline-flex items-center font-medium justify-center px-4 py-2 sm:ml-auto lg:mr-4 text-sm text-yellow-500 border-0 rounded-lg cursor-pointer bg-transparent dark:text-yellow-500 dark:hover:text-white"
  onClick={() => setLanguageDropdownOpen(!isLanguageDropdownOpen)}
>
  <svg
    aria-hidden="true"
    className="h-3.5 w-3.5 rounded-full me-2"
    xmlns="http://www.w3.org/2000/svg"
    id="flag-icon-css-us"
    viewBox="0 0 512 512"
  >
              <g fillRule="evenodd">
                <g strokeWidth="1pt">
                  <path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/>
                  <path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/>
                </g>
                <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"/>
                <path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 56.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)"/>
              </g>
            </svg>
             ▼

          </button>
          {/* Dropdown */}
          <div
          className={`absolute top-full right-0 z-50 ${isLanguageDropdownOpen ? '' : 'hidden'} text-base bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700`}
          id="language-dropdown-menu"
          style={{ minWidth: '150px' }} // Set a minimum width to prevent text from breaking
           >
            <ul className="py-2 font-medium" role="none">
              {/* Dropdown items */}
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  {/* Dropdown content */}
                </a>
              </li>
              {/* Add more dropdown items as needed */}
              <li>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
          <div className="inline-flex items-center">
            <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-full me-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512">
              <g fillRule="evenodd">
                <g strokeWidth="1pt">
                  <path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/>
                  <path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/>
                </g>
                <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"/>
                <path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 56.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)"/>
              </g>
            </svg>
            English (US)
          </div>
        </a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
          <div className="inline-flex items-center">
            <svg className="h-3.5 w-3.5 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512">
              <path fill="#ffce00" d="M0 341.3h512V512H0z"/>
              <path d="M0 0h512v170.7H0z"/>
              <path fill="#d00" d="M0 170.7h512v170.6H0z"/>
            </svg>
            Deutsch
          </div>
        </a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
          <div className="inline-flex items-center">
            <svg className="h-3.5 w-3.5 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512">
              <g fillRule="evenodd" strokeWidth="1pt">
                <path fill="#fff" d="M0 0h512v512H0z"/>
                <path fill="#009246" d="M0 0h170.7v512H0z"/>
                <path fill="#ce2b37" d="M341.3 0H512v512H341.3z"/>
              </g>
            </svg>
            Italiano
          </div>
        </a>
      </li>
      <li>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
        <div className="inline-flex items-center">
          <svg className="h-3.5 w-3.5 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="flag-icon-css-cn" viewBox="0 0 512 512">
            <defs>
              <path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z"/>
            </defs>
            <path fill="#de2910" d="M0 0h512v512H0z"/>
            <use width="30" height="20" transform="matrix(76.8 0 0 76.8 128 128)" xlinkHref="#a"/>
            <use width="30" height="20" transform="rotate(-121 142.6 -47) scale(25.5827)" xlinkHref="#a"/>
            <use width="30" height="20" transform="rotate(-98.1 198 -82) scale(25.6)" xlinkHref="#a"/>
            <use width="30" height="20" transform="rotate(-74 272.4 -114) scale(25.6137)" xlinkHref="#a"/>
            <use width="30" height="20" transform="matrix(16 -19.968 19.968 16 256 230.4)" xlinkHref="#a"/>
          </svg>
          中文 (繁體)
        </div>
      </a>
    </li>
       </ul>
       </div>
       
      {/* Dropdown button */}
      <button
  id="dropdownDefaultButton"
  data-dropdown-toggle="dropdown"
  className="text-red-800 sm:mr-4 bg-transparent hover:bg-transparent font-medium rounded-lg text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 inline-flex items-center dark:bg-transparent dark:hover:bg-transparent dark:focus:ring-transparent"
  type="button"
  aria-label="Dropdown button"
  onClick={() => setDropdownOpen(!isDropdownOpen)}
>
  <svg
    className="w-4 h-6 sm:w-6 sm:h-8 text-yellow-500 hover:text-yellow-700 dark:text-yellow-500 dark:hover:text-yellow-700"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 14"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 1h15M1 7h15M1 13h15"
    />
  </svg>
</button>
      {/* Dropdown menu */}
{/* Dropdown menu */}
<div
  id="dropdown"
  className={`z-10 ${isDropdownOpen ? '' : 'hidden'} absolute right-0 top-10 bg-gray-700 divide-y divide-gray-800 rounded-lg shadow w-44 dark:bg-gray-700 `}
>
  <ul className="py-2 text-lg text-yellow-500 dark:text-yellow-500 bg-gray-900 rounded">
    <li>
      <a
        href="#"
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-bold"
      >
        Home
      </a>
    </li>
    <li>
      <a
        href="#"
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-bold"
      >
        About
      </a>
    </li>
    <li>
      <a
        href="#"
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-bold"
      >
        Male Dogs
      </a>
    </li>
    <li>
      <a
        href="#"
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-bold"
      >
        Female Dogs
      </a>
    </li>
    <li>
      <a
        href="#"
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-bold"
      >
        Puppies
      </a>
    </li>
  </ul>
</div>
   </div>  
      </div>
    </nav>
    
  );
};

export default Navbar;
