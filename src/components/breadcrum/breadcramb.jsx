import React from "react";
import './breadcramb.css';
import breadcrum from "../../assets/breadcrum_arrow.png";



function Breadcrum({ category, name }) {
  return (
    <div>
      <p className="breadcrum-text">
        Home <img src={breadcrum} alt="" /> Shop <img src={breadcrum} alt="" />
        {category} <img src={breadcrum} alt="" /> {name}
      </p>
    </div>
  );
}

export default Breadcrum;
