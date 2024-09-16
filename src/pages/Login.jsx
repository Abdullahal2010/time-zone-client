import React, { useState } from "react";
import Header from "../components/HeaderComponent";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/login.css";
import axios from "axios";
import { useUserContext } from "../context/UserContext";

const API_URL = "https://server-test-y07e.onrender.com";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { logInUser } = useUserContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((pv) => {
      return { ...pv, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(API_URL + "/login", {
        email: user.email,
        password: user.password,
      })
      .then(async (res) => {
        const token = res.data.token;
        if (!token) {
          setError("There was a problem while loging in, Retry !");
          setLoading(false);
          return setTimeout(() => setError(null), 3000);
        } else {
          await localStorage.setItem("token", token);

          logInUser();
          setLoading(false);
          navigate("/profile");
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
        setLoading(false);
        setTimeout(() => setError(null), 3000);
      });
  };

  return (
    <>
      <Header />
      <main className="home-main contaner">
        {error && (
          <div className="register-error-div">
            <span>{error}</span>
          </div>
        )}
        <div className="about-title">Login</div>
        <div className="login-form-div">
          <form onSubmit={handleSubmit}>
            <div className="login-form-title">Create your free accout</div>
            <div className="login-form-subtitle">
              No account ? <Link to="/register">Sign Up For Free</Link>
            </div>

            <div className="input-div">
              <label htmlFor="email">Email Address</label>
              <input
                value={user.email}
                onChange={handleChange}
                type="email"
                name="email"
                id="email"
                required
              />
            </div>

            <div className="input-div">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                minLength={8}
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="register-btn"
              disabled={loading}
              style={{ cursor: loading ? "progress" : "pointer" }}
            >
              {loading ? "Logging In" : "Login"}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
