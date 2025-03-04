import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import "./AddBus.css";

function AddBus() {
  const [busImage, setBusImage] = useState("");
  const [busName, setBusName] = useState("");
  const [busNumber, setBusNumber] = useState("");
  const [numberOfSeats, setNumberOfSeats] = useState();
  const [busFrom, setBusFrom] = useState("");
  const [busTo, setBusTo] = useState("");
  const [busArrival, setBusArrival] = useState("");
  const [busDeparture, setBusDeparture] = useState("");

  const busObj = {
    busImage: "",
    busName: "",
    busNumber: "",
    numberOfSeats: 0,
    busFrom: "",
    busTo: "",
    busArrival: "",
    busDeparture: "",
  };

  const addBus = () => {
    busObj.busImage = busImage;
    busObj.busName = busName;
    busObj.busNumber = busNumber;
    busObj.numberOfSeats = numberOfSeats;
    busObj.busFrom = busFrom;
    busObj.busTo = busTo;
    busObj.busArrival = busArrival;
    busObj.busDeparture = busDeparture;

    (busObj.busImage !== "" &&
      busObj.busName !== "" &&
      busObj.busNumber !== "" &&
      busObj.numberOfSeats !== "" &&
      busObj.busFrom !== "" &&
      busObj.busTo !== "" &&
      busObj.busArrival !== "" &&
      busObj.busDeparture !== "" &&
      axios
        .post(`http://localhost:2222/Added_Busses`, busObj)
        .then((res) => {
          toast.success(`New bus added`, { autoClose: 1500 });
        })
        .catch((err) => console.error(err))) ||
      toast.error(`Add all the bus details`, { autoClose: 1500 });

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
    <div className="add-bus-form-page">
      <div className="add-bus-form-container">
        <div className="add-bus-form">
          <div className="add-bus-data-field">
            <label htmlFor="busImage">Bus Image :</label>
            <input
              id="busImage"
              className="input-field bus-image-input-field"
              required
              type="text"
              placeholder="Enter The Bus Image URL"
              value={busImage}
              onChange={(e) => setBusImage(e.target.value)}
            />
          </div>

          <div className="add-bus-data-field">
            <label htmlFor="busName">Bus Name :</label>
            <input
              id="busName"
              className="input-field bus-name-input-field"
              required
              type="text"
              placeholder="Enter The Bus Name"
              value={busName}
              onChange={(e) => setBusName(e.target.value)}
            />
          </div>

          <div className="add-bus-data-field">
            <label htmlFor="busNumber">Bus Number :</label>
            <input
              id="busNumber"
              className="input-field bus-number-input-field"
              required
              type="text"
              placeholder="Enter The Bus Number"
              value={busNumber}
              onChange={(e) => setBusNumber(e.target.value)}
            />
          </div>

          <div className="add-bus-data-field">
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

          <div className="add-bus-data-field">
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

          <div className="add-bus-data-field">
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

          <div className="add-bus-data-field">
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
        <button onClick={addBus} className="btn btn-add-bus">
          add bus
        </button>
      </div>
    </div>
  );
}

export default AddBus;
