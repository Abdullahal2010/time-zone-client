import React, { useState } from "react";
import Header from "../components/HeaderComponent";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/register.css";
import { useUserContext } from "../context/UserContext";

const API_URL = "https://server-test-y07e.onrender.com";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState("");
  const { logInUser } = useUserContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.password !== repeatPassword) {
      setError("Password and Repeat password is not same");
      return setTimeout(() => setError(null), 3000);
    } else {
      setLoading(true);
      axios
        .post(API_URL + "/register", {
          email: user.email,
          password: user.password,
        })
        .then((res) => {
          const token = res.data.token;
          if (!token) {
            setError("There was a problem while regestering, Retry");
            setLoading(false);
            return setTimeout(() => setError(null), 3000);
          } else {
            localStorage.setItem("token", token);
            logInUser();
            setLoading(false);
            navigate("/profile");
          }
        })
        .catch((err) => {
          setError(err.response.data);
          console.log(err);
          setTimeout(() => setError(null), 3000);
          setLoading(false);
        });
    }
  };

  const handleChange = (e) => {
    setUser((prevUser) => {
      return { ...prevUser, [e.target.name]: e.target.value };
    });
  };

  return (
    <>
      <Header />
      <main className="home-main container">
        {error && (
          <div className="register-error-div">
            <span>{error}</span>
          </div>
        )}
        <div className="about-title">Signup</div>
        <div className="register-container">
          <div className="register-form-div">
            <form onSubmit={handleSubmit}>
              <div className="register-form-title">
                Create Your Free Account
              </div>
              <div className="register-form-subtitle">
                Have Accout? <Link to="/login">Login</Link>
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
                  value={user.password}
                  onChange={handleChange}
                  type="password"
                  name="password"
                  id="password"
                  required
                  minLength={8}
                />
              </div>
              <div className="input-div">
                <label htmlFor="rpassword">Repeat Password</label>
                <input
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  type="password"
                  name="rpassword"
                  id="rpassword"
                  minLength={8}
                  required
                />
              </div>
              <button
                disabled={loading}
                style={{ cursor: loading ? "progress" : "pointer" }}
                className="register-btn"
                type="submit"
              >
                {loading ? "Registering" : "Create It"}
              </button>
            </form>
          </div>
          <div className="register-try-div">
            <div className="register-try-title">Test App ?</div>
            <div className="register-try-subtitle">
              Guest accounts have limited features.But you can still enjoy your
              time zines
            </div>
            <Link to="/tryout" className="register-try-btn">
              Try It
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Register;
