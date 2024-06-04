import React, { useRef } from "react";
import { Link,useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {API_BASE_URL,IMAGE_URL,CART_URL} from '../apiConfig';
import axios from 'axios';
import DOMPurify from 'dompurify'; 

export default function Search() {
    const { search } = useParams();

    const [data, setData] = useState([]);
   
      useEffect(() => {
        const fetchData = async () => {
          await axios.get(`${API_BASE_URL}/search/${search}`).then(({data})=>{
              setData(data.products);
          })
      }
      fetchData();
  
      },[])
     
   
      const sanitizeHTML = (html) => {
        return DOMPurify.sanitize(html);
      };
 
     
      
    return (
  <>
  
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
                    <Link to={`/productDetails/${row.id}`} ><img className="card-img-top" src={`${IMAGE_URL}/${row.photo}`} style={{width: "450px", height: "180px"}} alt="image" /></Link>
                    <div className="card-body">
                      <h5 className="card-title">{row.title}</h5>
                      <p className="card-text" dangerouslySetInnerHTML={{ __html: sanitizeHTML(row.description) }} />
                      <p className="text-dark fs-5 fw-bold mb-0">{formattedPrice}</p>
                      <button  className="btn btn-primary">Add To Cart</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
  {/* end card */}
  
  </>
)
}
