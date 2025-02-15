import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHandsHelping, FaBoxOpen, FaChartLine, FaExclamationTriangle } from "react-icons/fa";
import "./LandingPage.css";


const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <h1 className="title">Welcome to Disaster Relief Management System</h1>
      <p className="subheading">
        Connecting resources, volunteers, and real-time reports for effective disaster response.
      </p>

      <div className="options-container">
        <div className="option-box" onClick={() => navigate("/resource-request")}>
          <FaBoxOpen size={24} className="icon" /> Request Resources
        </div>
        <div className="option-box" onClick={() => navigate("/volunteer-checkin")}>
          <FaHandsHelping size={24} className="icon" /> Volunteer Check-In
        </div>
        <div className="option-box" onClick={() => window.location.href="https://public.tableau.com/views/DisasterManagementDashboard_17396455184750/Sheet1"}>
          <FaChartLine size={24} className="icon" /> Dashboard
        </div>
        <div className="option-box" onClick={() => window.location.href="https://public.tableau.com/views/DisasterDash/Sheet1"}>
          <FaExclamationTriangle size={24} className="icon" /> Live Disaster Report
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 Disaster Relief. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
