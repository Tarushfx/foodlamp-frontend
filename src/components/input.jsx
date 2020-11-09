import React from "react";
import _ from "lodash";
import "../css/form.css";
const Input = (props) => {
  const id = `${props.name}LoginForm`;
  return (
    <div className="md-form">
      <label htmlFor={id}>{props.label}</label>
      <input
        className="form-control"
        onChange={props.handleChange}
        type={props.type}
        id={id}
        onChange={props.onChange}
        name={props.name}
        key={props.key}
      ></input>
      {props.error &&
        props.error[props.name] &&
        props.error[props.name].split(",").map((item, index) => (
          <div className="danger alert-danger rounded error" key={index + 1}>
            {item}
          </div>
        ))}
      <br />
    </div>
  );
};

export default Input;
