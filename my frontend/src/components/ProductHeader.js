import React from "react";
// import { connect } from 'react-redux';
import { Link, NavLink, Redirect } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "#0b0040",
  };

  let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      // style={{ position: "fixed" }}
    >
      <div
        className="navbar navbar-expand-sm  navbar-dark fixed-top"
        style={{
          backgroundColor: "#000000",
          paddingTop: "0px",
          paddingBottom: "0px",
          height: "50px",
        }}
      >
        {/* <div className="container-fluid"> */}
        <div className="container-fluid">
          <div className="navbar-brand">
            {/* <NavLink to=""> */}
            <span className="">
              {/* <img src={img17} height="30px" width="30px" /> */}
            </span>
            <span className="ml-3 fst-italic">STARBUY</span>
            {/* </NavLink> */}
          </div>
          {/* <div className="dropdown"> */}
          {/* <button
              className="btn btn-dark dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              All Catagories
            </button> */}
          {/* <ul className="dropdown-menu">
              <li className="my-3 h4" style={{ width: "15rem" }}>
                <Link className="dropdown-item" to="/">
                  <b>
                    <i class="bi bi-house-door-fill"></i> HOME
                  </b>
                </Link>
              </li>
              <li className="my-3 h4">
                <Link className="dropdown-item" to="/admin/login">
                  <i class="bi bi-person-heart"></i> MEN
                </Link>
              </li>
              <li className="my-3 h4">
                <Link className="dropdown-item" to="/moderator/login">
                  <i class="bi bi-person-hearts"></i> WOMEN
                </Link>
              </li>
              <li className="my-3 h4">
                <Link className="dropdown-item" to="/user/login">
                  <i class="bi bi-people-fill"></i> KIDS
                </Link>
              </li>
              <li className="my-3 h4">
                <Link className="dropdown-item" to="/user/login">
                  <i class="bi bi-camera-fill"></i> ELECTRONICS
                </Link>
              </li>
              <li className="my-3 h4">
                <Link className="dropdown-item" to="/user/login">
                  <i class="bi bi-earbuds"></i> ACCESSESORIES
                </Link>
              </li>
            </ul> */}
          {/* </div> */}
          {/* <div className="navbar-brand">
            <NavLink to="/">
              <span className="w3-bar-item w3-left">YMS</span>
            </NavLink>
          </div> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item active" style={{ marginLeft: "1rem" }}>
                <NavLink className="nav-link" to="/">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeStyle={activeStyle}
                  to="/products"
                >
                  PRODUCTS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeStyle={activeStyle}
                  to="/aboutus"
                >
                  ABOUT US
                </NavLink>
              </li>
              {/* <li className="nav-item" style={{ marginLeft: "2rem" }}>
                <NavLink
                  className="nav-link"
                  activeStyle={activeStyle}
                  to="/faq"
                >
                  Free Shipping WorldWide &nbsp; / &nbsp; Money Back Gurantee
                  &nbsp;/ &nbsp; <i class="bi bi-telephone-fill"></i> &nbsp;
                  +(888)987-654321
                </NavLink>
              </li> */}
            </ul>
            <ul className="navbar-nav">
              {/* <li className="nav-item mr-2" style={{ marginRight: "1rem" }}>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-primary" type="submit">
                    Search
                  </button>
                </form>
              </li> */}
              <li className="nav-item">
                {!isLoggedIn ? (
                  <div className="d-flex">
                    {/* <Timer></Timer> */}
                    <div className="dropdown">
                      <button
                        className="btn btn-dark dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        LOGIN / SIGN IN
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="/admin/login">
                            ADMIN LOGIN
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/moderator/login">
                            MODERATOR LOGIN
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/user/login">
                            USER LOGIN
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <Link className="nav-link" to="/admin/login">
                      LOGIN
                    </Link>
                    <Link className="nav-link" to="/user/login">
                      Log In/Sign In
                    </Link> */}
                  </div>
                ) : (
                  <div>
                    <button onClick={handleLogout} className="btn nav-link">
                      <i class="bi bi-person-circle"></i>
                    </button>
                    <button onClick={handleLogout} className="btn nav-link">
                      Logout
                    </button>
                  </div>
                )}
              </li>
            </ul>
            {/* {auths === true ? <Redirect to='/' /> : null} */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
