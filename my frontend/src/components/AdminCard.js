import React from "react";
import { Link } from "react-router-dom";

const LinkCard = (props) => {
  return (
    <div className="card admin-card col mx-5 mt-3" style={props.style}>
      <Link to={props.path}>
        <div className="" style={{ height: "15rem" }}>
          <img
            src={props.imgsrc}
            height="100%"
            className="card-img-top mt-1 px-4"
            alt="Some product"
          />
        </div>
      </Link>
      <div className="card-body" align="center">
        <h5 className="card-title">{props.title}</h5>
        {/* <p className="card-text">{props.para}</p> */}
        <div className="" align="center">
          {/* <button
            onClick={() => alert("Product successfully added to the cart")}
            className="btn btn-outline-success"
          >
            Add to Cart
          </button> */}
          <Link to={props.path} className="btn btn-outline-primary">
            GO
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
