import React from "react";
import { Link } from "react-router-dom";

import "./LandingPage.css";
import { VscAccount } from "react-icons/vsc";
import Intro from "../Intro/Intro";

function LandingPage() {
  return (
    <div className="landing-page-container-parent">
      <Intro />
      <div className="landing-page-container">
        <Link className="login-link-container" to="/adminlogin">
          <VscAccount className="icon" />
          <p className="linktext">Admin Login</p>
        </Link>
        <Link className="login-link-container" to="/userlogin">
          <VscAccount className="icon" />
          <p className="linktext">User Login</p>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
