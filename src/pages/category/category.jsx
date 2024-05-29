import React from "react";
import "./category.css";
import dropDownIcon from "../../assets/dropdown_icon.png";
import all_product from "../../assets/all_product";
import Item from "../../components/item/item";
function Category({ keyName, banner }) {
  return (
    <div className="container category-container">
      <div className="hero-section">
        <img src={banner} alt="img" />
      </div>
      <div className="top-line">
        <p className="text">
          <span>showing 1 - 12</span> out of 54 products
        </p>
        <button className="sort-btn">
          Sort by
          <img src={dropDownIcon} alt="" />
        </button>
      </div>
      <div className="products-board">
        {all_product.map((product, index) => {
          if (product.category === keyName) {
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
          }
        })}
      </div>
      <button className="explore-btn">explore more</button>
    </div>
  );
}

export default Category;
