import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/form.css";
import Input from "./input";

const RegisterForm = (props) => {
  return (
    <div className="container-fluid w-100 h-100">
      <div className="banner-top-5"></div>
      <div className="row">
        <div className="col"></div>
        <div className="col col-md-6 register">
          <div className="card border-primary rounded">
            <h5 className="card-header info-color white-text text-center py-4">
              <strong>Register with Food-Lamp</strong>
            </h5>

            <div className="card-body pt-0" style={{ display: "inline" }}>
              <br />
              <form
                className="text-left"
                style={{ color: "#757575" }}
                onSubmit={props.onSubmit}
              >
                <Input
                  name="name"
                  type="name"
                  error={props.errors}
                  label="Name"
                  onChange={props.handleChange}
                />

                <Input
                  name="email"
                  type="email"
                  error={props.errors}
                  label="E-mail"
                  onChange={props.handleChange}
                />

                <Input
                  name="password"
                  type="password"
                  error={props.errors}
                  label="Password"
                  onChange={props.handleChange}
                />

                <Input
                  name="confirmPassword"
                  type="password"
                  error={props.errors}
                  label="Confirm Password"
                  onChange={props.handleChange}
                />
                <button
                  className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
                  type="submit"
                  disabled={props.buttonDisable()}
                >
                  Register
                </button>

                {/* <div className="text-center">
                  <p>Register with: </p>
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
                </div> */}
              </form>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
      <div className="banner-top-5"></div>
    </div>
  );
};

export default RegisterForm;
