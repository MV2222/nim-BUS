import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./UserSignUp.css";
import { toast } from "react-toastify";

function UserSignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const userObj = {
    userName: "",
    email: "",
    phone: "",
    password: "",
  };

  const addUser = () => {
    userObj.userName = userName;
    userObj.email = email;
    userObj.phone = phone;
    userObj.password = password;

    (userObj.userName !== "" &&
      userObj.email !== "" &&
      userObj.phone !== "" &&
      userObj.password !== "" &&
      axios
        .post(`http://localhost:2222/Users`, userObj)
        .then((res) => {
          toast.success(`Welcome ${userObj.userName}`, { autoClose: 2000 });
        })
        .catch((err) => console.error(err))) ||
      toast.warning(`Please fill all the details`, { autoClose: 2000 });

    setUserName("");
    setEmail("");
    setPhone("");
    setPassword("");
  };

  return (
    <div className="user-sign-up-form-page">
      <h1 className="user-sign-up-heading">A new adventure awaits...</h1>
      <div className="user-sign-up-form-container">
        <div className="user-sign-up-form">
          <div className="sign-up-data-field">
            <label htmlFor="userName">Full Name: </label>
            <input
              id="userName"
              className="input-field "
              required
              type="text"
              placeholder="Enter Your Full Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
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
              minlength="8"
              maxlength="20"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="tc-checkbox">
          <input type="checkbox" id="tc" />
          <label for="tc">
            I have read all the{" "}
            <Link className="tc-link" to="/termsandconditions">
              terms and conditions
            </Link>
          </label>
        </div>
        <button onClick={addUser} className="user-sign-up-btn">
          Sign-Up
        </button>
      </div>
    </div>
  );
}

export default UserSignUp;
