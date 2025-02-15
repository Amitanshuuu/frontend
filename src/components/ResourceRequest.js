import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ResourceRequest.css"; // Import the updated CSS
import ResourceMatcher from "./ResourceMatcher";

const ResourceRequest = () => {
  const [formData, setFormData] = useState({ type: "food", quantity: "", lat: "", lon: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="resource-request-container mt-5">
      <h2>Request Resources</h2>
      <form onSubmit={handleSubmit} className="p-3 border rounded">
        <div className="mb-3">
          <label className="form-label">Resource Type</label>
          <select name="type" className="form-select" value={formData.type} onChange={handleChange}>
            <option value="food">Food</option>
            <option value="water">Water</option>
            <option value="medicine">Medicine</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <input type="number" name="quantity" className="form-control" value={formData.quantity} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Your Latitude</label>
          <input type="text" name="lat" className="form-control" value={formData.lat} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Your Longitude</label>
          <input type="text" name="lon" className="form-control" value={formData.lon} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary custom-btn">Request Resource</button>
      </form>

      {submitted && <ResourceMatcher request={formData} />}
    </div>
  );
};

export default ResourceRequest;
