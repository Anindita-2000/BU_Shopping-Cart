import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewHeader from "../../components/NewHeader";
import adminproductservice from "../../services/ProductService/adminproductservice";
//import employeeService from "../services/product.service";
//import productservice from "../../services/ProductService/adminproductservice";

const AdminProductList = () => {
  const [allProduct, setAllProduct] = useState([]);

  const init = () => {
    adminproductservice
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

  const handleDelete = (id) => {
    console.log("Printing id", id);
    adminproductservice
      .remove(id)
      .then((response) => {
        console.log("product deleted successfully", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div className="image-1">
      <div style={{ paddingTop: "8rem" }}>
        <NewHeader />
      </div>

      <div
        style={{ marginLeft: "7rem", marginRight: "7rem" }}
        className=" card p-5 "
      >
        <h3>List of Products</h3>
        <br />

        <div>
          <Link to="/admin/addproduct" className="btn btn-primary mb-2">
            Add Product
          </Link>
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Product Name</th>
                <th> Category</th>
                <th> Price</th>
                <th> Description</th>
                <th> Actions</th>
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
                      className="btn btn-info"
                      to={`/admin/allproduct/update/${product.id}`}
                    >
                      Update
                    </Link>
                    &nbsp; &nbsp;
                    <button
                      className="btn btn-danger ml-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Delete
                    </button>
                  </td>
                  {/*Modal  */}
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Confirmation
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          Are you sure want to delete ?
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
                            onClick={() => {
                              handleDelete(product.id);
                            }}
                          >
                            Confirm
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="btn btn-warning">
          <Link to="/admindashboard">Back to Dashboard</Link>
        </button>
      </div>
    </div>
  );
};

export default AdminProductList;
