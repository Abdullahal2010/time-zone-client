import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserCotext = createContext();

const API_URL = "https://server-test-y07e.onrender.com";

export const useUserContext = () => {
  return useContext(UserCotext);
};

const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [addedTimeZones, setAddedTimeZones] = useState([]);
  const [is12Hour, setis12Hour] = useState(null);
  const [dateFormat, setDateFormat] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoggedInUser(null);
      setIsLoggedIn(false);
    } else {
      axios
        .get(API_URL + "/profile", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          const loggedInUserRes = res.data.user;
          setLoggedInUser(loggedInUserRes);
          setIsLoggedIn(true);
          setAddedTimeZones(loggedInUserRes.timeZones);
          setis12Hour(loggedInUserRes.is12Hour);
          setDateFormat(loggedInUserRes.dateFormat);
        })
        .catch((err) => {
          console.log(err);
          console.log(token);
        });
    }
  });

  const token = localStorage.getItem("token");

  const value = {
    loggedInUser,
    isLoggedIn,
    addedTimeZones: addedTimeZones,
    is12Hour: is12Hour,
    dateFormat: dateFormat,
    logOutUser: () => {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      setLoggedInUser(null);
    },
    logInUser: () => {
      const token = localStorage.getItem("token");
      axios
        .get(API_URL + "/profile", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          const loggedInUserRes = res.data.user;
          setLoggedInUser(loggedInUserRes);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
          console.log(token);
        });
    },
    addTimeZone: async (zone) => {
      const token = localStorage.getItem("token");
      await axios
        .post(
          API_URL + "/addzones",
          { newTimeZone: zone },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((res) => {
          setAddedTimeZones(res.data.user.timeZones);
          navigate("/dashboard", { state: "Time zone is added" });
        })
        .catch((err) => {
          return null;
        });
    },
    deleteZone: async (zone) => {
      const token = localStorage.getItem("token");
      await axios
        .post(
          API_URL + "/deleteZones",
          { newTimeZone: zone },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((res) => {
          setAddedTimeZones(res.data.user.timeZones);
        })
        .catch((err) => {
          return null;
        });
    },
    toggle12Hour: async () => {
      const token = localStorage.getItem("token");
      await axios
        .post(
          API_URL + "/toggle12hour",
          { is12Hour: !is12Hour },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((res) => {
          setis12Hour(res.data.user.is12Hour);
        })
        .catch((err) => {
          return null;
        });
    },
    toggleDateFormat: async () => {
      const token = localStorage.getItem("token");
      await axios
        .post(
          API_URL + "/toggledateformat",
          { dateFormat: !dateFormat },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((res) => {
          setDateFormat(res.data.user.dateFormat);
        })
        .catch((err) => {
          return null;
        });
    },
  };

  return <UserCotext.Provider value={value}>{children}</UserCotext.Provider>;
};

export default UserProvider;
