import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import "./EditBus.css";

function EditBus() {
  const location = useLocation();
  const busData = location.state;

  const [busImage, setBusImage] = useState(busData.busImage);
  const [busName, setBusName] = useState(busData.busName);
  const [busNumber, setBusNumber] = useState(busData.busNumber);
  const [numberOfSeats, setNumberOfSeats] = useState(busData.numberOfSeats);
  const [busFrom, setBusFrom] = useState(busData.busFrom);
  const [busTo, setBusTo] = useState(busData.busTo);
  const [busArrival, setBusArrival] = useState(busData.busArrival);
  const [busDeparture, setBusDeparture] = useState(busData.busDeparture);

  const editBus = (id) => {
    busData.busImage = busImage;
    busData.busName = busName;
    busData.busNumber = busNumber;
    busData.numberOfSeats = numberOfSeats;
    busData.busFrom = busFrom;
    busData.busTo = busTo;
    busData.busArrival = busArrival;
    busData.busDeparture = busDeparture;

    (busData.busImage !== "" &&
      busData.busName !== "" &&
      busData.busNumber !== "" &&
      busData.numberOfSeats !== "" &&
      busData.busFrom !== "" &&
      busData.busTo !== "" &&
      busData.busArrival !== "" &&
      busData.busDeparture !== "" &&
      axios
        .patch(`http://localhost:2222/Added_Busses/${id}`, busData)
        .then((res) => {
          toast.success(`Bus Edited`, { autoClose: 1500 });
        })
        .catch((err) => console.error(err))) ||
      toast.error(`Please add all bus details`, { autoClose: 1500 });

    setBusImage("");
    setBusName("");
    setBusNumber("");
    setNumberOfSeats("");
    setBusFrom("");
    setBusTo("");
    setBusArrival("");
    setBusDeparture("");
  };

  return (
    <div className="edit-bus-form-page">
      <div className="edit-bus-form-container">
        <div className="edit-bus-form">
          <div className="edit-bus-data-field">
            <label htmlFor="busImage">Bus Image :</label>
            <input
              id="busImage"
              className="input-field"
              required
              type="text"
              placeholder="Enter The Bus Image URL"
              value={busImage}
              onChange={(e) => setBusImage(e.target.value)}
            />
          </div>

          <div className="edit-bus-data-field">
            <label htmlFor="busName">Bus Name :</label>
            <input
              id="busName"
              className="input-field"
              required
              type="text"
              placeholder="Enter The Bus Name"
              value={busName}
              onChange={(e) => setBusName(e.target.value)}
            />
          </div>

          <div className="edit-bus-data-field">
            <label htmlFor="busNumber">Bus Number :</label>
            <input
              id="busNumber"
              className="input-field"
              required
              type="text"
              placeholder="Enter The Bus Number"
              value={busNumber}
              onChange={(e) => setBusNumber(e.target.value)}
            />
          </div>

          <div className="edit-bus-data-field">
            <label htmlFor="numberOfSeats">Number of Seats :</label>
            <input
              id="numberOfSeats"
              className="input-field"
              required
              type="number"
              placeholder="Enter The Number of Seats"
              value={numberOfSeats}
              onChange={(e) => setNumberOfSeats(e.target.value)}
            />
          </div>

          <div className="edit-bus-data-field">
            <label htmlFor="">Bus Route :</label>
            <input
              id="busFrom"
              className="input-field"
              required
              type="text"
              placeholder="From"
              value={busFrom}
              onChange={(e) => setBusFrom(e.target.value)}
            />
            <input
              id="busTo"
              className="input-field"
              required
              type="text"
              placeholder="To"
              value={busTo}
              onChange={(e) => setBusTo(e.target.value)}
            />
          </div>

          <div className="edit-bus-data-field">
            <label htmlFor="">Bus Arrival Time :</label>
            <input
              id="busArrival"
              className="input-field"
              required
              type="time"
              placeholder="Arrival"
              value={busArrival}
              onChange={(e) => setBusArrival(e.target.value)}
            />
          </div>

          <div className="edit-bus-data-field">
            <label htmlFor="">Bus Departure Time :</label>
            <input
              id="busDeparture"
              className="input-field"
              required
              type="time"
              placeholder="Departure"
              value={busDeparture}
              onChange={(e) => setBusDeparture(e.target.value)}
            />
          </div>
        </div>
        <button
          onClick={() => editBus(busData.id)}
          className="btn btn-edit-bus"
        >
          edit bus
        </button>
      </div>
    </div>
  );
}

export default EditBus;
