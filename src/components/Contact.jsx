import React, { useState } from 'react';
import {API_BASE_URL} from '../apiConfig.js';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const createData = async (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      message: message
    };
 
      const response = await axios.post(`${API_BASE_URL}/contacts`, formData);
      setName('');
      setEmail('');
      setMessage('');
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: response.data.message,
      });
  
  };

  return (
    <>
<section className="p-6 text-gray-800">
  <div className="row justify-content-center">
    <div className="col-md-10">
        <form onSubmit={createData} className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50">
          <h2 className="w-full text-3xl font-bold leading-tight">Contact</h2>
          
          <div className="mb-3">
            <label htmlFor="name" className="block mb-1 ml-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-lime-600 bg-gray-100"
              placeholder="Enter Your Name"
              aria-label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="block mb-1 ml-1">
              Email
            </label>
            <input
              type="email"
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-lime-600 bg-gray-100"
              placeholder="Enter Your Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="block mb-1 ml-1">
              Message
            </label>
            <textarea
              type="text"
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-lime-600 bg-gray-100"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          {/* {error && <div className="alert alert-danger">{error}</div>} */}

          <div className='text-center'>
            <button type="submit" className="px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:bg-lime-400 focus:ring-opacity-50 bg-lime-500 focus:ring-lime-600 hover:ring-lime-600 text-gray-50">Send</button>
          </div>
        </form>
    </div>
  </div>
</section>

    </>
  );
}
