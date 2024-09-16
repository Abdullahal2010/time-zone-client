import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="basic-footer">
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/privacy">Privacy</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/terms">Terms</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
