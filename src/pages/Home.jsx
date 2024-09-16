import React from "react";
import Header from "../components/HeaderComponent";
import { Link } from "react-router-dom";
import "../assets/css/home.css";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main className="home-main">
        <h1 className="home-main-title">
          Time Zones are Problematic <br />
          Time<span style={{ color: "orangered" }}>Zone</span> Solves them
        </h1>
        <p className="home-main-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          qui nesciunt. Obcaecati, nam? Maxime numquam, eveniet veniam excepturi
          ad explicabo!
        </p>
        <div className="home-main-btn-div">
          <Link to="/register" className="home-main-register-btn">
            Sign Up
          </Link>
          or
          <Link to="/tryout" className="home-main-try-btn">
            Try out
          </Link>
        </div>
        <hr className="home-main-hr" />
        <div className="home-main-something">
          <div className="chrome-div">
            <img
              src="https://1000logos.net/wp-content/uploads/2017/08/Chrome-Logo.png"
              alt=""
            />
            <span>Chrome</span>
          </div>
          <div className="web-div">
            <i className="fa-solid fa-globe"></i>
            <span>Web App</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
