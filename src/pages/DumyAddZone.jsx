import React, { useEffect, useState } from "react";
import { timeZones } from "../data/timezones";
import "../assets/css/tryout.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const DumyAddZone = () => {
  const [homeLocation, setHomeLocation] = useState("");
  const [foundZones, setFoundZones] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setHomeLocation(e.target.value);
    if (e.target.value === "") return setFoundZones([]);
    setFoundZones(() => {
      return timeZones.filter((zone) => {
        return zone.toLowerCase().includes(e.target.value.toLowerCase());
      });
    });
  };

  const handleAddHome = (zone) => {
    const pAddedZone = JSON.parse(localStorage.getItem("addedZones")) || [];

    if (pAddedZone.includes(zone)) {
      setError("Duplicated time zone");
      return setTimeout(() => setError(null), 2000);
    }

    if (pAddedZone.length >= 3) {
      setError("Login to add more time zone");
      return setTimeout(() => setError(null), 2000);
    }

    const newAddedZone = [...pAddedZone, zone];
    localStorage.setItem("addedZones", JSON.stringify(newAddedZone));
    navigate("/dummydashboard");
  };

  return (
    <>
      <header className="profile-header">
        <nav className="profile-nav container">
          <ul className="profile-nav-ul">
            <li>
              <NavLink className="profile-nav-a" to="/dummydashboard">
                <i className="fa-solid fa-house"></i>
              </NavLink>
            </li>
            <li>
              <NavLink className="profile-nav-a" to="/dummy-add-zone">
                <i className="fa-solid fa-plus"></i>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="home-main contaner">
        {error && (
          <div className="register-error-div">
            <span>{error}</span>
          </div>
        )}
        <div className="home-location-main-div">
          <h1 className="home-location-title-div">Add Location</h1>
          <p className="home-location-desc">City or time zone</p>
          <div className="home-location-search-div">
            <h3 className="home-location-search-div-title">
              Type your location here
            </h3>
            <input
              className="set-home-input"
              type="text"
              name="homeLocation"
              id="homeLocation"
              value={homeLocation}
              onChange={handleChange}
              placeholder="Search by City Name or Time Zone"
            />
          </div>
          {foundZones.length > 0 ? (
            <div className="home-location-found-time-container">
              {foundZones.map((zone, i) => (
                <button
                  onClick={() => handleAddHome(zone)}
                  key={i}
                  className="home-location-found-zone"
                >
                  {zone}
                </button>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </main>
    </>
  );
};

export default DumyAddZone;
