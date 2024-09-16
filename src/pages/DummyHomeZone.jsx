import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const updateTime = (zone, is12Hour) => {
  const options = {
    timeZone: zone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour12: is12Hour,
  };
  const now = new Date();
  const formatter = new Intl.DateTimeFormat([], options);
  const parts = formatter.formatToParts(now);
  const timeParts = parts.reduce((acc, part) => {
    if (part.type !== "literal") {
      acc[part.type] = part.value;
    }
    return acc;
  }, {});
  return timeParts;
  // console.log(zone);
};

const DummyHomeZone = () => {
  const zone = localStorage.getItem("homeLocation");
  const is12Hour = true;
  const dateFormat = false;
  const [time, setTime] = useState(updateTime(zone, is12Hour));
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => {
      setTime(updateTime(zone, is12Hour));
    }, 1000);
  });

  const dayOrNight = () => {
    let isDaytime = !0;
    if (!is12Hour) {
      isDaytime = time.hour >= 6 && time.hour < 18;
    } else {
      if (time.dayPeriod === "AM") {
        isDaytime = time.hour >= 6;
      } else {
        isDaytime = time.hour <= 6;
      }
    }
    return isDaytime ? (
      <i className="fa-solid fa-sun"></i>
    ) : (
      <i className="fa-solid fa-moon"></i>
    );
  };

  const handleEditHome = () => {
    localStorage.removeItem("homeLocation");
    navigate("/tryout");
  };

  return (
    <>
      {error && (
        <div className="register-error-div">
          <span>{error}</span>
        </div>
      )}
      <div className="added-zone-div">
        <div className="added-zone-title">
          <div className="added-zone-title-text">
            Local Time <div className="added-zone-title-sub">{zone}</div>
          </div>
          <button onClick={handleEditHome} className="added-zone-delete-btn">
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
        <div className="added-zone-time">
          {`${time.hour}:${time.minute}:${time.second}`}
          <span className="ampm">
            {is12Hour
              ? time.dayPeriod === undefined
                ? ""
                : time.dayPeriod
              : ""}
          </span>
        </div>
        <div className="added-zone-div-footer">
          <div className="day-date-div">
            <div className="day-name">{time.weekday}</div>
            <div className="date-name">
              {dateFormat
                ? time.month + " " + time.day + " " + time.year
                : time.day + " " + time.month + " " + time.year}
            </div>
          </div>
          <div className="sun-moon-div">{dayOrNight()}</div>
        </div>
      </div>
    </>
  );
};

export default DummyHomeZone;
