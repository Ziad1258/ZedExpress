import React, { useContext, useState } from "react";
import "./navbar.css";
import logoImg from "../assets/logo.png";
import cartIcon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ProductsContext } from "../context/productsContext";
import { FaBars } from "react-icons/fa6";
function Navbar() {
  const [activeClass, setActiveClass] = useState(false);

  const linksDate = [
    {
      name: "shop",
      path: "/",
    },
    {
      name: "men",
      path: "/men",
    },
    {
      name: "women",
      path: "/women",
    },
    {
      name: "kids",
      path: "/kids",
    },
  ];

  const [showNabBar, setShowNavBar] = useState();
  const { getProductsNumber } = useContext(ProductsContext);

  return (
    <div>
      <nav className="container navbar">
        <Link to="/" className="logo">
          <img src={logoImg} alt="" />
          <h1>Shopper</h1>
        </Link>

        <ul className="nav-links">
          {linksDate.map((link) => {
            return (
              <li
                key={link.name}
                className={`${activeClass === link.name ? "active" : ""}`}
                onClick={() => setActiveClass(link.name)}
              >
                <Link to={link.path}>{link.name}</Link>
              </li>
            );
          })}
        </ul>

        <div className="logIn-cart-section">
          <button className="login-btn">
            <Link to="/login">login</Link>
          </button>
          <div className="cart">
            <Link to="/cart">
              <img src={cartIcon} alt="" />
            </Link>
            <span className="products-number">{getProductsNumber()} </span>
          </div>
        </div>
      </nav>
      <nav className="container navbar-mobile">
        <Link to="/" className="logo">
          <img src={logoImg} alt="" />
          <h1>Shopper</h1>
        </Link>

        <div className="logIn-cart-section">
          <div className="cart">
            <Link to="/cart">
              <img src={cartIcon} alt="" />
            </Link>
            <span className="products-number">{getProductsNumber()} </span>
          </div>
          <div className="barIcon" onClick={() => setShowNavBar(!showNabBar)}>
            <FaBars />
          </div>
        </div>

        {showNabBar && (
          <ul className="nav-links">
            {linksDate.map((link) => {
              return (
                <li
                  key={link.name}
                  className={`${activeClass === link.name ? "active" : ""}`}
                  onClick={() => {
                    setActiveClass(link.name)
                    setShowNavBar(false)
                  }}
                  
                >
                  <Link to={link.path}>{link.name}</Link>
                </li>
              );
            })}
            <button className="login-btn" onClick={() => setShowNavBar(false) }>
              <Link to="/login">login</Link>
            </button>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
