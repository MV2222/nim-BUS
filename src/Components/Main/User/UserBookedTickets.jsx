import React, { useEffect, useState } from "react";
import axios from "axios";

import "./UserBookedTickets.css";
import { toast } from "react-toastify";

function UserBookedTickets() {
  let [ticketsData, setTicketsData] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const ticketsFetcher = async () => {
      try {
        const res = await axios.get("http://localhost:2222/Booked_Tickets");
        setTimeout(() => {
          setTicketsData(res.data);
          setIsLoading(false);
        }, 1500);
      } catch (err) {
        console.error(err);
      }
    };
    ticketsFetcher();
  }, []);

  const cancelTicketHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:2222/Booked_Tickets/${id}`);
      toast.error("Ticket cancelled", {
        autoClose: 1500,
        toastId: "cancel-ticket",
      });

      const res = await axios.get("http://localhost:2222/Booked_Tickets");
      setTicketsData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (isLoading) {
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
          Fetching Details... Buckle Up...
        </div>
      </div>
    );
  } else {
    return ticketsData.length === 0 ? (
      <>
        <div className="no-user-booked-tickets-container">
          <h1 className="no-user-booked-tickets-heading">No tickets found</h1>
        </div>
      </>
    ) : (
      <div className="user-booked-tickets-card-container">
        {ticketsData.map((ticket) => {
          return (
            <div className="user-booked-tickets-card-frame" key={ticket.id}>
              <div className="user-booked-tickets-card-details">
                <div
                  style={{
                    height: "15vh",
                    width: "10vw",
                    backgroundImage: `url(${ticket.busImage})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                  className="user-booked-tickets-card-img"
                ></div>

                <div className="user-booked-tickets-card-data">
                  <div>Bus Name: {ticket.busName}</div>
                  <div>Bus Number: {ticket.busNumber}</div>
                  <div>
                    Bus Route: {ticket.busFrom} to {ticket.busTo}
                  </div>
                </div>

                <div className="tickets-booked">
                  <div className="tickets-booked-number">
                    {ticket.seatsBooked}
                  </div>
                  {`Person${ticket.seatsBooked > 1 ? "s" : ""}`}
                </div>
              </div>

              <button
                onClick={() => cancelTicketHandler(ticket.id)}
                className="btn cancel-ticket"
              >
                Cancel Ticket
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default UserBookedTickets;
