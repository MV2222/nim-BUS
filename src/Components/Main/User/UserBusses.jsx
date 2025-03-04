import React, { useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { GiDirectionSigns } from "react-icons/gi";
import { toast } from "react-toastify";

import "./UserBusses.css";

// function reducer(seatsBooked, action) {
//   switch (action.type) {
//     case "increaseBookedSeats":
//       seatsBooked.value < busData[slideIndex].numberOfSeats
//         ? { value: seatsBooked.value + 1 }
//         : toast.warning("Maximum number of seats have been selected", {
//             toastId: "maxSeats",
//             autoClose: 1500,
//           });
//     case "decreaseBookedSeats":
//       seatsBooked.value !== 1
//         ? { value: seatsBooked.value - 1 }
//         : toast.error("At least 1 seat must be booked", {
//             toastId: "minSeats",
//             autoClose: 1500,
//           });
//     case "resetBookedSeats":
//       return { value: 1 };

//     default:
//       throw new Error(
//         "An unexpected error has occured.\nPlease refresh the page"
//       );
//   }
// }

function UserBusses() {
  // const [seatsBooked, dispatch] = useReducer(reducer, { value: 1 });

  const [busData, setBusData] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  let [showTicketBookingPortal, setShowTicketBookingPortal] = useState(false);
  const [seatsBooked, setSeatsBooked] = useState(1);

  const increaseSeatsBookingHandler = () =>
    seatsBooked < busData[slideIndex].numberOfSeats
      ? setSeatsBooked(seatsBooked + 1)
      : toast.warning("Maximum number of seats have been selected", {
          toastId: "maxSeats",
          autoClose: 1500,
        });

  const decreaseSeatsBookingHandler = () =>
    seatsBooked !== 1
      ? setSeatsBooked(seatsBooked - 1)
      : toast.error("At least 1 seat must be booked", {
          toastId: "minSeats",
          autoClose: 1500,
        });

  const showTicketBookingPortalHandler = () => {
    setShowTicketBookingPortal((showTicketBookingPortal = true));
  };

  const hideTicketBookingPortalHandler = () => {
    setSeatsBooked(1);
    // reducer(seatsBooked, { action: "resetBookedSeats" });
    setShowTicketBookingPortal((showTicketBookingPortal = false));
  };

  const prevSlideIndexHandler = () => {
    if (slideIndex !== 0) setSlideIndex(slideIndex - 1);
    if (slideIndex === 0) setSlideIndex(busData.length - 1);
  };

  const nextSlideIndexHandler = () => {
    if (slideIndex < busData.length - 1) setSlideIndex(slideIndex + 1);
    if (slideIndex === busData.length - 1) setSlideIndex(0);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:2222/Added_Busses`)
      .then((res) => {
        setBusData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const confirmTicketsHandler = () => {
    axios
      .post("http://localhost:2222/Booked_Tickets", {
        ...busData[slideIndex],
        seatsBooked: seatsBooked,
      })
      .then((res) =>
        toast.success(`${seatsBooked} seat(s) booked successfully`, {
          autoClose: 1500,
          toastId: "ticket-booked",
        })
      )
      .catch((err) => console.error(err));

    hideTicketBookingPortalHandler();
  };

  if (busData.length === 0) {
    return (
      <div className="loading-screen-container">
        <div className="loading-screen-animation">
          <div className="load load1"></div>
          <div className="load load2"></div>
          <div className="load load3"></div>
          <div className="load load4"></div>
          <div className="load load5"></div>
        </div>
        <div className="loading-screen-text">
          Fetching Details... Buckle Up...{" "}
        </div>
      </div>
    );
  } else {
    return !showTicketBookingPortal ? (
      <div className="user-busses-container">
        <div className="user-busses-carousel">
          <div className="user-busses-carousel-heading">
            <div>Select any bus...</div>
            <div>Book any ticket...</div>
          </div>
          <div
            className="user-busses-carousel-btn user-busses-carousel-btn-top"
            onClick={prevSlideIndexHandler}
          >
            <SlArrowUp />
          </div>

          <div className="user-busses-carousel-data">
            <div
              style={{
                height: "30vh",
                width: "25vw",
                backgroundImage: `url(${busData[slideIndex].busImage})`,
                borderRadius: "1.2rem",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className="bus-img-container"
            ></div>

            <div className="bus-data-container">
              <div>Bus Name: {busData[slideIndex].busName}</div>
              <div>Regd. Bus Number: {busData[slideIndex].busNumber}</div>
              <div>Number of Seats: {busData[slideIndex].numberOfSeats}</div>
              <div className="bus-data-route">
                <div>Route:</div>
                <div>{busData[slideIndex].busFrom}</div>
                <GiDirectionSigns style={{ fontSize: "3.6rem" }} />
                <div>{busData[slideIndex].busTo}</div>
              </div>
            </div>
            <button
              onClick={showTicketBookingPortalHandler}
              className="btn btn-book-ticket"
            >
              Book Ticket
            </button>
          </div>

          <div
            className="user-busses-carousel-btn user-busses-carousel-btn-bottom"
            onClick={nextSlideIndexHandler}
          >
            <SlArrowDown />
          </div>
        </div>
      </div>
    ) : (
      <div className="user-busses-container">
        <div className="user-busses-carousel">
          <div className="user-busses-carousel-data">
            <div
              className="bus-img-container"
              style={{
                height: "30vh",
                width: "25vw",
                backgroundImage: `url(${busData[slideIndex].busImage})`,
                borderRadius: "1.2rem",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>

            <div className="bus-data-container">
              <div>Bus Name: {busData[slideIndex].busName}</div>
              <div>Regd. Bus Number: {busData[slideIndex].busNumber}</div>
              <div>Number of Seats: {busData[slideIndex].numberOfSeats}</div>
              <div className="bus-data-route">
                <div>Route:</div>
                <div>{busData[slideIndex].busFrom}</div>
                <GiDirectionSigns style={{ fontSize: "3.6rem" }} />
                <div>{busData[slideIndex].busTo}</div>
              </div>
            </div>

            <div className="number-of-seats-booked">
              Seats Booked: {""}
              <div>{seatsBooked}</div>
              <div className="number-of-seats-booked-button-container">
                <div
                  onClick={decreaseSeatsBookingHandler}
                  // onClick={() => dispatch({ type: "decreaseBookedSeats" })}
                  className="number-of-seats-booked-button decrease-number-of-seats-booked"
                >
                  -
                </div>
                <div
                  onClick={increaseSeatsBookingHandler}
                  // onClick={() => dispatch({ type: "increaseBookedSeats" })}
                  className="number-of-seats-booked-button increase-number-of-seats-booked"
                >
                  +
                </div>
              </div>
            </div>

            <div className="book-tickets-btn-container">
              <button
                onClick={confirmTicketsHandler}
                className="btn btn-confirm-tickets"
              >
                Confirm
              </button>

              <button
                onClick={hideTicketBookingPortalHandler}
                className="btn btn-go-back"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserBusses;
