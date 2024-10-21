import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({ ...prevState, [name]: value }));
    setError(""); // Clear error when user types
  };

  const submitForm = (event) => {
    event.preventDefault();

    const { username, password } = credentials;

    // Basic validation logic
    if (username.trim() === "" || password.trim() === "") {
      setError("Username and password are required.");
      return;
    }

    // For demo purposes, let's assume the login is successful:
    if (username === "admin" && password === "admin") {
      navigate("/");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="login-form-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-desktop-image"
          alt="website logo"
        />
      </div>
      <div className="form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form onSubmit={submitForm}>
          {error && <p className="error-message">{error}</p>}
          <div className="input-container">
            <label className="input-label" htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="username-input-field"
              value={credentials.username}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="password-input-field"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
