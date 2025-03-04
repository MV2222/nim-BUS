import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./AdminLogin.css";
import axios from "axios";
import { toast } from "react-toastify";

function AdminLogin() {
  const [adminName, setAdminName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();

    let flag = false;
    const adminData = await axios.get("http://localhost:2222/Admins");
    adminData.data.map((admin) => {
      if (admin.adminName === adminName && admin.password === password) {
        flag = true;

        navigate("/adminhomepage/admindashboard");
      }
    });

    flag
      ? toast.success("Login successful", { autoClose: 2000 })
      : toast.warning("Login failed. Invalid username or password.", {
          autoClose: 2000,
        });

    setAdminName("");
    setPassword("");
  };

  return (
    <div className="admin-login-form-page">
      <div className="overlay"></div>
      <div className="admin-login-form-container">
        <div className="admin-icon"></div>
        <div className="admin-login-form">
          <div className="admin-id">
            <label htmlFor="">Admin ID: </label>
            <input
              required
              value={adminName}
              className="input-field"
              type="text"
              placeholder="Enter Admin ID"
              onChange={(e) => {
                setAdminName(e.target.value);
              }}
            />
          </div>
          <div className="admin-pwd">
            <label htmlFor="">Password: </label>
            <input
              value={password}
              required
              className="input-field"
              type="password"
              placeholder="Enter Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <button onClick={loginHandler} className="btn">
          Login
        </button>
        <p className="admin-sign-up">
          Don't have account?
          <Link className="admin-sign-up-form-link" to="/adminsignup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;
