import React, { useState } from 'react';
import backgroundImage from '../images/lava3.jpg'; // Ensure the path is correct

function ContactForm() {
    const [userPhone, setUserPhone] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleWhatsAppRedirect = (event) => {
        event.preventDefault(); // Prevent form submission

        // Your WhatsApp number in international format without '+' or '00', e.g., '1234567890'
        const yourWhatsAppNumber = '12563852131';

        if (!message || !name || !userPhone) {
            alert('Please fill in all the fields.');
            return;
        }

        // Construct the WhatsApp URL with your phone number and the user's message
        const encodedMessage = encodeURIComponent(`Name: ${name}\nPhone: ${userPhone}\nMessage: ${message}`);
        const whatsappUrl = `https://wa.me/${yourWhatsAppNumber}?text=${encodedMessage}`;

        // Reset form fields
        setUserPhone('');
        setName('');
        setMessage('');

        // Redirect to WhatsApp
        window.open(whatsappUrl, '_blank');
    };

    const formBackgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const formContainerStyle = {
        maxWidth: '500px',
        width: '100%',
        margin: 'auto',
    };

    return (
        <div className='flex justify-center items-center' style={formBackgroundStyle}>
            <div className="max-w-md mx-auto my-8 p-8" style={formContainerStyle}>
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-yellow-400">Contact Me</h2>
                    <p className="text-lg text-white">We'd love to hear from you!</p>
                </div>
                <form onSubmit={handleWhatsAppRedirect} className="mt-4">
                    <div className="mb-5">
                        <label htmlFor="userPhone" className="block mb-2 text-sm font-medium text-white">Your Phone number</label>
                        <input 
                            type="tel" 
                            id="userPhone" 
                            value={userPhone} 
                            onChange={(e) => setUserPhone(e.target.value)} 
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5" 
                            placeholder="1234567890" 
                            required 
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Your name</label>
                        <input 
                            type="text" 
                            id="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                            placeholder="Your name" 
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
                        <textarea 
                            id="message" 
                            rows="4" 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)} 
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" 
                            placeholder="Leave a Message..." 
                            required
                        ></textarea>
                    </div>
                    <button  
                        type="submit" 
                        className="text-white bg-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-40 sm:w-auto px-5 py-2.5 text-center"
                    >
                        Send Message 
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
