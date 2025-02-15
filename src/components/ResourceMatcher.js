import React, { useState } from "react";

// Sample inventory data (this would come from a database in real-world apps)
const inventory = [
  { id: 1, type: "food", quantity: 50, location: { lat: 12.9716, lon: 77.5946 } }, // Example coordinates
  { id: 2, type: "water", quantity: 30, location: { lat: 13.0827, lon: 80.2707 } },
  { id: 3, type: "medicine", quantity: 20, location: { lat: 28.7041, lon: 77.1025 } },
];

// Function to calculate distance using Haversine formula
const calculateDistance = (loc1, loc2) => {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const R = 6371; // Earth radius in km

  const dLat = toRad(loc2.lat - loc1.lat);
  const dLon = toRad(loc2.lon - loc1.lon);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(loc1.lat)) * Math.cos(toRad(loc2.lat)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};

// Function to find best match from inventory
const findBestMatch = (type, quantity, userLocation) => {
  let bestMatch = null;
  let minDistance = Infinity;

  inventory.forEach((item) => {
    if (item.type === type && item.quantity >= quantity) {
      const distance = calculateDistance(userLocation, item.location);
      if (distance < minDistance) {
        minDistance = distance;
        bestMatch = item;
      }
    }
  });

  return bestMatch;
};

const ResourceMatcher = ({ request }) => {
  const [match, setMatch] = useState(null);

  const handleMatch = () => {
    const bestMatch = findBestMatch(request.type, request.quantity, {
      lat: parseFloat(request.lat),
      lon: parseFloat(request.lon),
    });
    setMatch(bestMatch);
  };

  return (
    <div className="container mt-4">
      <button className="btn btn-success" onClick={handleMatch}>
        Find Best Match
      </button>
      {match ? (
        <div className="alert alert-info mt-3">
          <h4>Matching Resource Found</h4>
          <p>Type: {match.type}</p>
          <p>Quantity: {match.quantity}</p>
          <p>Location: Lat {match.location.lat}, Lon {match.location.lon}</p>
        </div>
      ) : (
        <p className="text-danger mt-3">No matching resource found.</p>
      )}
    </div>
  );
};

export default ResourceMatcher;
export { findBestMatch };
