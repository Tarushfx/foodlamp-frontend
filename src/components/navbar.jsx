import React from "react";
import FastfoodTwoToneIcon from "@material-ui/icons/FastfoodTwoTone";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../css/navbar.css";

export default function NavBar(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Food Lamp
        <span style={{ margin: "3px" }}>
          <FastfoodTwoToneIcon />
        </span>
      </a>
      <ul className="navbar-nav">
        <li className="nav-item px-2">
          <a className="nav-link" href="#">
            Meal plan
          </a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link" href="#">
            Login
          </a>
        </li>
      </ul>
      <button type="button" className="btn" onClick={props.onChange}>
        {props.themeIcon}
      </button>
    </nav>
  );
}
