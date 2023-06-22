import React from "react";
import C from './products_images/Redmi.jpg'
import { Link } from "react-router-dom";
export default function ProductsItems(props) {
  return (
    <>
      
        <div className="card">
          <Link to="/buy" onClick={()=>props.p()}><img src={props.image} className="card-img-top" alt={props.image} /></Link>
          <div className="card-body">
            <h5 className="card-title">{props.pname}</h5>
            <h4><span className="badge bg-success">${props.price}</span></h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            {props.cart===true?null:<Link  href="/" onClick={()=>props.c()} className="btn btn-warning w-100">
              Add To Cart
            </Link>}
          </div>
        </div>
      
      </>
  );
}
