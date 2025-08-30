import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchReservationById } from "../../api/reservationApi";
import "../styles/LoginSignup.css"


export default function ReservationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [reservation, setReservation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchReservationById(id)
      .then(data => {
        if (!mounted) return;
        setReservation(data);
        setError(null);
      })
      .catch(err => {
        if (!mounted) return;
        setError(err.message || "Failed to load reservation");
        setReservation(null);
      })
      .finally(() => mounted && setLoading(false));

    return () => { mounted = false; };
  }, [id]);

  if (loading) return <div className="container"><div className="text">Loading reservation...</div></div>;
  if (error) return (
    <div className="container">
      <div className="header">
        <div className="text">Error</div>
        <div className="underline"></div>
      </div>
      <div className="text-red-600 mb-3">{error}</div>
      <div className="submit-container">
        <div className="submit" onClick={() => navigate(-1)}>Go back</div>
      </div>
    </div>
  );

  if (!reservation) return (
    <div className="container">
      <div className="header">
        <div className="text">Not Found</div>
        <div className="underline"></div>
      </div>
      <div>No reservation found.</div>
      <div className="submit-container">
        <div className="submit" onClick={() => navigate(-1)}>Go back</div>
      </div>
    </div>
  );

  const {
    reservationId,
    user,
    vehicle,
    parkingSpot,
    date,
    startTime,
    endTime,
    price
  } = reservation;

  return (
    <div className="container" style={{maxWidth: '800px'}}>
      <div className="header">
        <div className="text">Reservation Details</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <span>ID:</span>
          <div>{reservationId}</div>
        </div>
        <div className="input">
          <span>User ID:</span>
          <div>{user?.userID || "—"}</div>
        </div>
        <div className="input">
          <span>User name:</span>
          <div>{user?.name || "—"}</div>
        </div>
        <div className="input">
          <span>Vehicle plate:</span>
          <div>{vehicle?.licensePlate || "—"}</div>
        </div>
        <div className="input">
          <span>Spot number:</span>
          <div>{parkingSpot?.spotNumber ?? "—"}</div>
        </div>
        <div className="input">
          <span>Date:</span>
          <div>{date}</div>
        </div>
        <div className="input">
          <span>Time:</span>
          <div>{startTime} — {endTime}</div>
        </div>
        <div className="input">
          <span>Price:</span>
          <div>R{price}</div>
        </div>
      </div>

      <div className="submit-container">
        <div className="submit" onClick={() => navigate(-1)}>Back</div>
      </div>
    </div>
  );
}