import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";

import "./UserLogin.css";
import axios from "axios";
import { toast } from "react-toastify";

function UserLogin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();

    let flag = false;
    const userData = await axios.get("http://localhost:2222/Users");
    userData.data.map((user) => {
      if (user.userName === userName && user.password === password) {
        flag = true;

        navigate("/userhomepage/userbusses");
      }
    });

    flag
      ? toast.success("Login successful", { autoClose: 2000 })
      : toast.warning("Login failed. Invalid username or password.", {
          autoClose: 2000,
        });

    setUserName("");
    setPassword("");
  };

  return (
    <div className="user-login-form-page">
      <div className="overlay"></div>
      <div className="user-login-form-container">
        <div className="user-icon"></div>
        <div className="user-login-form">
          <div className="user-id">
            <label htmlFor="">User ID: </label>
            <input
              required
              value={userName}
              className="input-field"
              type="text"
              placeholder="Enter User ID"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="user-pwd">
            <label htmlFor="">Password: </label>
            <input
              required
              value={password}
              className="input-field"
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button onClick={loginHandler} className="btn btn-login">
          Login
        </button>
        <p className="user-sign-up">
          Don't have account?
          <Link className="user-sign-up-form-link" to="/usersignup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default UserLogin;
