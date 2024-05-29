import React, { useContext } from "react";
import "./cart.css";
import { ProductsContext } from "../../context/productsContext";
import Item from "../../components/item/item";
import removeIcon from "../../assets/cart_cross_icon.png";
function Cart() {
  const { all_products, cart, removeFromCart,getTotalPrice } = useContext(ProductsContext);
  return (
    <div className="container cart">
      <div className="cart-header">
        <p>product</p>
        <p>title</p>
        <p>price</p>
        <p>quality</p>
        <p>total</p>
        <p>remove</p>
      </div>

      {all_products.map((product, index) => {
        if (cart[product.id] > 0) {
          return (
            <div className="cart-product" key={index}>
              <img className="productImg" src={product.image} alt="" />
              <p>{product.name} </p>
              <p>{product.new_price}$ </p>
              <p>{cart[product.id]} </p>
              <p>{product.new_price * cart[product.id]}$ </p>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(product.id)}
              >
                <img className="removeIcon" src={removeIcon} alt="" />
              </button>
            </div>
          );
        } 
      })}

      <div className="total-price">
        <h1 className="title">cart total</h1>
        <div className="total-row">
          <p className="total-text">subtotals</p>
          <p className="value">0$</p>
        </div>
        <div className="total-row">
          <p className="total-text">fee</p>
          <p className="value">Fee</p>
        </div>
        <div className="total-row">
          <p className="total-head-text">total</p>
          <p className="total-value">{getTotalPrice()}$ </p>
        </div>
      </div>
      <div className="checkout">
        <button className="check-btn">
          proceed to checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
