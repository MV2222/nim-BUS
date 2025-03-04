// Built-in Components
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

// Styles
import "./App.css";

// Components
import LandingPage from "./Components/Login/LandingPage";
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminSignUp from "./Components/Admin/AdminSignUp";
import UserLogin from "./Components/User/UserLogin";
import UserSignUp from "./Components/User/UserSignUp";
import TermsAndConditions from "./Components/T&C/TermsAndConditions";
import AdminHomePage from "./Components/Main/Admin/AdminHomePage";
import UserHomePage from "./Components/Main/User/UserHomePage";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/adminsignup" element={<AdminSignUp />} />
          <Route path="/usersignup" element={<UserSignUp />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/adminhomepage/*" element={<AdminHomePage />} />
          <Route path="/userhomepage/*" element={<UserHomePage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer className={"toast-message"} />
    </>
  );
}

export default App;
