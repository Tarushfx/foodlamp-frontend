import React from "react";
import _ from "lodash";
import "../css/form.css";
const Input = (props) => {
  const id = `${props.name}Form`;
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
        readOnly={
          (document.getElementById(`${id.slice(0, -13)}Form`) &&
            document.getElementById(`${id.slice(0, -13)}Form`).value == "") ||
          (document.getElementById("oldPasswordForm") &&
            document.getElementById("oldPasswordForm").value === "" &&
            id === "newPasswordForm")
        }
        placeholder={props.placeholderText || ""}
        required={props.type === "date"}
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
