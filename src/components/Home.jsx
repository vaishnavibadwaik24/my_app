import React, { useRef } from "react";
import ret from "../ret.jpg";
import ship from "../ship.png";
import payment from "../payment.png";
import supp from "../supp.png";
import featur from "../featur.jpg";
import featur2 from "../featur2.jpg";
import featur3 from "../featur3.jpg";

import { useState, useEffect } from 'react';
import {API_BASE_URL,IMAGE_URL,CART_URL} from '../apiConfig';
import axios from 'axios';
import DOMPurify from 'dompurify'; 
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  

  
  const [data, setData] = useState([]);
  const [cartCount, setCartCount] = useState(0);
 
    useEffect(() => {
      const fetchData = async () => {
        await axios.get(`${API_BASE_URL}/products`).then(({data})=>{
            setData(data.products);
        })
    }
    fetchData();
    fetchVisitor();

    },[])
   
    const fetchVisitor =  () => {
       axios.get(`${API_BASE_URL}/visitor`).then().catch();
   
   
  }

    const sanitizeHTML = (html) => {
      return DOMPurify.sanitize(html);
    };

    const addToCart = async (productId,title,price) => {
      try {
        // console.log('ss' ,productId,title,price)
        const response = await axios.post(`${CART_URL}`, { productId, name:title, price});
        if (response.data) { 
          const cartResponse = await axios.get(`${CART_URL}/count`);
          setCartCount(cartResponse.data.cartCount);
        }
        else{
          alert("Failed to Add the Product");
        }
      } catch (error) {
        console.log(error);
      }
    };
    
    let sliderRef = useRef(null);

    const settings = {
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };
    
  return (
<>
{/* start nav */}
<div className="navbar bg-white py-10">
  <div className="flex-1">
    <a className="btn btn-ghost text-4xl">Fruitables</a>
  </div>
  <div className="flex-none pr-8">
  <div className='pr-5'>
  <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    </div>
    <div className="dropdown dropdown-end pr-5">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          {cartCount > 0 && <span className="badge badge-sm indicator-item">{cartCount}</span>}
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-white shadow">
        <div className="card-body">
          <span className="font-bold text-lg">{cartCount} Items</span>
          <span className="text-info">Subtotal</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end pr-8">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
{/* End nav */}
{/* start hero */}
<section className="p-6 bg-gray-100 text-gray-800 py-10">
      <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-4" >
        <div className="px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-3 bg-gray-50">
          <span className="block mb-2 text-red-600">100% Organic Foods</span>
          <h1 className="text-5xl font-extrabold text-gray-900">Organic Veggies & <br />Fruits Foods</h1>
        </div>
        <Slider ref={slider => (sliderRef = slider)} {...settings}>
          <div>
            <img src={`${IMAGE_URL}/1711558675.png`} style={{ width: '400px', height:'250px'}} alt="Banner" className="object-cover rounded xl:col-span-8 bg-gray-500" />
          </div>
          <div>
            <img src={`${IMAGE_URL}/1711558751.jpg`} style={{ width: '400px', height:'250px'}} alt="Banner" className="object-cover rounded xl:col-span-8 bg-gray-500" />
          </div>
        </Slider>
      </div>
</section>
{/* end hero */}

<div className="row col-12 g-4 px-10 mt-10 py-10">
  <div className="col">
    <div className="card" style={{ display: "grid", placeItems: "center" }}>
      <img src={ret} className="card-img-top" style={{width: "150px", height: "150px"}}
        alt="Hollywood Sign on The Hill" />
      <div className="card-body">
        <h5 className="card-title">Free Shipping</h5>
        <p className="card-text">
        Free on order over $300
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" style={{ display: "grid", placeItems: "center" }}>
      <img src={ship} className="card-img-top" style={{width: "150px", height: "150px"}}
        alt="Palm Springs Road" />
      <div className="card-body">
        <h5 className="card-title">Security Payment</h5>
        <p className="card-text">
        100% security payment
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" style={{ display: "grid", placeItems: "center" }}>
      <img src={payment} className="card-img-top" style={{width: "150px", height: "150px"}}
        alt="Los Angeles Skyscrapers" />
      <div className="card-body">
        <h5 className="card-title">30 Day Return</h5>
        <p className="card-text">30 day money guarantee</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" style={{ display: "grid", placeItems: "center" }}>
      <img src={supp} className="card-img-top item-center" style={{width: "150px", height: "150px"}}
        alt="Skyscrapers" />
      <div className="card-body">
        <h5 className="card-title text-center">24/7 Support</h5>
        <p className="card-text">
        Support every time fast
        </p>
      </div>
    </div>
  </div>
</div>

{/* START CARD */}
<div className="container pt-10">
        <h1 className="text-5xl font-bold text-gray-900 pl-10">Our Organic Products</h1>
        <div className="row pt-10 px-10">
          {data.map((row, index) => {
            const formattedPrice = new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: 'INR',
            }).format(parseFloat(row.price));
            return (
              <div className="col pb-5" key={index}>
                <div className="card" style={{ width: "16rem" }}>
                  <img className="card-img-top" src={`${IMAGE_URL}/${row.photo}`} style={{width: "450px", height: "180px"}} alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">{row.title}</h5>
                    <p className="card-text" dangerouslySetInnerHTML={{ __html: sanitizeHTML(row.description) }} />
                    <p className="text-dark fs-5 fw-bold mb-0">{formattedPrice}</p>
                    <button onClick={() => addToCart(row.id, row.title, row.price)} className="btn btn-primary">Add To Cart</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
{/* end card */}

<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-16 px-10 ">
  <div className="outline flex flex-col py-16 justify-center col-span-1 sm:col-span-2 lg:col-span-1 max-w-xs bg-gray-700 bg-no-repeat bg-cover rounded-md overflow-hidden" style={{ backgroundImage: `url(${featur})` }}>
    <div className="flex flex-col items-center p-4 text-center text-gray-100">
      <h1 className="py-2 text-3xl font-bold">
        <a href="" className='underline hover:bg-lime-600'>Fresh Apples <br /> 20% OFF</a>
        </h1>
    </div>
  </div>
  <div className="outline flex flex-col py-16 justify-center col-span-1 sm:col-span-2 lg:col-span-1 max-w-xs bg-gray-700 bg-no-repeat bg-cover rounded-md overflow-hidden" style={{ backgroundImage: `url(${featur2})` }}>
    <div className="flex flex-col items-center p-4 text-center text-gray-100">
      <span></span>
      <h1 className="py-2 text-3xl font-bold"><a href="" className='underline hover:bg-blue-600'>Tasty Fruits <br />Free Delievery</a></h1>
      <p></p>
      
    </div>
  </div>
  <div className="outline flex flex-col py-16 justify-center col-span-1 sm:col-span-2 lg:col-span-1 max-w-xs bg-gray-700 bg-no-repeat bg-cover rounded-md overflow-hidden" style={{ backgroundImage: `url(${featur3})` }}>
    <div className="flex flex-col items-center p-4 text-center text-gray-100">
      <span></span>
      <h1 className="py-2 text-3xl font-bold"><a href="" className='underline hover:bg-slate-600'>Exotic Vegetable <br />Discount 30%</a></h1>

    </div>
  </div>
</div>
{/* testimonial */}
<section className="my-8 py-16">
	<div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
		<h1 className="text-4xl font-semibold leading-none text-center">Our Client Saying!</h1>
	</div>
	<div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
		<div className="flex flex-col items-center mx-12 lg:mx-0">
			<div className="relative text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 text-gray-300">
					<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-6 py-1 text-lg italic">Veggies and fruits are just awesome. Now no need to go out in search of organic vegetables and fruits.</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 text-gray-300">
					<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg bg-red-600"></span>
			<p>Ivan Menon</p>
		</div>
		<div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
			<div className="relative text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 text-gray-300">
					<path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-6 py-1 text-lg italic">The fruit is AMAZING! Best quality I have ever seen…it rivals my local Sunday farmers market.</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 text-gray-300">
					<path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg bg-red-600"></span>
			<p>Annie Sharma</p>
		</div>
	</div>
</section>
</>
)
}