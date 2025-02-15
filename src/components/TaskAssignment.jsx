import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./VolunteerCheckIn.css"; // Import CSS for custom styling

const VolunteerCheckIn = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", location: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/checkin", formData);
      if (response.data.success) {
        setMessage("✅ Check-in successful!");
        setFormData({ name: "", phone: "", location: "" }); // Reset form
      } else {
        setMessage("❌ Error checking in. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("⚠️ Server error. Please try later.");
    }
  };

  return (
    <div className="container volunteer-checkin">
      <h2 className="text-center">Volunteer Check-In</h2>
      {message && <p className="alert alert-info">{message}</p>}
      <form onSubmit={handleSubmit} className="p-4 shadow-lg rounded bg-white">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="tel"
            name="phone"
            className="form-control"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            name="location"
            className="form-control"
            placeholder="Enter your location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Check In
        </button>
      </form>
    </div>
  );
};

export default VolunteerCheckIn;
