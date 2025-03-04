import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./AdminSignUp.css";
import axios from "axios";
import { toast } from "react-toastify";

function AdminSignUp() {
  const [adminName, setAdminName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const adminObj = {
    adminName: "",
    email: "",
    phone: "",
    password: "",
  };

  const addAdmin = () => {
    adminObj.adminName = adminName;
    adminObj.email = email;
    adminObj.phone = phone;
    adminObj.password = password;

    (adminObj.adminName !== "" &&
      adminObj.email !== "" &&
      adminObj.phone !== "" &&
      adminObj.password !== "" &&
      axios
        .post(`http://localhost:2222/Admins`, adminObj)
        .then((res) => {
          toast.success(`${adminObj.adminName}, you are an admin now`, {
            autoClose: 2000,
          });
        })
        .catch((err) => console.error(err))) ||
      toast.warning(`Please fill all the details`, { autoClose: 2000 });

    setAdminName("");
    setEmail("");
    setPhone("");
    setPassword("");
  };

  return (
    <div className="admin-sign-up-form-page">
      <h1 className="admin-sign-up-heading">Become an admin today</h1>
      <div className="admin-sign-up-form-container">
        <div className="admin-sign-up-form">
          <div className="sign-up-data-field">
            <label htmlFor="adminName">Full Name: </label>
            <input
              id="adminName"
              className="input-field"
              required
              type="text"
              placeholder="Enter Your Full Name"
              value={adminName}
              onChange={(e) => setAdminName(e.target.value)}
            />
          </div>
          <div className="sign-up-data-field">
            <label htmlFor="email">E-mail: </label>
            <input
              id="email"
              className="input-field"
              required
              type="text"
              placeholder="Enter Your E-Mail ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="sign-up-data-field">
            <label htmlFor="phone">Phone: </label>
            <input
              id="phone"
              className="input-field"
              required
              type="text"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="sign-up-data-field">
            <label htmlFor="password">Create Password: </label>
            <input
              id="password"
              className="input-field"
              required
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div id="" className="tc-checkbox">
          <input type="checkbox" id="tc" />
          <label for="tc">
            I have read all the{" "}
            <Link className="tc-link" to="/termsandconditions">
              terms and conditions
            </Link>
          </label>
        </div>
        <button onClick={addAdmin} className="admin-sign-up-btn">
          Sign-Up
        </button>
      </div>
    </div>
  );
}

export default AdminSignUp;
