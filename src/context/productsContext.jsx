import React, { createContext, useEffect, useState } from "react";
import all_products from "../assets/all_product.js";
import Cart from "../pages/cart/cart.jsx";

export const ProductsContext = createContext(null);

export default function ProductsProvider({ children }) {
  const getDefaultCart = () =>  {
    let cart = {};
    for(let product of all_products) {
      cart[product.id] = 0;
    }
    return cart;
  }

  const [cart , setCart] = useState(getDefaultCart());

  const addToCart = (id) => {
      setCart((prev) => ({...prev ,[id] : prev[id] + 1}));
  };


  const removeFromCart = (id) => {
    setCart((prev) => ({...prev ,[id] : prev[id] - 1}));
  }




  const getProductsNumber = () => {
    let number = 0;
    for (let item in cart) {
      if(cart[item] > 0) {
        number += cart[item];
      }
    }
    return number;
  }

  const getTotalPrice = () => {
    let total = 0;
    for (let itemId in cart) {
      const quantity = cart[itemId];
      if (quantity > 0) {
        const product = all_products.find((product) => product.id == itemId);
          if(product) {
            total += product.new_price * quantity;
          }
        
      }
    }
    return total;
  };

  const value = {
    all_products,
    cart,
    addToCart,
    removeFromCart,
    getTotalPrice,
    getProductsNumber,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
