import React from "react";
import _ from "lodash";
import authService from "../services/authService";
import Form from "./Form";
import Joi from "joi-browser";
import RegisterForm from "../components/registerForm";

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
      const response = await authService.register(
        _.pick(this.state.details, ["name", "email", "password"])
      );
      if (response.error) this.setState({ error: response.error });
      if (!response.status) return;
      window.location = "/feed";
    } catch (error) {
      if (error.response && error.response.status === 400) {
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
