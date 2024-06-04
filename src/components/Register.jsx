import React, { useState } from 'react';
import { API_BASE_URL } from '../apiConfig.js';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const createData = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      Swal.fire({
        icon: 'error',
        title: 'Password Mismatch',
        text: 'The passwords entered do not match.',
      });
      return;
    }

    const registerData = {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation, 
    };

    try {
      const response = await axios.post(`${API_BASE_URL}/register`, registerData);
    
      setName('');
      setEmail('');
      setPassword('');
      setPasswordConfirmation('');
    
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Registration Successful',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="p-6 text-gray-800">
        <form onSubmit={createData} className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50">
          <h2 className="w-full text-3xl font-bold leading-tight">Register</h2>
          <div>
            <label htmlFor="name" className="block mb-1 ml-1">Name</label>
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
          <div>
            <label htmlFor="email" className="block mb-1 ml-1">Email</label>
            <input
              type="email"
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-lime-600 bg-gray-100"
              placeholder="Enter Your Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 ml-1">Password</label>
            <input
              id="password"
              type="password"
              required
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-lime-600 bg-gray-100"
              aria-label='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password_confirmation" className="block mb-1 ml-1">Confirm Password</label>
            <input
              id="password_confirmation"
              type="password"
              required
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-lime-600 bg-gray-100"
              aria-label='Password Confirmation'
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
          <div className='text-center'>
            <button type="submit" className="px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:bg-lime-400 focus:ring-opacity-50 bg-lime-500 focus:ring-lime-600 hover:ring-lime-600 text-gray-50">Register</button>
          </div>
        </form>
      </section>
    </>
  );
}
