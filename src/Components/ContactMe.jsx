import React, { useState } from 'react';
import backgroundImage from '../images/lava3.jpg'; // Make sure the path is correct

function ContactForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, name, message, rememberMe });
  };

  const formBackgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const formContainerStyle = {
    maxWidth: '500px', // Adjust the maximum width as needed
    width: '100%', // Ensure the form container takes up the full width of its parent
    margin: 'auto', // Center the form horizontally
  };

  return (
    <div className='flex justify-center items-center' style={formBackgroundStyle}>
      <div className="max-w-md mx-auto my-8 p-8" style={formContainerStyle}> {/* Added style={formContainerStyle} */}
        <div className="text-center"> {/* Centered title and subtitle */}
          <h2 className="text-3xl font-bold text-yellow-400">Contact Me</h2>
          <p className="text-lg text-white dark:text-white">We'd love to hear from you!</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-4"> {/* Added mt-4 for spacing between title/subtitle and form */}
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-full p-2.5  dark:placeholder-gray-400 dark:text-white " placeholder="name@gmail.com" required />
          </div>
          <div className="mb-5">
            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-white dark:text-white">Your name</label>
            <input type="text" id="base-input" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " />
          </div>
          <div className='mb-4'>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white dark:text-white">Your message</label>
            <textarea id="message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Leave a Message..."></textarea>
          </div>
          <button type="submit" className="text-white bg-yellow-500 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-40 sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
