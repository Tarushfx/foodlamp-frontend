import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/form.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();
library.add(fab);

const LoginForm = (props) => {
  return (
    <div className="container-fluid w-100 h-100">
      <div className="banner-top-10"></div>
      <div className="row">
        <div className="col"></div>
        <div className="col col-md-6 login">
          <div className="card border-primary rounded">
            <h5 className="card-header info-color white-text text-center py-4">
              <strong>Login to Food-Lamp</strong>
            </h5>

            <div className="card-body px-lg-5 pt-0">
              <br />
              <form
                className="text-left"
                style={{ color: "#757575" }}
                action="#!"
              >
                <div className="md-form">
                  <label for="materialLoginFormEmail">E-mail</label>
                  <input
                    type="email"
                    id="materialLoginFormEmail"
                    className="form-control"
                  ></input>
                  <br />
                </div>

                <div className="md-form">
                  <label for="materialLoginFormPassword">Password</label>
                  <input
                    type="password"
                    id="materialLoginFormPassword"
                    className="form-control"
                  ></input>
                  <br />
                </div>

                <div className="d-flex justify-content-around">
                  <div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="materialLoginFormRemember"
                      ></input>
                      <label
                        className="form-check-label"
                        for="materialLoginFormRemember"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div>
                    <a href="">Forgot password?</a>
                  </div>
                </div>
                <button
                  className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
                  type="submit"
                >
                  Login
                </button>

                <div className="text-center">
                  <p>
                    Not a member?&nbsp;
                    <a href="">Register</a>
                  </p>

                  <p>or sign in with: </p>
                  <a type="button" className="btn-floating btn-fb btn-sm">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a type="button" className="btn-floating btn-tw btn-sm">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a type="button" className="btn-floating btn-li btn-sm">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a type="button" className="btn-floating btn-git btn-sm">
                    <i className="fab fa-github green"></i>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default LoginForm;
