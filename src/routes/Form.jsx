import React from "react";
import Joi from "joi-browser";
import { Component } from "react";
class Form extends Component {
  state = { details: {}, errors: {} };

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const details = { ...this.state.details };
    details[input.name] = input.value;

    const errors = { ...this.state.errors };
    const error = this.validateProperty(input);
    // console.log(error);
    if (error) errors[input.name] = error;
    else delete errors[input.name];

    this.setState({ details, errors });
  };
  validate = () => {
    const errors = {};
    const settings = { abortEarly: false };
    const { error } = Joi.validate(this.state.details, this.schema, settings);
    const confirm = this.confirmPasswords(
      "confirmPassword",
      this.state.details["confirmPassword"]
    );
    if (confirm && this.state.details["confirmPassword"])
      errors["confirmPassword"] = errors["confirmPassword"]
        ? `${errors["confirmPassword"]} , ${confirm}`
        : confirm;
    // console.log(confirm);
    if (!error) {
      return confirm;
    }

    //to get all errors
    for (let item of error.details)
      errors[item.path[0]] = !errors[item.path[0]]
        ? item.message
        : `${errors[item.path[0]]} , ${item.message}`;

    // console.log(errors);
    return errors;
  };

  confirmPasswords = (name, value) => {
    if (name === "confirmPassword")
      if (value !== this.state.details.password)
        return "The passwsords do not match!!!";
    return null;
  };

  validateProperty = ({ name, value }) => {
    const proprertyObject = { [name]: value };
    const propertySchema = { [name]: this.schema[name] };
    const { error } = Joi.validate(proprertyObject, propertySchema);
    // comparing the passwords
    const confirm = this.confirmPasswords(name, value);
    // console.log(confirm);
    if (error) return error.details[0].message;
    if (confirm) return confirm;
    return null;
  };
}

export default Form;
