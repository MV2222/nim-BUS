import React from "react";
import { useLocation } from "react-router-dom";

import "./ViewBus.css";

function ViewBus() {
  const location = useLocation();
  const busData = location.state;

  return (
    <div className="view-bus-container">
      <div className="view-bus-card">
        <div
          style={{
            height: "40rem",
            width: "45rem",
            backgroundImage: `url(${busData.busImage})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="view-bus-text">
          <p>
            Bus Name : <span> {busData.busName}</span>
          </p>
          <p>
            Bus Number : <span> {busData.busNumber}</span>
          </p>
          <p>
            Passengers Capacity : <span> {busData.numberOfSeats}</span>
          </p>
          <p>
            Bus Route: <span>{busData.busFrom}</span> To{" "}
            <span>{busData.busTo}</span>
          </p>
          <p>
            Bus Timings: Arrival-
            <span>{busData.busArrival}</span> Departure-
            <span>{busData.busDeparture}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ViewBus;
