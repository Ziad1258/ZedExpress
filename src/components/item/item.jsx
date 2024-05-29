import React from "react";
import "./item.css";

import { Link } from "react-router-dom";
function Item({id, imgUrl, productName, oldPrice, NewPrice }) {
  return (
    <Link to={`/product/${id}`} onClick={() => window.scrollTo({top : 0})}>
      <div className="item">
        <img src={imgUrl} alt="Product Image" />
        <h4 className="productName">{productName} </h4>
        <div className="prices">
          <p className="oldPrice">${oldPrice} </p>
          <p className="newPrice">${NewPrice} </p>
        </div>
      </div>
    </Link>
  );
}

export default Item;
