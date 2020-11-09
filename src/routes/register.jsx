import React, { Component } from "react";
import RegisterForm from "../components/registerForm";
import Joi from "joi-browser";
import _ from "lodash";
import Form from "./Form";
import * as userService from "../services/userService";
class Register extends Form {
  state = {
    details: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().min(5).label("Name"),
    email: Joi.string().required().label("E-mail"),
    password: Joi.string().required().min(6).label("Password"),
    confirmPassword: Joi.string().required().label("Confirm Password"),
  };
  doSubmit = async () => {
    try {
      const response = await userService.register(
        _.pick(this.state.details, ["name", "email", "password"])
      );
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 400) {
        console.log("hello");
        const errors = { ...this.state.errors };
        errors.name = error.response.data;
        this.setState({ errors });
      }
    }
  };
  render() {
    return (
      <RegisterForm
        onSubmit={this.onSubmit}
        handleChange={this.handleChange}
        errors={this.state.errors}
        buttonDisable={this.validate}
      />
    );
  }
}

export default Register;
