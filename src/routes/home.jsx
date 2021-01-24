import React, { Component } from "react";
import { Link } from "react-router-dom";
import landingPage from "../images/landing page.jpg";

const Home = () => {
  return (
    <div className="container-fluid p-0 w-100 m-0">
      <div className="row bg-dark w-100 m-0">
        <div className="col">
          <span className="btn btn-dark">
            <Link to="/register" className="text-light nav-link">
              Register with Foodlamp
            </Link>
          </span>
        </div>
        <div className="col">
          <span className="btn btn-dark">
            <Link to="/login" className="text-light nav-link">
              Login to Foodlamp
            </Link>
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col col-xs-12">
          <img src={landingPage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
