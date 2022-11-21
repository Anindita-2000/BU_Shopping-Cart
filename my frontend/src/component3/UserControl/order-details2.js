import React from "react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import NewHeader from "../../components/NewHeader";
import userorderservice from "../../services/OrderService/userorderservice";
//import employeeService from "../services/product.service";
//import productservice from "../../services/ProductService/adminproductservice";

const UserOrderDetails = () => {
  const [allOrder, setAllOrder] = useState([]);

  const init = () => {
    userorderservice
      .getAll()
      .then((response) => {
        console.log("Printing order data", response.data);
        setAllOrder(response.data);
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
    userorderservice
      .remove(id)
      .then((response) => {
        console.log("Order deleted successfully", response.data);
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
        <h3>List of Orders</h3>
        <hr />
        <div>
          {/* <Link to="/user/addorder" className="btn btn-primary mb-2">
          Add Order
        </Link> */}
          <table className="table table-hover table-dark">
            <thead className="thead-dark">
              <tr>
                <th>Order Date</th>
                <th>Customer Name</th>
                <th> Customer Address</th>
                <th> Product Name</th>
                <th> Product price</th>
                <th> Actions </th>
              </tr>
            </thead>
            <tbody>
              {allOrder.map((order) => (
                <tr key={order.id}>
                  <td>{order.date}</td>
                  <td>{order.customerName}</td>
                  <td>{order.customerAddress}</td>
                  <td>{order.prname}</td>
                  <td>{order.prprice}</td>
                  <td>
                    {/* <Link
                    className="btn btn-info"
                    to={`/allorder/update/${order.id}`}
                  >
                    Update
                  </Link> */}

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
                              handleDelete(order.oid);
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
          <Link to="/userdashboard">Back to Dashboard</Link>
        </button>
      </div>
    </div>
  );
};

export default UserOrderDetails;
