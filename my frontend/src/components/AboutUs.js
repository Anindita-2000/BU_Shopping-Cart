import React from "react";
import { Link } from "react-router-dom";
import NewHeader from "./NewHeader";
import img1 from "../static/IMG20211010095734.jpg";
import img2 from "../static/facebook.png";
import img3 from "../static/linkedin.png";
import img4 from "../static/instagram.png";
import img7 from "../static/capge.png";
import "../components/AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <NewHeader />
      <div id="bg-img"></div>
      <div id="About">
        <div className="container">
          <div className="row">
            <div className="col">
              <div id="AboutData">
                <div className="card bg-white">
                  <div className="card-title my-5">
                    <div className="media d-flex">
                      <img
                        src={img1}
                        width="250"
                        height="250"
                        className="img-fluid rounded-top mx-5 d-none d-lg-block mt-5"
                        id="profile"
                      />
                      <div
                        className="media-body"
                        style={{ marginLeft: "60px", marginTop: "30px" }}
                      >
                        <h3 className="display-4 ml-5">I'm Anindita Das</h3>
                        <p className="text-bolder m-10">Analyst</p>
                        <table className="table table-responsive ml-5">
                          <tbody>
                            <tr>
                              <td className="text-muted">Employee Id</td>
                              <td>:</td>
                              <td>1229638</td>
                            </tr>
                            <tr>
                              <td className="text-muted">Age</td>
                              <td>:</td>
                              <td>22 Years Old</td>
                            </tr>
                            <tr>
                              <td className="text-muted">Email</td>
                              <td>:</td>
                              <td>aninditadas.das2000@gmail.com</td>
                            </tr>
                            <tr>
                              <td className="text-muted">Phone</td>
                              <td>:</td>
                              <td>+91 9875582697</td>
                            </tr>
                            <tr>
                              <td className="text-muted">
                                Project Contribution
                              </td>
                              <td>:</td>
                              <td>
                                Worked on both the Backend and Frontend part
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer bg-danger" id="aboutup">
                    <a
                      href="https://www.facebook.com/profile.php?id=100026729588668"
                      target="blank"
                    >
                      <img src={img2} width="60" height="60" className="mx-5" />
                    </a>

                    <a
                      href="https://instagram.com/anindita723?igshid=YmMyMTA2M2Y="
                      target="blank"
                    >
                      <img src={img4} width="60" height="60" className="mx-5" />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/anindita-das-766745212"
                      target="blank"
                    >
                      <img src={img3} width="60" height="60" className="mx-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <span className="bg-danger text-white">About Me</span>
              <hr className="bg-danger" />
              <p className="lead text-justify" id="skillup">
                A Multitasker, Dedicated, and Smart worker Electrical Engineer,
                want to become associated with a company where I can succeed in
                an environment of growth and excellence to meet personal and
                organizational goals as well as enjoy the professional role.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="Experience">
        <div className="container mt-5">
          <span className="bg-success text-white">Experience</span>
          <hr className="bg-success" />
          <div className="row">
            <div className="col-lg-6">
              <div className="card bg-white">
                <img
                  src={img7}
                  width="200"
                  height="80"
                  className="img-fluid m-auto py-3"
                />
                <h3 className="text-center text-success mt-3">
                  Analyst of Capgemini
                </h3>
                <p className="lead text-justify ml-4 mr-4 p-3" id="exlogo2">
                  Pursued a three months CAMP training in Capgemini, currently
                  working in React Domain for Capgemini.Done the Backend with
                  Spring Boot with Mongodb Atlas and the Frontend with React js.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Contact">
        <div className="container mt-5">
          <span className="bg-warning text-white">Conatct Me</span>
          <hr className="bg-dark" />
          <div className="row">
            <div className="col">
              <div className="card bg-white">
                <div className="card-header">
                  <h4 className="my-4">Contact me on Below</h4>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="User Name"
                      className="form-control col-4"
                    />
                  </div>
                  <div className="form-group my-3">
                    <input
                      type="email"
                      placeholder="Email Id"
                      className="form-control col-4"
                    />
                  </div>
                  <div className="form-group my-3">
                    <textarea
                      className="form-control col-4"
                      placeholder="Write Your Valuable Comments........."
                    ></textarea>
                  </div>
                  <div className="form-group my-3">
                    <button className="btn btn-success test-white">
                      <Link className="btn btn-secondary mt-2" to="/thanks">
                        Submit Now
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid bg-primary">
        <div class="row">
          <div class="col">
            <div class="container">
              <p class="text-white pt-3 text-center">©Made By Anindita Das</p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
};

export default AboutUs;
