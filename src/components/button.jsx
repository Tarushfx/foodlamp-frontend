import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const NavLinkButton = () => {
  return (
    <Button>
      <Link from="#" style={{ textDecorationLine: "none" }}>hello</Link>
    </Button>
  );
};

export default NavLinkButton;
