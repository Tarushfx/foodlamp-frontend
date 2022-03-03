import React, { Component } from "react";
import _ from "lodash";
import Joi from "joi-browser";
import authService from "../services/authService";
import Form from "./Form";
import LoginForm from "../components/loginForm";
class Login extends Form {
  state = {
    details: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required().label("E-mail"),
    password: Joi.string().required().min(6).label("Password"),
  };
  doSubmit = async () => {
    try {
      console.log("hello");
      const response = await authService.login(
        _.pick(this.state.details, ["email", "password"])
      );
      console.log("====================================");
      console.log(response);
      console.log("====================================");
      if (response.error) {
        const errors = { ...this.state.errors };
        errors.email = response.error.response.data;
        this.setState({ errors });
      }
      if (!response.status) return;
      window.location = "/feed";

      window.location = "/feed";
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = error.response.data;
        this.setState({ errors });
      }
    }
  };
  render() {
    return (
      <LoginForm
        onSubmit={this.onSubmit}
        handleChange={this.handleChange}
        errors={this.state.errors}
      />
    );
  }
}

export default Login;
