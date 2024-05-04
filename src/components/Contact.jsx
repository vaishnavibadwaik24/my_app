import React, { useState } from 'react';
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
 
      const response = await axios.post('http://127.0.0.1:8000/api/contacts', formData);
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
    <div className="container mt-5 pb-5">
      <h1 className="text-center">Contact Details</h1>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card p-4">
            <form onSubmit={createData}>
            
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter Name"
                  aria-label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              {/* {error && <div className="alert alert-danger">{error}</div>} */}

              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
