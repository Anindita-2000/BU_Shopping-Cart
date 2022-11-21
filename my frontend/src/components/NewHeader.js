import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AuthService from "../services/auth.service";
import EventBus from "../common/EventBus";
import img17 from "../static/27.jpg";

class NewHeader extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  activeStyle = {
    fontWeight: "bold",
    color: "#0b0040",
  };

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <nav
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
              {/* <NavLink to=""> */}
                <span className="">
                  
                  {/* <img src={img17} height="30px" width="30px" /> */}
                </span>
                <span className="ml-3 fst-italic">STARBUY</span>
              {/* </NavLink> */}
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
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeStyle={this.activeStyle}
                    to="/products"
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeStyle={this.activeStyle}
                    to="/aboutus"
                  >
                    About Us
                  </NavLink>
                </li>

                {showModeratorBoard && (
                  <li className="nav-item">
                    <Link to={"/mod"} className="nav-link">
                      Moderator Board
                    </Link>
                  </li>
                )}

                {showAdminBoard && (
                  <li className="nav-item">
                    <Link to={"/admin"} className="nav-link">
                      Admin Board
                    </Link>
                  </li>
                )}

                {currentUser && (
                  <li className="nav-item">
                    <Link to={"/user"} className="nav-link">
                      User
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            <ul className="navbar-nav">
              {/* <li className="nav-item mr-2" style={{ marginRight: "1rem" }}>
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
              </li> */}
              {currentUser ? (
                <div className="d-flex">
                  <li className="nav-item">
                    <Link to={"/profile"} className="nav-link">
                      {currentUser.username}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link" onClick={this.logOut}>
                      LogOut
                    </a>
                  </li>
                </div>
              ) : (
                <li className="nav-item">
                  <div className="d-flex">
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
                  </div>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NewHeader;
