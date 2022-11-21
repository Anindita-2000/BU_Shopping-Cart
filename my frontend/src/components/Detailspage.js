import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detailspage = () => {
  const { id } = useParams();
  console.log("id", id);

  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    /*
    call backend API using this 'id' here
    set the response data in state variable using setProductDetails function
    */
  }, []);

  return (
    <>
      <div
        className="mt-2 px-5 pb-4 pt-1 bg-primary text-warning rounded"
        style={{
          height: "15rem",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "white",
          fontWeight: "500",
        }}
      >
        <h1
          className="display-3 text-center pb-3"
          style={{
            paddingTop: "40px",
            paddingBottom: "30px",
          }}
        >
          Product name here
        </h1>
      </div>
      <div>
        <h1>Product with id {id}</h1>
      </div>
    </>
  );
};

export default Detailspage;
