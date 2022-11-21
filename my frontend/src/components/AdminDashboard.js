import React from "react";
import { Link, NavLink } from "react-router-dom";
import AdminCard from "./AdminCard";
import avatar from "../Assets/avatar.png";
import orders from "../Assets/orders.png";
import productslogo from "../Assets/productslogo.png";
import "./style.css";
import NewHeader from "./NewHeader";

function AdminDashboard() {
  return (
    <div>
      <NewHeader />

      <nav
        className="w3-sidebar w3-collapse w3-white w3-animate-left bg-warning"
        style={{ zIndex: "3", width: "300px" }}
        id="mySidebar"
      >
        <br />
        <br />

        <div className="ml-4 fw-bold h3">
          <span>Welcome Admin</span>
          <hr />
        </div>
        <div className="w3-container">
          <h5>Dashboard</h5>
        </div>
        <div className="w3-bar-block">
          <a
            href="#"
            className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black"
          >
            <i className="fa fa-remove fa-fw"></i>Close Menu
          </a>

          <a href="/profile" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-users fa-fw"></i> My Profile
          </a>

          <a
            href="admin/allproduct"
            className="w3-bar-item w3-button w3-padding"
          >
            <i className="fa fa-comment"></i> Products
          </a>

          <a href="admin/allorder" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-comment"></i> Orders
          </a>
          <Link to="/admin/login" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-sign-out fa-fw"></i> Log Out
          </Link>
          <br />
          <br />
        </div>
      </nav>

      {/* <!-- Overlay effect when opening sidebar on small screens --> */}

      <div
        className="w3-overlay w3-hide-large w3-animate-opacity "
        // onClick={w3_close}
        style={{ cursor: "pointer" }}
        title="close side menu"
        id="myOverlay"
      ></div>

      {/* <!-- !PAGE CONTENT! --> */}
      <div
        className="w3-main"
        style={{ marginLeft: "300px !important", marginTop: "43px" }}
      />

      {/* <!-- Header --> */}
      <header
        className="w3-container"
        style={{ paddingTop: "22px", marginLeft: "300px" }}
      >
        <h5>
          <b>
            <i className="fa fa-dashboard"></i> &nbsp; My Dashboard
          </b>
        </h5>
      </header>

      <div className="mr-5" style={{ marginLeft: "300px" }}>
        <div className="row">
          <AdminCard imgsrc={avatar} path="/profile" title="MY PROFILE" />
          <AdminCard imgsrc={orders} path="/admin/allorder" title="ORDERS" />
          <AdminCard
            imgsrc={productslogo}
            path="/admin/allproduct"
            title="PRODUCTS"
          />
        </div>

        <div className="fw-bold" style={{ marginTop: "5rem" }} align="center">
          {" "}
          Copyright Reserved{" "}
        </div>

        <div className="w3-panel" id="Admin">
          <div
            className="w3-row-padding w3-margin-top"
            style={{ margin: "0 -16px" }}
          ></div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default AdminDashboard;
