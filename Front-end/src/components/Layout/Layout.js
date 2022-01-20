import React, { Component } from "react";
//import Aux from '../../hoc/ReactFrag';
import "./Layout.css";
import Navbar from "../UI/Navigation/Navbar/Navbar";
import { useLocation } from "react-router-dom";
const Layout = (props) => {
  let locationPage = useLocation();
  if (
    locationPage.pathname === "/login" ||
    locationPage.pathname === "/signup" ||
    locationPage.pathname === "/signup/otp" ||
    locationPage.pathname === "/forgotpasswordemail" ||
    locationPage.pathname === "/ResetPassword" ||
    locationPage.pathname === "/ForgotPasswordotp"
  ) {
    return (
      <div>
        <main style={{ background: "#00005c" }} className="Content">
          {props.children}
        </main>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <main style={{ background: "white" }} className="Content">
          {props.children}
        </main>
      </div>
    );
  }
};

export default Layout;
