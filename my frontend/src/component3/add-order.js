import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import orderService from "../services/orderService";
import "bootstrap/dist/css/bootstrap.min.css";
const AddOrders = () => {
  const [date, setDate] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [product, setProduct] = useState("");
  // const[pname, setPname]=useState("");
  // const[price, setPrice]=useState("");

  const navigate = useNavigate();
  const { oid } = useParams();
   
  const saveOrder = (e) => {
    e.preventDefault();

    const order = { date, customerName, customerAddress,product, oid, product };

    if (oid) {
      //update
      orderService
        .update(order)
        .then((response) => {
          console.log("Order data updated successfully", response.data);
          navigate("/order");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      // create
      orderService
        .create(order)
        .then((response) => {
          console.log("Order added successfully", response.data);
          navigate("/order");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (oid) {
      orderService
        .get(oid)
        .then((order) => {
          setDate(order.data.date);
           setCustomerName(order.data.customerName);
           setCustomerAddress(order.data.customerAddress);
           setProduct(order.data.product);
          
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);
  function SubmitBtn() {
    if (date && customerAddress && customerName && product)
      return (
        <button onClick={(o) => saveOrder(o)} className="btn btn-success">
          Save
        </button>
      );
    else
      return (
        <button className="btn btn-success" disabled>
          Save
        </button>
      );
  }
  return (
    <div className="container">
      <h3 style={{ color: "white", fontWeight: "bolder", fontSize: "40px", marginTop: "35px" }}>
        Add and Update Orders
      </h3>
      <hr />
      <form className="was-validated">
        <div className="form-group">
          <input
            type="date"
            className="form-control col-4 is-invalid"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Enter order date"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4 is-invalid"
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Enter Customer Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4 is-invalid"
            id="customerAddress"
            value={customerAddress}
            onChange={(e) => setCustomerAddress(e.target.value)}
            placeholder="Enter Customer Address"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4 is-invalid"
            id="product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            placeholder="Enter productdetails"
            required
          />
        </div>
        {/* <div className="form-group">
          <input
            type="text"
            className="form-control col-4 is-invalid"
            id="pname"
            value={pname}
            onChange={(e) => setPname(e.target.value)}
            placeholder="Enter product name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4 is-invalid"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
            required
          />
        </div> */}
       

        <div>
          {/* <button onClick={(e) => saveOrd(e)} className="btn btn-primary">
            Save
          </button> */}
          <SubmitBtn />
        </div>
      </form>
      <hr />
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default AddOrders;