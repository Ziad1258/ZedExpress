import React from "react";
import Navbar from "./navbar/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/mainShop/shop";
import Footer from "./components/footer/footer";
import Cart from "./pages/cart/cart";
import Login from "./pages/login/login";
import Category from "./pages/category/category";
import Prdouct from "./pages/product/prdouct";

import menBanner from './assets/banner_mens.png';
import womenBanner from './assets/banner_women.png';
import kidsBanner from './assets/banner_kids.png';

import "./App.css"
import Signup from "./pages/signup/signup";
function App() {
  return (
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/men" element={<Category keyName="men" banner={menBanner} />} />
        <Route path="/women" element={<Category keyName="women" banner={womenBanner} />} />
        <Route path="/kids" element={<Category keyName="kid" banner={kidsBanner} />} />
        <Route path="/product" element={<Prdouct />}>
          <Route path=":productId" element={<Prdouct />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
