import React from "react";
import Footer from "../components/Footer";
import "../assets/css/profile.css";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "../components/ProfileHeader";

const Profile = () => {
  const { loggedInUser, logOutUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOutUser();
    navigate("/login");
  };
  return (
    <>
      <ProfileHeader />
      <main className="home-main container">
        <div className="profile-main-container">
          <h2 className="profile-title-main">Account details</h2>
          <p className="profile-id">
            <strong>ID</strong>: {loggedInUser.id}
          </p>
          <p className="profile-email">
            <strong>Email</strong>: {loggedInUser.email}
          </p>

          <button className="profile-log-out-btn" onClick={handleLogOut}>
            Log Out
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
