import React, { memo, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const updateClock = (zone, is12Hour) => {
  const now = new Date();
  const options = {
    timeZone: zone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: is12Hour,
  };
  return now.toLocaleTimeString([], options);
};

const FoundZone = ({ zone }) => {
  const { is12Hour, isLoggedIn } = useUserContext();
  const [time, setTime] = useState(updateClock(zone, is12Hour));
  const { addTimeZone } = useUserContext();
  const [error, setError] = useState(null);
  const redirect = useNavigate();

  setInterval(() => {
    setTime(updateClock(zone, is12Hour));
  }, 1000);

  const handleAddTimeZone = async (zone) => {
    setError("Adding zone");
    const result = await addTimeZone(zone);
    if (!result) {
      setError("Time zone is already added");
      return setTimeout(() => setError(null), 2000);
    } else {
      setError(null);
      return redirect("/dashboard", { state: "TIme zone is added" });
    }
  };

  const handleAAAAA = () => {
    setError("Log in to acces this feature");
    setTimeout(() => setError(null), 2000);
  };

  return (
    <>
      {error && (
        <div className="register-error-div">
          <span>{error}</span>
        </div>
      )}
      <div className="found-zone-div">
        <div className="found-zone-title">
          <span className="found-zone-title-text">{zone}</span>
          <button
            className="found-zone-add-btn"
            onClick={() =>
              isLoggedIn ? handleAddTimeZone(zone) : handleAAAAA()
            }
          >
            <i className="fa-solid fa-plus"> </i>
          </button>
        </div>
        <div className="found-time-zone-time">{time}</div>
      </div>
    </>
  );
};

export default memo(FoundZone);
