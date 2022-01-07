import React, { useState, useRef } from "react";
import "./signupwithotp.css";
import { Link, Redirect, useHistory } from "react-router-dom";
import bspLogo from "../../../../assets/Images/bsp_logo-white.png";
import { firebase, auth } from "../../../../config/firebase";

const SignUpwithPhone = () => {
  const [phone, setPhone] = useState("");
  const [button, setButton] = useState(false);
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");
  const [otpcode, setOtpCode] = useState();
  const histoy = useHistory();
  let handleOTP = () => {
    console.log("hit");
    if (phone === "" || phone.length < 10) return;

    let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
    auth
      .signInWithPhoneNumber(`+91${phone}`, verify)
      .then((result) => {
        setfinal(result);
        setshow(true);
      })
      .catch((err) => {
        alert(err);
        window.location.reload();
      });
  };
  // Validate OTP
  const ValidateOtp = () => {
    if (otpcode === null || final === null) return;
    final
      .confirm(otpcode)
      .then((result) => {
        // success
        histoy.push("/home/all");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="main__wrapper">
      <div className="main__logo">
        <img src={bspLogo} />
      </div>
      <div className="part_wrapper">
        <h2 className="part__name">बहुजन समाज पार्टी</h2>
        <div
          className="phone__wrapper"
          style={{ display: !show ? "block" : "none" }}
        >
          <p style={{ color: "white" }}>
            Please use your phone number to Sign Up
          </p>

          <input
            value={phone.toString()}
            onChange={(e) => setPhone(e.target.value)}
            maxLength={10}
            className="input__phone"
            type="number"
            name="phone"
            placeholder="Phone Number"
          />
          <div style={{ padding: "1rem 0" }} id="recaptcha-container"></div>
          <button
            disabled={button}
            id="send-otp"
            className="otpBtn"
            onClick={handleOTP}
          >
            Send OTP
          </button>
        </div>
        <div className="otp" style={{ display: show ? "block" : "none" }}>
          <p style={{ color: "white", textAlign: "center" }}>
            We have send a Verification Code to your mobile
          </p>
          <p style={{ color: "white", textAlign: "center" }}>
            Please Enter Verification Code
          </p>
          <input
            value={otpcode}
            onChange={(e) => setOtpCode(e.target.value)}
            className="input__phone"
            type="number"
            name="phone"
            placeholder="Verification Code"
          />
          <button className="otpBtn" onClick={ValidateOtp}>
            Verify
          </button>
          <Link to="#">
            <p>Did'nt Recieved OTP</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpwithPhone;
