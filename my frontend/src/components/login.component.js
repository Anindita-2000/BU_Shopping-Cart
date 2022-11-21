import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import NewHeader from "./NewHeader";
import { Link, Navigate } from "react-router-dom";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.state = {
      isloggedin: false,
      username: "",
      password: "",
      loading: false,
      message: "",
    };
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  handleLogin(e) {
    e.preventDefault();
    this.setState({
      message: "",
      loading: true,
    });
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.setState({
            message: "",
            loading: false,
            isloggedin: true
          });
          console.log (this.props.history, this.props.location)
          this.props.history.push("/admindashboard");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.setState({
            loading: false,
            message: resMessage,
          });
        }
      );
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    return (
      <MDBContainer fluid className="login" style={{ marginTop: "3rem", minHeight: "95vh" }}>
        <NewHeader />
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-dark text-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "400px" }}
            >
              <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold mb-2 text-uppercase">
                  {this.props.mode === "user"
                    ? "User Login"
                    : this.props.mode === "mod"
                    ? "Moderator Login"
                    : "Admin Login"}
                </h2>
                <p className="text-white-50 mb-5">
                  Please enter your username and password!
                </p>

                <Form
                  onSubmit={this.handleLogin}
                  ref={(c) => {
                    this.form = c;
                  }}
                  className="d-flex flex-column align-items-center w-100"
                >
                  <Input
                    type="text"
                    className="form-control p-2 my-2"
                    placeholder="Username"
                    name="username"
                    id="formControlLg"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required]}
                  />

                  <Input
                    type="password"
                    className="form-control p-2 my-2"
                    placeholder="Password"
                    name="password"
                    id="formControlLg"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required]}
                  />
                  <p className="text-center small mb-3 pb-lg-2">
                    <Link to="/forgot" class="text-white-50" href="#!">
                      Forgot password?
                    </Link>
                  </p>
                  <button

                    // outline
                    className="mx-2 px-5 py-2 btn btn-primary"
                    color="white"
                    disabled={this.state.loading}
                  >
                    {this.state.loading ? (
                      <button class="btn btn-primary" type="button" disabled>
                        <span
                          class="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Loading...
                      </button>
                    ) : (
                      <span>Login</span>
                    )}
                  </button>

                  {this.state.message && (
                    <div className="mt-2">
                      <div className="alert alert-danger" role="alert">
                        {this.state.message}
                      </div>
                    </div>
                  )}
                  <CheckButton
                    style={{ display: "none" }}
                    ref={(c) => {
                      this.checkBtn = c;
                    }}
                  />
                </Form>
                <div className="d-flex flex-row mt-3 mb-5">
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-3"
                    style={{ color: "white" }}
                  >
                    <MDBIcon fab icon="facebook-f" size="lg" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-3"
                    style={{ color: "white" }}
                  >
                    <MDBIcon fab icon="twitter" size="lg" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-3"
                    style={{ color: "white" }}
                  >
                    <MDBIcon fab icon="google" size="lg" />
                  </MDBBtn>
                </div>
                  {this.props.mode === 'user' && <p className="mb-0">
                    Don't have an account?{" "}
                    <Link to="/user/signup" class="text-white-50 fw-bold">
                      Sign Up
                    </Link>
                  </p>}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        {
          this.state.isloggedin && <Navigate to= {this.props.mode === "user"
          ? "/userdashboard"
          : this.props.mode === "mod"
          ? "/moddashboard"
          : "/admindashboard"} />
        }
      </MDBContainer>
    );
  }
}
