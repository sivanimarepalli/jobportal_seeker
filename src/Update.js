import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Update.css";
import logo from "./asets/j_p.png";
import figure from "./asets/fig.png";

const UpdateProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="JobPortal Logo" />
          JobPortal
        </div>
        <button className="back-button" onClick={() => navigate(-1)}>
          Back
        </button>
      </nav>

      {/* Update Profile Section */}
      <div className="update-container">
        <img src={figure} alt="3D Figure" className="figure-img" />
        <div className="update-box">
          <h2 className="update-title">Details</h2>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Phone Number" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="Select Role" />
          <input type="text" placeholder="Skills" />
          <div className="upload-container">
            <input type="file" id="resume-upload" className="upload-input" accept=".pdf,.doc,.docx" />
            <label htmlFor="resume-upload" className="upload-btn">Upload Resume</label>
          </div>
          <button className="edit-btn">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
