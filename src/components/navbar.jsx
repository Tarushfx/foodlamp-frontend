import React, { useEffect, useState } from "react";
import FastfoodTwoToneIcon from "@material-ui/icons/FastfoodTwoTone";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import NavBarLink from "./navBarLink";
import authService, { getName, getToken } from "../services/authService";

export default function NavBar(props) {
  const token = getToken();
  let [name, setName] = useState("");
  useEffect(() => {
    let promName = async () => {
      let gotName = await getName();
      setName(gotName);
    };
    promName();
  });
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand" to="/feed">
        Food Lamp
        <span style={{ margin: "3px" }}>
          <FastfoodTwoToneIcon />
        </span>
      </Link>
      <ul className="navbar-nav">
        <NavBarLink link="#" name="Meal Plan" />
        <NavBarLink link="#" name="Recipes" />
        {!token && <NavBarLink link="/login" name="Login" />}
        {token && <NavBarLink link="/logout" name="Logout" />}
      </ul>
      <ul className="navbar-nav" style={{ justifySelf: "end" }}>
        <button type="button" className="btn" onClick={props.onChange}>
          {props.themeIcon}
        </button>
        {token && <NavBarLink link="#" name={name} />}
      </ul>
    </nav>
  );
}
