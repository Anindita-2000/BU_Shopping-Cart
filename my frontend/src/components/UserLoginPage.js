import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./AdminLoginPage.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";

function UserLoginPage() {
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  })

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("")

  const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("")

    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.history.push("/profile");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }
  return (
    // <div style={{background: "#6a11cb", background:"-webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1)",
    // background: "linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))"}}>
    // <div className='login' mt 2>
    <MDBContainer fluid className="login" style={{ marginTop: "5rem" }}>
      <Header />
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-dark text-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "400px" }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">User Login</h2>
              <p className="text-white-50 mb-5">
                Please enter your id and password!
              </p>

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                placeholder="Email"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                placeholder="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />

              <p className="small mb-3 pb-lg-2">
                <a class="text-white-50" href="#!">
                  Forgot password?
                </a>
              </p>
              <MDBBtn
                outline
                className="mx-2 px-5 btn btn-primary"
                color="white"
              >
                Login
              </MDBBtn>

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
              <div>
                <p className="mb-0">
                  Don't have an account?{" "}
                  <Link to="/user/signup" class="text-white-50 fw-bold">
                    Sign Up
                  </Link>
                </p>
              </div>
              {/* <Link to ="/" outline className='mx-2 px-5 btn-primary' color='white' size='lg' >
                Create a new Account
              </Link> */}
              {/* <div>
                <p className="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>

              </div> */}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    //  </div>
  );
}

export default UserLoginPage;
