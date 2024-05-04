import img from '../img.jpg';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Card() {

  const [data, setData] = useState([]);

    useEffect(()=>{
      fetchData() 
    },[])

    const fetchData = async () => {
        await axios.get(`http://127.0.0.1:8000/api/products`).then(({data})=>{
            setData(data.products)
        })
    }

  return (
    <>
    <div className="container">
      <div className="row">
        {data.map((row,key)=>(

        <div className="col pb-5">
          <div className="card" style={{ width: "16rem" }}>
            <img className="card-img-top" src={img} alt="Card cap" />
            <div className="card-body">
              <h5 className="card-title">{row.title}</h5>
              <p className="card-text">{row.description}</p>
              <a href="#" className="btn btn-primary">Add To Cart</a>
            </div>
          </div>
        </div>
        )
        )
      }

        {/* <div className="col">
          <div className="card" style={{ width: "16rem" }}>
            <img className="card-img-top" src={img} alt="Card cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div> */}

        {/* <div className="col">
          <div className="card" style={{ width: "16rem" }}>
            <img className="card-img-top" src={img} alt="Card cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div> */}

        {/* <div className="col">
          <div className="card" style={{ width: "16rem" }}>
            <img className="card-img-top" src={img} alt="Card cap" />
            <div className="card-body">
              <h5 className="card-title">Card title{counter}</h5>
              
              <input type="text" name="firstname" value={form.name.firstname} onChange={e=>{setForm({
                ...form,
                name:{...form.name, firstname: e.target.value}
              });
              }}  />
              <input type="text" name="lastname" value={form.name.lastname} onChange={e=>{setForm({
                ...form,
                name:{...form.name, lastname: e.target.value}
              });
              }}  />
              <input type="email" name='email' value={form.email} onChange={e=>{setForm({
                ...form, 
                email:e.target.value
              });
              }} />
              
              <button onClick={onClickCounter} className="btn btn-primary">Go somewhere</button>
             
            </div>
          </div>
        </div> */}
      </div>
    </div>

    </>
  );
}

