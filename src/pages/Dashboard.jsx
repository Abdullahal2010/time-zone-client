import React from "react";
import Footer from "../components/Footer";
import "../assets/css/profile.css";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "../components/ProfileHeader";
import AddedZone from "../components/AddedZone";

const Dashboard = () => {
  const { addedTimeZones } = useUserContext();
  return (
    <>
      <ProfileHeader />
      <main className="home-main container dashboard-container">
        <div className="added-time-zone-container">
          {addedTimeZones.length === 0 ? (
            <span className="no-added">No time zone is added</span>
          ) : (
            addedTimeZones.map((zone) => <AddedZone key={zone} zone={zone} />)
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
