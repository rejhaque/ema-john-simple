import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
//   console.log(props);
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img className="img" src={img} alt="" />
      </div>
      <div>
        <h3 className="product-name">{name}</h3>
        <br />
        <p>
          <small>by: {seller}</small>
        </p>
        <p>${price}</p>
        <br />
        <p>Only left {stock} in stock</p>
        <button 
        className="main-button"
        onClick={()=>props.handleAddProduct(props.product)}
        > 
        <FontAwesomeIcon icon={faShoppingCart} /> add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
