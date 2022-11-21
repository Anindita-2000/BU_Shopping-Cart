import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";
import NewHeader from "./NewHeader";
import "../../components/style.css";
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: AuthService.getCurrentUser(),
    };
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div className="image-3">
        <NewHeader />
        <nav
          className="w3-sidebar w3-collapse w3-white w3-animate-left bg-warning"
          style={{ zIndex: "3", width: "300px" }}
          id="mySidebar"
        >
          <br />
          <br />

          <div className="ml-4 fw-bold h3">
            <span>Welcome {currentUser.username}</span>
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

            <a
              href="admin/allorder"
              className="w3-bar-item w3-button w3-padding"
            >
              <i className="fa fa-comment"></i> Orders
            </a>
            <Link
              to="/admin/login"
              className="w3-bar-item w3-button w3-padding"
            >
              <i className="fa fa-sign-out fa-fw"></i> Log Out
            </Link>
            <br />
            <br />
          </div>
        </nav>

        <div style={{ paddingLeft: "20rem" }}>
          <header className="" style={{paddingTop:"5rem", paddingLeft:"2rem", marginBottom:"2rem"}}>
            <h3 style={{fontWeight:"bold"}}>PROFILE DETAILS</h3>
          </header>
          <div className="ml-4 card p-4 w-50" >
          <p>
            <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)}{" "}
            ...{" "}
            {currentUser.accessToken.substr(
              currentUser.accessToken.length - 20
            )}
          </p>
          <p>
            <strong>Id:</strong> {currentUser.id}
          </p>
          <p>
            <strong>Email:</strong> {currentUser.email}
          </p>
          <strong>Authorities:</strong>
          <ul>
            {currentUser.roles &&
              currentUser.roles.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
          </ul>
          </div>
        </div>
      </div>
    );
  }
}
