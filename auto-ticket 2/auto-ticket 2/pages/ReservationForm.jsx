import React, { useState } from "react";
import { createReservation } from "../../api/reservationApi";
import "../styles/LoginSignup.css";
import email_icon from "../assets/email.png";

export default function ReservationForm({ onSuccess }) {
  const [userId, setUserId] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [spotNumber, setSpotNumber] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("10:00");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const validate = () => {
    if (!userId.trim()) return "User ID is required";
    if (!spotNumber || isNaN(Number(spotNumber))) return "Valid spot number is required";
    if (!date) return "Date is required";
    if (!startTime || !endTime) return "Start and end times are required";
    if (!price || Number(price) <= 0) return "Price must be > 0";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (v) { setError(v); return; }
    setError(null);
    setLoading(true);

    const payload = {
      userId: userId.trim(),
      licensePlate: licensePlate.trim() || null,
      spotNumber: Number(spotNumber),
      date,
      startTime,
      endTime,
      price: Number(price)
    };

    try {
      const created = await createReservation(payload);
      setLoading(false);
      if (onSuccess) onSuccess(created);
      setLicensePlate(""); setSpotNumber(""); setPrice("");
    } catch (err) {
      setLoading(false);
      setError(err.message || "Unknown error");
    }
  };

  return (
    <div className="container" style={{maxWidth: '800px'}}>
      <div className="header">
        <div className="text">Create Reservation</div>
        <div className="underline"></div>
      </div>

      {error && <div className="text-red-600 mb-3" style={{textAlign: 'center'}}>{error}</div>}

      <form onSubmit={handleSubmit} className="inputs">
        <div className="input">
          <img src={email_icon} alt=""/>
          <input 
            value={userId} 
            onChange={e => setUserId(e.target.value)} 
            placeholder="User ID" 
          />
        </div>

        <div className="input">
          <img src={email_icon} alt=""/>
          <input 
            value={licensePlate} 
            onChange={e => setLicensePlate(e.target.value)} 
            placeholder="License Plate (optional)" 
          />
        </div>

        <div className="input">
          <img src={email_icon} alt=""/>
          <input 
            type="number" 
            value={spotNumber} 
            onChange={e => setSpotNumber(e.target.value)} 
            placeholder="Spot Number" 
          />
        </div>

        <div className="input">
          <img src={email_icon} alt=""/>
          <input 
            type="date" 
            value={date} 
            onChange={e => setDate(e.target.value)} 
            placeholder="Date" 
          />
        </div>

        <div className="input" style={{flexDirection: 'row', gap: '10px'}}>
          <div className="input" style={{width: '48%'}}>
            <img src={email_icon} alt=""/>
            <input 
              type="time" 
              value={startTime} 
              onChange={e => setStartTime(e.target.value)} 
              placeholder="Start Time" 
            />
          </div>
          <div className="input" style={{width: '48%'}}>
            <img src={email_icon} alt=""/>
            <input 
              type="time" 
              value={endTime} 
              onChange={e => setEndTime(e.target.value)} 
              placeholder="End Time" 
            />
          </div>
        </div>

        <div className="input">
          <img src={email_icon} alt=""/>
          <input 
            type="number" 
            step="0.01" 
            value={price} 
            onChange={e => setPrice(e.target.value)} 
            placeholder="Price (ZAR)" 
          />
        </div>

        <div className="submit-container">
          <button 
            type="submit" 
            disabled={loading} 
            className="submit"
            style={{border: 'none', background: 'none', color: 'inherit', fontSize: 'inherit'}}
          >
            {loading ? 'Saving...' : 'Create Reservation'}
          </button>
        </div>
      </form>
    </div>
  );
}