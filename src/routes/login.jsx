import React, { Component } from "react";
import LoginForm from "../components/loginForm";
import Joi from "joi-browser";
import _ from "lodash";
import Form from "./Form";
import authService from "../services/authService";
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

      const response = await authService.login(
        _.pick(this.state.details, [ "email", "password"])
      );
      if(!response) return ;

      window.location="/feed";
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

