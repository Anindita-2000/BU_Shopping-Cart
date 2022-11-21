import React from "react";
import { useEffect, useState } from "react";
import moderatororderservice from "../../services/OrderService/moderatororderservice";
import { Link } from "react-router-dom";
import NewHeader from "../../components/NewHeader";

const ModeratorOrderDetails = () => {
  const [allOrder, setAllOrder] = useState([]);

  const init = () => {
    moderatororderservice
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

  const handleDelete = (oid) => {
    console.log("Printing id", oid);
    moderatororderservice
      .remove(oid)
      .then((response) => {
        console.log("Order deleted successfully", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div className="image-2">
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
          {/* <Link to="/mod/addproduct" className="btn btn-primary mb-2">
          Add Product
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
                <tr key={order.oid}>
                  <td>{order.date}</td>
                  <td>{order.customerName}</td>
                  <td>{order.customerAddress}</td>
                  <td>{order.prname}</td>
                  <td>{order.prprice}</td>

                  {/* <td>
                  <Link
                    className="btn btn-info"
                    to={`/allproduct/update/${product.id}`}
                  >
                    Update
                  </Link>
                </td> */}
                  <td>
                    <button
                      className="btn btn-danger ml-2"
                      onClick={() => {
                        handleDelete(order.oid);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-warning">
            <Link to="/moddashboard">Back to Dashboard</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModeratorOrderDetails;
