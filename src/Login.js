import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./css/Login.css";
import logo from "./asets/j_p.png"; 
import figure from "./asets/figure.png"; 

const Login = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="JobPortal Logo" />
          JobPortal
        </div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/jobs">Job Listings</a>
          <a href="/dashboard">Dashboard</a>
        </div>
        <button className="signup-button" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </nav>

      {/* Login Section */}
      <div className="login-container">
        <img src={figure} alt="3D Figure" />
        <div className="login-box">
          <h2>Log In</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Log in</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
