import React, { useState } from "react";
import Footer from "../components/Footer";
import "../assets/css/profile.css";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "../components/ProfileHeader";

const Settings = () => {
  const { is12Hour, dateFormat, toggle12Hour, toggleDateFormat } =
    useUserContext();
  const [is12HourState, setIs12HourState] = useState(is12Hour);
  const [dateFormatState, setDateFormatState] = useState(dateFormat);

  const handle12HourToggle = () => {
    setIs12HourState((p) => !p);
    toggle12Hour();
  };

  const handleDateFormatToggle = () => {
    setDateFormatState((p) => !p);
    toggleDateFormat();
  };

  return (
    <>
      <ProfileHeader />
      <main className="home-main container dashboard-container">
        <div className="clock-style-div">
          <div className="div-title-settings">Clock Style</div>
          <div className="my-div">
            12 Hour <br /> (am/pm)
            <div
              className={`toggle-div ${is12HourState ? "" : "active-div"}`}
              onClick={handle12HourToggle}
            >
              <button></button>
            </div>
            24 Hour <br /> (13:00)
          </div>
        </div>
        <div className="date-format-div">
          <div className="div-title-settings">Date Format</div>
          <div className="my-div">
            MM-DD <br />
            YYYY
            <div
              className={`toggle-div ${dateFormatState ? "" : "active-div"}`}
              onClick={handleDateFormatToggle}
            >
              <button></button>
            </div>
            DD-MM <br />
            YYYY
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Settings;
