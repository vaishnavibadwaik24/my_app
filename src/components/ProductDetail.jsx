// import img from '../img.jpg';
import React, { useEffect, useState } from "react";
import { API_BASE_URL, IMAGE_URL } from "../apiConfig";
import axios from "axios";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState("");

  useEffect(() => {
    const fetchProductDetail = async () => {
      await axios
        .get(`${API_BASE_URL}/productDetail/${id}`)
        .then(({ data }) => {
          // console.log('s',data)

          setProduct(data);
        });
    };
    fetchProductDetail();
  }, [id]);

  const sanitizeHTML = (html) => {
    return DOMPurify.sanitize(html);
  };

  return (
    <div className="container-fluid py-5 mt-5">
      <div className="container py-5">
        <div className="row g-4 mb-5">
          <div className="col-lg-8 col-xl-9">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="border rounded">
                  <a href="#">
                    <img
                      src={`${IMAGE_URL}/${product.photo}`}
                      className="img-fluid rounded"
                      alt="Image"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <h4 className="fw-bold mb-3">{product.title}</h4>
                <p className="mb-3">Category: Vegetables</p>
                <h5 className="fw-bold mb-3">{product.price}₹</h5>
                <div className="d-flex mb-4">
                  <i className="fa fa-star text-secondary"></i>
                  <i className="fa fa-star text-secondary"></i>
                  <i className="fa fa-star text-secondary"></i>
                  <i className="fa fa-star text-secondary"></i>
                  <i className="fa fa-star"></i>
                </div>
                <p
                  className="card-text"
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHTML(product.description),
                  }}
                />
                {/* <p className="mb-4">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                                <p className="mb-4">Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish</p> */}
                <div
                  className="input-group quantity mb-5"
                  style={{ width: "100px" }}
                >
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                      <i className="fa fa-minus"></i>
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-sm text-center border-0"
                    value="1"
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
                <a
                  href="#"
                  className="btn btn-primary border border-secondary rounded-pill px-4 py-2 mb-4 text-black"
                >
                  <i className="fa fa-shopping-bag me-2 text-black"></i> Add
                  to cart
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
