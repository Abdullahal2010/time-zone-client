import React, { useEffect, useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import Footer from "../components/Footer";
import AddedZone from "../components/AddedZone";
import { NavLink, useNavigate } from "react-router-dom";
import DummyHomeZone from "./DummyHomeZone";
import DummyAddedZone from "../components/DummyAddedZone";

const DummyDashboard = () => {
  const homeLocation = localStorage.getItem("homeLocation");
  const [pAddedZone, setpAddedZone] = useState(
    JSON.parse(localStorage.getItem("addedZones")) || []
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!homeLocation) navigate("/tryout");
    console.log(pAddedZone);
  }, []);

  const handeUpdate = () => {
    setpAddedZone(JSON.parse(localStorage.getItem("addedZones")) || []);
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
      <main className="home-main container dashboard-container">
        <div className="added-time-zone-container">
          <DummyHomeZone />
          {pAddedZone.length > 0
            ? pAddedZone.map((zone, index) => (
                <>
                  <DummyAddedZone
                    onUpdate={handeUpdate}
                    zone={zone}
                    key={zone}
                  />
                </>
              ))
            : ""}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DummyDashboard;
