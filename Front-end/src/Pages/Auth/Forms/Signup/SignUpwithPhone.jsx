import React, { useState, useRef, useEffect } from "react";
import "./signupwithotp.css";
import { Link, Redirect, useHistory } from "react-router-dom";
import bspLogo from "../../../../assets/Images/bsp_logo-white.png";
import { firebase, auth } from "../../../../config/firebase";

const SignUpwithPhone = () => {
  const [phone, setPhone] = useState("");
  const [otpBtn, setOtpBtn] = useState(false);
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");
  const [verified, setverified] = useState("");
  const [recaptcha, setrecaptcha] = useState(true);
  const [otpcode, setOtpCode] = useState();
  const histoy = useHistory();

  let handleOTP = () => {
    console.log("hit");
    if (phone === "" || phone.length < 10) return;
    setOtpBtn(false);
    let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
    auth
      .signInWithPhoneNumber(`+91${phone}`, verify)
      .then((result) => {
        setfinal(result);
        setshow(true);
        setrecaptcha(false);
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
        setshow(false);
        setverified("Phone Number Verified Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (phone === "" || phone.length > 10) {
      console.log("Empty Parameter");
      setOtpBtn(false);
    }
  }, [phone]);
  return (
    <div className="main__wrapper">
      <div className="main__logo">
        <img src={bspLogo} />
      </div>
      <div className="part_wrapper">
        <h2 className="part__name">बहुजन समाज पार्टी</h2>
        <div className="phone__wrapper">
          <label htmlFor="fullname">Full Name</label>
          <input
            // value={phone.toString()}
            className="input__name"
            type="text"
            name="fullname"
            required
            placeholder="Full Name"
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            value={phone.toString()}
            required
            onChange={(e) => {
              setPhone(e.target.value);
              setOtpBtn(true);
            }}
            className="input__phone"
            type="number"
            name="phone"
            placeholder="Phone Number"
          />
          <p style={{ color: "green", display: !show ? "block" : "none" }}>
            {verified}
          </p>
          <div
            style={{
              padding: "0.5rem 0",
              display: recaptcha ? "block" : "none",
            }}
            id="recaptcha-container"
          ></div>
          <button
            style={{ display: otpBtn ? "block" : "none" }}
            id="send-otp"
            className="otpBtn"
            onClick={handleOTP}
          >
            Send OTP
          </button>
          <div
            className="otp"
            style={{ marginTop: "5px", display: show ? "block" : "none" }}
          >
            <input
              value={otpcode}
              onChange={(e) => setOtpCode(e.target.value)}
              className="input__phone"
              type="number"
              required
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
          <label htmlFor="fullname">Email Address</label>
          <input
            // value={}
            className="input__email"
            type="email"
            name="fullname"
            placeholder="Email"
          />
          <button id="send-otp" className="submitBtn" onClick={handleOTP}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpwithPhone;
