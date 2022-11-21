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
      className=""
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
        <div className="container-fluid">
          <div className="navbar-brand">
            <NavLink to="/">
              <span className="w3-bar-item w3-left">Shopify</span>
            </NavLink>
          </div>
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
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeStyle={activeStyle}
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeStyle={activeStyle}
                  to="/aboutus"
                >
                  ABout Us
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeStyle={activeStyle}
                  to="/faq"
                >
                  FAQ
                </NavLink>
              </li> */}
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item mr-2" style={{ marginRight: "1rem" }}>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-primary" type="submit">
                    Search
                  </button>
                </form>
              </li>
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
                  <button onClick={handleLogout} className="btn nav-link">
                    Logout
                  </button>
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
