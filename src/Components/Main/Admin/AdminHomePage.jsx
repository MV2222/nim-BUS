import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router";

import AdminDashboard from "./AdminDashboard";
import AddBus from "./AddBus";
import EditBus from "./EditBus";
import ViewBus from "./ViewBus";

import "./AdminHomePage.css";

function AdminHomePage() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="admin-home-page-container">
      <div className="admin-sidebar-container">
        <div className="admin-sidebar-link">
          <div className="admin-logo-container"></div>
          <Link to="/adminhomepage/admindashboard">
            <button
              onClick={() => {
                setActiveTab("Dashboard");
              }}
              className={`btn ${
                activeTab === "Dashboard" ? "admin-active-btn" : ""
              }`}
            >
              Dashboard
            </button>
          </Link>
          <Link to="/adminhomepage/addbus">
            <button
              onClick={() => setActiveTab("Add Bus")}
              className={`btn ${
                activeTab === "Add Bus" ? "admin-active-btn" : ""
              }`}
            >
              Add Bus
            </button>
          </Link>
        </div>

        <Link to="/adminlogin">
          <button className="btn btn-logout-admin">Logout</button>
        </Link>
      </div>
      <div className="admin-sidebar-content">
        <Routes>
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/addbus" element={<AddBus />} />
          <Route path="/viewbus/:id" element={<ViewBus />} />
          <Route path="/editbus/:id" element={<EditBus />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminHomePage;
