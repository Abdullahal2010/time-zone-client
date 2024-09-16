import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import "../assets/css/profile.css";
import ProfileHeader from "../components/ProfileHeader";
import { timeZones } from "../data/timezones";
import FoundZone from "../components/FoundZone";
import { useUserContext } from "../context/UserContext";

const AddZones = () => {
  const [timezones, setTimezones] = useState(timeZones);
  const [input, setInput] = useState("");

  useEffect(() => {
    setTimezones((previousTimeZones) => {
      return timeZones.filter((v) =>
        v.toLowerCase().includes(input.toLowerCase())
      );
    });
  }, [input]);

  return (
    <>
      <ProfileHeader />
      <main className="home-main container add-zones-main-container">
        <div className="add-time-zone-title">
          <div className="tile-text-zone">Add Time Zone:</div>
          <div className="search-zone-div">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              placeholder="Enter city or timezone name"
              type="text"
              name="timezonename"
              id="timezonename"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </div>
        <div className="divdiv">
          <div className="found-time-zones-main-div">
            {timezones.length == 0 ? (
              <div className="not-found-div">No time were zones found</div>
            ) : (
              timezones.map((zone) => <FoundZone key={zone} zone={zone} />)
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AddZones;
