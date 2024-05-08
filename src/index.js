import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
// import App from './App';
import NavBar from './components/NavBar';
import Card from './components/Card';
import Feature from './components/Feature';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Home from './components/Home';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="card" element={<Card />} />
        <Route path="feature" element={<Feature />} />
        <Route path="contact" element={<Contact />} />

        <Route path='/' element={<Home />} />
      </Routes>



      <Footer />
    </BrowserRouter>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
