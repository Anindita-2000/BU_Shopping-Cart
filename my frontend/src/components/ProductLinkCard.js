import React from "react";
import { Link } from "react-router-dom";

const ProductLinkCard = (props) => {
  return (
    <div className="card admin-card col mx-4 mt-3">
      <Link to={props.path}>
        <div className="" style={{ height: "20rem" }}>
          <img
            src={props.imgsrc}
            height="80%"
            className="card-img-top mt-1"
            alt="Some product"
          />
        </div>
      </Link>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.para}</p>
        {/* <div className="d-flex">
          <button
            onClick={() => alert("Product successfully added to the cart")}
            className="btn btn-outline-success"
          >
            Add to Cart
          </button>
          <Link to={props.path} className="btn btn-outline-primary">
            View Details
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default ProductLinkCard;
