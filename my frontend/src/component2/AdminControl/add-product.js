import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import adminproductservice from "../../services/ProductService/adminproductservice";
import productservice from "../../services/ProductService/adminproductservice";
import "../../components/style.css";
import NewHeader from "../../components/NewHeader";

const AdminAddProducts = () => {
  const [pname, setPname] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveProducts = (o) => {
    o.preventDefault();
    const pk = {id, pname, category, price,desc};

    if (id) {
      //update
      adminproductservice
        .update(pk,id)
        .then((response) => {
          console.log("Products data updated successfully", response.data);
          navigate("/admin/allproduct");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      // create
      adminproductservice
        .create(pk)
        .then((response) => {
          console.log("Product have been added successfully", response.data);
          navigate("/admin/allproduct");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      productservice
        .get(id)
        .then((pk) => {
          setPname(pk.data.pname);
          setCategory(pk.data.category);
          setDesc(pk.data.desc);
          setPrice(pk.data.price);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);
  function SubmitBtn() {
    if (pname && price && desc && category)
      return (
        <button
          onClick={(o) => saveProducts(o)}
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
    <div className="image-1" align="center">
      <NewHeader />
      <h3 style={{ fontWeight: "bolder", fontSize: "40px", marginTop: "3rem", paddingTop: "2rem" }}>
        Add and Update Products
      </h3>
      <hr />
      <form className="card was-validated p-4 w-50">
        <p className="h4">Enter Product Details</p>
        <div>
          <div className="m-3">
            <input
              type="text"
              className="form-control col-4 is-invalid p-3"
              id="pname"
              value={pname}
              onChange={(o) => setPname(o.target.value)}
              placeholder="Enter Product Name"
              required
            />
          </div>
          <div className="m-3">
            <input
              type="text"
              className="form-control col-4 is-invalid p-3"
              id="Category"
              value={category}
              onChange={(o) => setCategory(o.target.value)}
              placeholder="Enter Category"
              required
            />
          </div>
          <div className="m-3">
            <input
              type="text"
              className="form-control col-4 invalid p-3"
              id="price"
              value={price}
              onChange={(o) => setPrice(o.target.value)}
              placeholder="Enter the price"
              required
            />
          </div>

          <div className="m-3">
            <input
              type="text"
              className="form-control col-4 is-invalid p-3"
              id="desc"
              value={desc}
              onChange={(o) => setDesc(o.target.value)}
              placeholder="Enter Product Description"
              required
            />
          </div>
        </div>
        <div>
          <div className="w-25">
            <SubmitBtn />
          </div>
          <Link className="btn btn-secondary mt-2" to="/admin/allproduct">
            Back to List
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AdminAddProducts;
