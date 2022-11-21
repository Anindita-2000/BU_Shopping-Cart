import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import "./AdminLoginPage.css";
import { Link } from 'react-router-dom';
import Header from "./Header";

function UserSignUp() {
  return (
    
    // <div style={{background: "#6a11cb", background:"-webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1)",
    // background: "linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))"}}>
    // <div className='login' mt 2>
    <MDBContainer fluid className='login' style={{marginTop: "5rem"}}>
        <Header />
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">User Sign Up</h2>
              <p className="text-white-50 mb-5">Please enter your details</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' placeholder='Email'  id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' placeholder='User Name'  id='formControlLg' type='username' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' placeholder='Password' id='formControlLg' type='password' size="lg"/>

              {/* <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p> */}
              <MDBBtn outline className='mx-2 px-5 btn-primary' color='white' size='lg' >
                Login
              </MDBBtn>

              <div className='d-flex flex-row mt-3 mb-5'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='facebook-f' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='twitter' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='google' size="lg"/>
                </MDBBtn>
              </div>
              <div>
                <p className="mb-0">Don't have an account? <Link to="/" class="text-white-50 fw-bold">Sign Up</Link></p>

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

export default UserSignUp;