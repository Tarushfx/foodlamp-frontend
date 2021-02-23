import React, { useEffect, useState } from "react";
import FastfoodTwoToneIcon from "@material-ui/icons/FastfoodTwoTone";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import NavBarLink from "./navBarLink";
import authService, { getName, getToken } from "../services/authService";
import { WbSunny } from "@material-ui/icons";

export default function NavBar(props) {
  const token = getToken();

  return (
    <div
      className="navbar"
      style={{
        backgroundColor: props.theme.secondary,
      }}
    >
      <Link
        className="navbar-brand"
        style={{ color: props.theme.text }}
        to="/feed"
      >
        Food Lamp
        <span style={{ margin: "3px" }}>
          <FastfoodTwoToneIcon />
        </span>
      </Link>
      <ul className="navbar-nav">
        <NavBarLink link="#" theme={props.theme} name="Meal Plan" />
        <NavBarLink link="#" theme={props.theme} name="Recipes" />
        {!token && (
          <NavBarLink link="/login" theme={props.theme} name="Login" />
        )}
        {token && (
          <NavBarLink link="/logout" theme={props.theme} name="Logout" />
        )}
      </ul>
      <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
        {token && (
          <NavBarLink
            link="#"
            theme={props.theme}
            name={props.data && props.data.name}
          />
        )}
        <button type="button" className="btn" onClick={props.onChange}>
          <WbSunny />
        </button>
      </ul>
    </div>
  );
}
