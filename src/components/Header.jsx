import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import "./Header.css";

const Header = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    // Add your logout logic here, like clearing user data
    localStorage.removeItem("user"); // Remove user data from localStorage

    // Redirect to the home page or login page
    navigate("/"); // Use navigate instead of history.push
  };

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <ul className="nav-menu">
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>
          <Link to="/products" className="nav-link">
            <li>Products</li>
          </Link>
          <Link to="/cart" className="nav-link">
            <li>Cart</li>
          </Link>
        </ul>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
        <button
          type="button"
          className="logout-mobile-btn"
          onClick={handleLogout}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout icon"
            className="logout-icon"
          />
        </button>
      </div>
    </nav>
  );
};

export default Header;
