import React from "react";
import "./shop.css";

import heroImg from "../../assets/hero_image.png";
import exclusiveImg from "../../assets/exclusive_image.png";

import all_products from "../../assets/all_product.js";
import new_collections from "../../assets/new_collections.js";
import handIcon from "../../assets/hand_icon.png";
import arrowIcon from "../../assets/arrow.png";

import Item from "../../components/item/item.jsx";

import MostPoular from "../../components/mostPopular/MostPoular.jsx";

function Shop() {
  return (
    <div className="shop">
      <section className="front-section">
        <div className="container front-section-container">
          <div className="info">
            <h3 className="top-text">new arrivals only</h3>
            <h1 className="big-text">
              <span className="handIcon">
                new <img src={handIcon} alt="" />
              </span>
              <span> collection </span> for everyone
            </h1>
            <button className="go-to-latest">
              <p> latest collection</p>
              <img src={arrowIcon} alt="" />
            </button>
          </div>
          <div className="front-section-img">
            <img src={heroImg} alt="img" />
          </div>
        </div>
      </section>

      <MostPoular title="Popular in women" />


      <section className="front-section exclusive-section">
        <div className="container front-section-container exclusive-section-container">
          <div className="info">
            <h1 className="big-text">
              Exclusive <span> offers for you</span>
            </h1>
            <h3 className="top-text">onlty on best sellers proudcts</h3>
            <button className="go-to-latest">check now</button>
          </div>
          <div className="front-section-img">
            <img src={exclusiveImg} alt="img" />
          </div>
        </div>
      </section>


      <section className="popular-section new-collections-section">
        <div className="container popular-container">
          <h1 className="title">new collections</h1>

          <div className="products-board">
            {new_collections.map((product, index) => {
              return (
                <Item
                  key={index}
                  id={product.id}
                  imgUrl={product.image}
                  productName={product.name}
                  oldPrice={product.old_price}
                  NewPrice={product.new_price}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="offers">
        <div className="container offers-section-container">
          <h1 className="offers-tittle">
             get exclusive offers on your email
          </h1>
          <p className="small-text">
subscribe to our newsletter and stay updated
          </p>
          <div className="subscribe-board">
            <input type="text" className="email" placeholder="Type Your Email ..." />
            <button className="subscribe-btn">subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shop;
