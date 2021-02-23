import React from "react";
import { Link } from "react-router-dom";

const NavBarLink = (props) => {
  return (
    <li className="nav-item px-2">
      <Link
        className="nav-link"
        style={{ color: props.theme.text }}
        to={props.link}
      >
        {props.name}
      </Link>
    </li>
  );
};

export default NavBarLink;
