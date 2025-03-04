import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router";

import UserBusses from "./UserBusses";

import "./UserHomePage.css";
import UserBookedTickets from "./UserBookedTickets";

export const ActiveTabContext = createContext();

function UserHomePage() {
  const [activeTab, setActiveTab] = useState("Busses");

  return (
    <>
      <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
        <div className="user-home-page-container">
          <div className="user-sidebar-container">
            <div className="user-sidebar-link">
              <div className="user-logo-container"></div>
              <Link to="/userhomepage/userbusses">
                <button
                  onClick={() => setActiveTab("Busses")}
                  className={`btn ${
                    activeTab === "Busses" ? "user-active-btn" : ""
                  }`}
                >
                  Busses
                </button>
              </Link>
              <Link to="/userhomepage/userbookedtickets">
                <button
                  onClick={() => setActiveTab("Booked Tickets")}
                  className={`btn ${
                    activeTab === "Booked Tickets" ? "user-active-btn" : ""
                  }`}
                >
                  Booked Tickets
                </button>
              </Link>
            </div>

            <Link to="/userlogin">
              <button className="btn btn-logout-user">Log out</button>
            </Link>
          </div>
          <div className="user-sidebar-content">
            <Routes>
              <Route path="/userbusses" element={<UserBusses />} />
              <Route
                path="/userbookedtickets"
                element={<UserBookedTickets />}
              />
            </Routes>
          </div>
        </div>
      </ActiveTabContext.Provider>
    </>
  );
}

export default UserHomePage;
