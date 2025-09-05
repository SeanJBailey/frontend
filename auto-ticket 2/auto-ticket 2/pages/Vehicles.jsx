import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// Uncomment if you have a CSS file
import '../styles/Vehicles.css'; 

export default function Vehicles() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    model: "",
    vin: "",
    licensePlate: "",
    entryTime: "",
    exitTime: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formatDateTime = (dtString) => {
  if (!dtString) return null;
    return dtString.slice(0, 16);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.fullName || !formData.phone || !formData.model) {
      alert("Please fill in all required fields!");
      return;
    }

    // Prepare data for backend
    const vehicleData = {
      vehicleId: uuidv4(), // must exist
      licensePlate: formData.licensePlate || "",
      vehicleMake: formData.model || "",
      vehicleModel: formData.model || "",
      vehicleColour: "", // optional
      vehicleVIN: formData.vin || "",
      users: [], // empty for now
      entryTime: formatDateTime(formData.entryTime),
      exitTime: formatDateTime(formData.exitTime)
    };

    try {
      const response = await fetch("http://localhost:8080/api/vehicle/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(vehicleData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Vehicle submitted successfully:", data);

      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        model: "",
        vin: "",
        licensePlate: "",
        entryTime: "",
        exitTime: ""
      });

      alert("Vehicle submitted successfully!");

    } catch (error) {
      console.error("Error submitting vehicle:", error);
      alert("Error submitting vehicle. Check console for details.");
    }
  };

  return (
    <div className="vehicle-container">
      <form className="vehicle-form" onSubmit={handleSubmit}>
        <h1 className="vehicle-title">Vehicle Entry</h1>

        <div className="vehicle-grid">
          <div className="vehicle-field">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Jane Doe"
            />
          </div>

          <div className="vehicle-field">
            <label>VIN</label>
            <input
              type="text"
              name="vin"
              value={formData.vin}
              onChange={handleChange}
              placeholder="1HGCM82633A004352"
            />
          </div>

          <div className="vehicle-field">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="0123456789"
            />
          </div>

          <div className="vehicle-field">
            <label>License Plate</label>
            <input
              type="text"
              name="licensePlate"
              value={formData.licensePlate}
              onChange={handleChange}
              placeholder="CA 456 782"
            />
          </div>

          <div className="vehicle-field">
            <label>Model</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              placeholder="Toyota Corolla Quest 1.6"
            />
          </div>

          <div className="vehicle-field">
            <label>Entry Time</label>
            <input
              type="datetime-local"
              name="entryTime"
              value={formData.entryTime}
              onChange={handleChange}
            />
          </div>

          <div className="vehicle-field">
            <label>Exit Time</label>
            <input
              type="datetime-local"
              name="exitTime"
              value={formData.exitTime}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="vehicle-button">CONFIRM</button>
      </form>
    </div>
  );
}
