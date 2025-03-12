import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./css/Signup.css";
import logo from "./asets/j_p.png"; 
import figure from "./asets/fig.png"; 

const Signup = () => {
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
        <button className="signup-button" onClick={() => navigate("/")}>
          Login
        </button>
      </nav>

      {/* Sign-Up Section */}
      <div className="signup-container">
        <img src={figure} alt="3D Figure" />
        <div className="signup-box">
          <h2>Job Seeker Sign In</h2>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Phone Number" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="Select Role" />
          <input type="text" placeholder="Skills" />
          <div className="upload-container">
  <input 
    type="file" 
    id="resume-upload" 
    className="upload-input" 
    accept=".pdf,.doc,.docx"
    onChange={(e) => console.log(e.target.files[0])} 
  />
  <label htmlFor="resume-upload" className="upload-btn">Upload Resume</label>
</div>

          <button className="signup-btn">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
