import React from "react";
import { useEffect, useState } from "react";
import userproductservice from "../../services/ProductService/userproductservice";
import { Link } from "react-router-dom";
import NewHeader from "../../components/NewHeader";

const UserProductList = () => {
  const [allProduct, setAllProduct] = useState([]);

  const init = () => {
    userproductservice
      .getAll()
      .then((response) => {
        console.log("Printing product data", response.data);
        setAllProduct(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  useEffect(() => {
    init();
  }, []);

  const sentProductDetails =(id)=>{
    localStorage.setItem("id",id);
    
  }

  return (
    <div className="image-4">
      <div style={{ paddingTop: "8rem" }}>
        <NewHeader />
      </div>
      <div
        style={{ marginLeft: "7rem", marginRight: "7rem" }}
        className=" card p-5 "
      >
        <h3>List of Products</h3>
        <hr />
        <div>
          {/* <Link to="/mod/addproduct" className="btn btn-primary mb-2">
          Add Product
        </Link> */}
          <table className="table table-hover table-dark">
            <thead className="thead-dark">
              <tr>
                <th> Product Name </th>
                <th> Category </th>
                <th> Price </th>
                <th> Description </th>
                <th> Actions </th>
              </tr>
            </thead>
            <tbody>
              {allProduct.map((product) => (
                <tr key={product.id}>
                  <td>{product.pname}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.desc}</td>
                  <td>
                    <Link
                      to="/user/addorder"
                      className="btn btn-primary mb-2"
                      onClick={sentProductDetails(product.id)}
                    >
                      Place Order
                    </Link>
                  </td>

                  {/* <td>
                  <Link
                    className="btn btn-info"
                    to={`/allproduct/update/${product.id}`}
                  >
                    Update
                  </Link>
                </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="btn btn-warning">
          <Link to="/userdashboard">Back to Dashboard</Link>
        </button>
      </div>
    </div>
  );
};

export default UserProductList;