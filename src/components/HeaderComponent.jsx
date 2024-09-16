import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../assets/css/header.css";
import { useUserContext } from "../context/UserContext";

const Header = () => {
  const [show, setShow] = useState(false);
  const { isLoggedIn } = useUserContext();
  return (
    <header className="default-header">
      <nav className="default-nav container">
        <div className="nav-logo-div">
          <Link to="/">
            Time<span style={{ color: "orangered  " }}>Zone</span>
          </Link>
          <button className="nav-show-icon" onClick={() => setShow((p) => !p)}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <div className={`nav-basic-links ${!show ? "hidden-nav" : ""}`}>
          <ul>
            <li>
              <NavLink className="nav-basic-a" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-basic-a" to="/pricing">
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-basic-a" to="/faqs">
                Faqs
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={`nav-account-links ${!show ? "hidden-nav" : ""}`}>
          <ul className="sp-ul-header">
            {!isLoggedIn ? (
              <>
                <li>
                  <NavLink to="/register" className="hideable-a register-a">
                    Sign in
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" className="hideable-a login-a">
                    Login
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/profile" className="hideable-a profile-a">
                    <i className="fa-solid fa-user"></i>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
