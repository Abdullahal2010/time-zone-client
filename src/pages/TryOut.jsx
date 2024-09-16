import React, { useEffect, useState } from "react";
import { timeZones } from "../data/timezones";
import "../assets/css/tryout.css";
import { useNavigate } from "react-router-dom";

const TryOut = () => {
  const pHomeLocation = localStorage.getItem("homeLocation");
  const [homeLocation, setHomeLocation] = useState("");
  const [foundZones, setFoundZones] = useState([]);
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

  useEffect(() => {
    if (pHomeLocation) navigate("/dummydashboard");
  }, []);

  const handleAddHome = (zone) => {
    localStorage.setItem("homeLocation", zone);
    navigate("/dummydashboard");
  };

  return (
    <section className="try-out-sec">
      <div className="home-location-main-div">
        <h1 className="home-location-title-div">Where's your home place?</h1>
        <p className="home-location-desc">
          This is your home from which all your other locations will build
          around.
          <br />
          Don't worry though, you'll be able to change it in your settings.
        </p>
        <div className="home-location-search-div">
          <h3 className="home-location-search-div-title">
            Type your home location here
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
    </section>
  );
};

export default TryOut;
