import React from "react";
import { Link } from "react-router-dom";
import thanks from "../static/thanks.png";

function Thanks() {
  console.log(thanks);
  return (
    <div className="thanks">
      <img src={thanks} alt="Thanks image" height={600} width={1600} />

      <button className="btn btn-warning m1-2">
        <Link to="/products">Back to Products Page</Link>
      </button>
    </div>
  );
}
export default Thanks;
