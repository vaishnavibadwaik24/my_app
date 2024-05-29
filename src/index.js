import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
// import App from './App';
import NavBar from './components/NavBar';
import Card from './components/Card';
import Feature from './components/Feature';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Terms from './components/Terms'
import Privacy from './components/Privacy'
import Cookies from './components/Cookies'
import Jobs from './components/Jobs'

import Home from './components/Home';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/card" element={<Card />} />
      <Route path="/feature" element={<Feature />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path="/terms" element={<Terms />} />
      <Route path='/privacy' element={<Privacy />} />
      <Route path='/cookies' element={<Cookies />} />
      <Route path='/jobs' element={<Jobs />} />
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </BrowserRouter>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
