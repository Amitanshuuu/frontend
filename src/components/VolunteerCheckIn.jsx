import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./VolunteerCheckIn.css"; // Import custom styles

const VolunteerCheckIn = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    location: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Future integration: Send form data to your API endpoint here.
    alert("Volunteer checked in successfully!");
  };

  return (
    <div className="container mt-5 volunteer-container">
      <div className="card p-4 shadow-sm">
        <h2 className="text-center mb-4">Volunteer Check-In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control custom-input"
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
              className="form-control custom-input"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="number"
              name="age"
              className="form-control custom-input"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Location</label>
            <input
              type="text"
              name="location"
              className="form-control custom-input"
              placeholder="Enter your location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control custom-input"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 custom-btn">
            Check In
          </button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerCheckIn;
