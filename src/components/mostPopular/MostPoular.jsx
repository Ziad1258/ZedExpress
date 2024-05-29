import React from "react";
import "./MostPopular.css";
import all_products from "../../assets/all_product";
import Item from "../item/item";
function MostPoular({title}) {
  return (
    <section className="popular-section">
      <div className="container popular-container">
        <h1 className="title">{title} </h1>

        <div className="products-board">
          {all_products.map((product, index) => {
            if (index < 4) {
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
      </div>
    </section>
  );
}

export default MostPoular;
