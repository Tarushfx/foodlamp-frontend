import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/form.css";
import Input from "./input";
import { Link } from "react-router-dom";

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

            <div className="card-body pt-0" style={{ display: "inline" }}>
              <br />
              <form
                className="text-left"
                style={{ color: "#757575" }}
                onSubmit={props.onSubmit}
              >
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

                <button
                  className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
                  type="submit"
                >
                  Login
                </button>

                <div className="text-center">
                  <p>
                    Not a member?&nbsp;
                    <Link to="/register">Register</Link>
                  </p>
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
