import React from "react";
import { NavLink } from "react-router-dom";

const ProfileHeader = () => {
  return (
    <header className="profile-header">
      <nav className="profile-nav container">
        <ul className="profile-nav-ul">
          <li>
            <NavLink className="profile-nav-a" to="/dashboard">
              <i className="fa-solid fa-house"></i>
            </NavLink>
          </li>
          <li>
            <NavLink className="profile-nav-a" to="/add-zone">
              <i className="fa-solid fa-plus"></i>
            </NavLink>
          </li>
          <li>
            <NavLink className="profile-nav-a" to="/settings">
              <i className="fa-solid fa-gear"></i>
            </NavLink>
          </li>
          <li>
            <NavLink className="profile-nav-a" to="/profile">
              <i className="fa-solid fa-user"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default ProfileHeader;
