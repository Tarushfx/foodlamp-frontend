import React, { useState } from "react";
import FastfoodTwoToneIcon from "@material-ui/icons/FastfoodTwoTone";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Link } from "react-router-dom";
import NavBarLink from "./navBarLink";
import { getToken } from "../services/authService";
import { WbSunny } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import { Popover } from "react-tiny-popover";
import ProfileDropdown from "./profileDropDown";
import Likes from "../modals/likes";
import "../css/navbar.css";
export default function NavBar(props) {
  const token = getToken();
  const [search, setSearch] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleChange = (e) => {
    setSearch(e.currentTarget.value);
  };
  return (
    <>
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
          <NavBarLink link="/mealplan" theme={props.theme} name="Meal Plan" />
          <NavBarLink link="/recipe" theme={props.theme} name="Recipes" />
          {!token && (
            <NavBarLink link="/login" theme={props.theme} name="Login" />
          )}
          {token && (
            <NavBarLink link="/logout" theme={props.theme} name="Logout" />
          )}
        </ul>
        {props.searchRecipe && (
          <div className="input-group rounded search">
            <input
              type="search"
              className="form-control rounded"
              placeholder={props.search || "Search Recipes"}
              aria-label="Search"
              aria-describedby="search-addon"
              onChange={handleChange}
              // background={props.theme.secondary}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  props.searchRecipe(e, search);
                }
              }}
            />
            <span class="input-group-text border-0" id="search-addon">
              <SearchIcon
                onClick={(e) => {
                  props.searchRecipe(e, search);
                }}
              />
            </span>
          </div>
        )}
        <ul
          className="navbar-nav"
          style={{ marginLeft: "auto", marginRight: "30px" }}
        >
          {token && (
            <Popover
              isOpen={isPopoverOpen}
              positions={["bottom"]} // preferred positions by priority
              //   onClickOutside={() => setIsPopoverOpen(false)}
              content={
                <ProfileDropdown theme={props.theme} data={props.data} />
              }
            >
              <li
                className="nav-item"
                style={{ alignContent: "center", display: "grid" }}
              >
                <div
                  style={{ color: props.theme.text }}
                  onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                >
                  {props.data && props.data.name}
                </div>
              </li>
            </Popover>
          )}

          <button type="button" className="btn" onClick={props.onChange}>
            <WbSunny />
          </button>
        </ul>
      </div>
      <Likes
        data={props.data}
        theme={props.theme.color}
        changeTheme={props.changeTheme}
        loadData={props.loadData}
      />
    </>
  );
}
