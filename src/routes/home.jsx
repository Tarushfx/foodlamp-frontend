import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import landingPage from '../images/landing page.jpg';
import '../css/home.css';
import FastfoodTwoToneIcon from '@material-ui/icons/FastfoodTwoTone';

const Home = () => {
  return (
    <header>
      <div className="LandingPage">
        <nav className="landing-nav">
          <div className="nav-title">
            FoodLamp
            <FastfoodTwoToneIcon />
          </div>
          <div className="right-links">
            <Link to="/login" style={{ textDecoration: 'none' }}>
              Login
            </Link>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              Register
            </Link>
          </div>
        </nav>
        <div className="hero-section">
          <h1 className="hero-title">Welcome to FoodLamp</h1>
          <h2 className="hero-about">See food posts, get recipies, make a diet plan</h2>
          <h2 className="hero-about">and much more.</h2>
          <Link to="/login">
            <button className="hero-btn">Get Started</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Home;
