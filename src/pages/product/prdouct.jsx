import React, { useContext } from "react";
import "./product.css";
import Breadcrum from "../../components/breadcrum/breadcramb";
import { useParams } from "react-router-dom";
import all_product from "../../assets/all_product";
import star from "../../assets/star_icon.png";
import starDull from "../../assets/star_dull_icon.png";
import MostPoular from "../../components/mostPopular/MostPoular";

import { ProductsContext } from "../../context/productsContext";
function Prdouct() {
const {addToCart , getTotalPrice} = useContext(ProductsContext);
  const productid = useParams().productId;
  return (
    <div className="container">
      {all_product.map((product, index) => {
        if (product.id == productid) {
          return (
            <div>
              <Breadcrum category={product.category} name={product.name} />

              <div  className="product">
                <div className="product-img-section">
                  <div className="smallImages">
                    <img src={product.image} alt="img" />
                    <img src={product.image} alt="img" />
                    <img src={product.image} alt="img" />
                    <img src={product.image} alt="img" />
                  </div>
                  <div className="bigImage">
                    <img src={product.image} alt="img" />
                  </div>
                </div>
                <div className="productInfo">
                  <h1 className="product-title">{product.name}</h1>
                  <div className="product-evaluation">
                    <img src={starDull} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    (102)
                  </div>
                  <div className="prices">
                    <p className="oldPrice">${product.old_price} </p>
                    <p className="newPrice">${product.new_price} </p>
                  </div>
                  <p className="desc">
                    a lightweight usually knitted pullover shit close-fitting
                    with a round neckline and short sleeves worn as an
                    undershirt or outer garment
                  </p>
                  <div className="slecting-size">
                    <p className="text">select size</p>
                    <ul className="sizes-list">
                      <li className="size">s</li>
                      <li className="size">m</li>
                      <li className="size">l</li>
                      <li className="size">xl</li>
                      <li className="size">xxl</li>
                    </ul>
                  </div>
                  <button className="addToCart-btn" onClick={() => addToCart(product.id)}>add to cart</button>
                  <div className="category-tags">
                    <div className="category">
                      <h4>categoty :</h4>
                      <p> {product.category} </p>
                    </div>
                    <div className="tags">
                      <h4>tags :</h4>
                      <p> Modern,Latest </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
      <div className="description-section">
        <div className="desc-buttons">
          <button className="desc-btn active">describtion</button>
          <button className="reviews-btn">reviews</button>
        </div>
        <div className="desc-container">
        <p className="text">
        Welcome to our bustling e-commerce emporium, where shopping desires
          meet unbeatable prices! At our online haven, you'll discover a
          treasure trove of products that cater to every whim and fancy, all at
          pocket-friendly prices that won't leave your wallet feeling light.
          From the latest gadgets to chic fashion ensembles, from household
          essentials to unique artisanal crafts
          </p>
          <p className="text">
          we've curated a diverse array
          of offerings to satisfy every shopper's appetite. Our commitment to
          affordability means you can shop guilt-free, knowing you're getting
          the best bang for your buck. Dive into our virtual aisles and let the
          excitement of endless possibilities ignite your shopping spree!
          </p>
        </div>
      </div>
      <MostPoular title="related products" />
    
    </div>
  );
}

export default Prdouct;
