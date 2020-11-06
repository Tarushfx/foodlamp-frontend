import React, { Component } from "react";
import landingPage from "../images/landing page.jpg";

const Home = () => {
  return (
    <div className="container-fluid p-0 w-100 m-0">
      <div className="row bg-dark w-100 m-0">
        <div className="col col-xs-12">
          <img src={landingPage} alt="" />
        </div>
      </div>
      <div className="row ">
        <div className="col col-xs-12"></div>
      </div>
    </div>
  );
};

export default Home;
