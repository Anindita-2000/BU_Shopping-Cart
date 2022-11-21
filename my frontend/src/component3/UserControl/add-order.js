import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import userorderservice from "../../services/OrderService/userorderservice";
//import productservice from "../../services/ProductService/adminproductservice";
import "../../components/style.css";
import NewHeader from "../../components/NewHeader";
import adminproductservice from "../../services/ProductService/adminproductservice";
import { IoLogoWindows } from "react-icons/io";

const AddOrders = () => {
  const [date, setDate] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [prname, setPrname] = useState("");
  const [prprice, setPrprice] = useState("");
  const navigate = useNavigate();
  const { oid } = useParams();

  const saveOrders = (o) => {
    o.preventDefault();
    const ok = { date, customerName, customerAddress, prname, prprice, oid };

    if (oid) {
      //update
      userorderservice
        .update(ok)
        .then((response) => {
          console.log("Order data updated successfully", response.data);
          navigate("/user/allorder");
          
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      // create
      userorderservice
        .create(ok)
        .then((response) => {
          console.log("Order have been added successfully", response.data);
          // navigate("/user/allorder");
          window.location.href="http://localhost:9090"
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    console.log(oid)
    // if (oid) {
      userorderservice
        .get(oid)
        .then((ok) => {
          console.log(ok)
          setDate(ok.data.date);
          setCustomerName(ok.data.customerName);
          setCustomerAddress(ok.data.customerAddress);
          setPrname(ok.data.prname);
          setPrprice(ok.data.prprice);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    // }
  }, []);

  const id =localStorage.getItem("id");
  useEffect(() => {
      adminproductservice
        .get(id)
        .then((ok) => {
          setPrname(ok.data.pname);
          setPrprice(ok.data.price);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  , []);

  
  function SubmitBtn() {
    if (date && customerName && customerAddress && prname && prprice )
      return (
        <button
          onClick={(o) => saveOrders(o)}
          className="btn btn-lg btn-success"
        >
          Save
        </button>
      );
    else
      return (
        <button className="btn btn-lg btn-success" disabled>
          Save
        </button>
      );
  }

  return (
    <div className="image-4" align="center">
      <NewHeader />
      <h3
        style={{
          fontWeight: "bolder",
          fontSize: "40px",
          marginTop: "3rem",
          paddingTop: "2rem",
        }}
      >
        Add and Update Orders
      </h3>
      <hr />
      <form className="card was-validated p-4 w-50">
        <p className="h4">Enter Details For Placing Your Order</p>
        <div>
          <div className="m-3">
            <input
              type="date"
              className="form-control col-4 is-invalid p-3"
              id="date"
              value={date}
              onChange={(o) => setDate(o.target.value)}
              placeholder="Enter Order Date"
              required
            />
          </div>

          <div className="m-3">
            <input
              type="text"
              className="form-control col-4 is-invalid p-3"
              id="customerName"
              value={customerName}
              onChange={(o) => setCustomerName(o.target.value)}
              placeholder="Enter Customer Name"
              required
            />
          </div>

          <div className="m-3">
            <input
              type="text"
              className="form-control col-4 is-invalid p-3"
              id="customerAddress"
              value={customerAddress}
              onChange={(o) => setCustomerAddress(o.target.value)}
              placeholder="Enter Customer Address"
              required
            />
          </div>

          <div className="m-3">
            <input
              type="text"
              className="form-control col-4 p-3"
              id="prname"
              value={prname}
              onChange={(o) => setPrname(o.target.value)}
              placeholder="Enter Product Name"
              disabled
            />
          </div>

          <div className="m-3">
            <input
              type="text"
              className="form-control col-4  p-3"
              id="prprice"
              value={prprice}
              onChange={(o) => setPrprice(o.target.value)}
              placeholder="Enter the price"
              disabled
            />
          </div>
        </div>
        <div>
          <div className="w-25">
            <SubmitBtn />
          </div>
          <Link className="btn btn-secondary mt-2" to="/user/allorder">
            Back to List
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddOrders;
