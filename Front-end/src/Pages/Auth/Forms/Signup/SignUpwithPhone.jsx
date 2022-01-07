import React from "react";
import "./signupwithotp.css";
import bspLogo from "../../../../assets/Images/bsp_logo.png";
import SumbitButton from "../../../../components/UI/Buttons/SumbitButton";

const SignUpwithPhone = () => {
  return (
    <div className="main__wrapper">
      <div className="main__logo">
        <img src={bspLogo} />
      </div>
      <div className="part_wrapper">
        <h2 className="part__name">बहुजन समाज पार्टी</h2>
        <p style={{ color: "white" }}>
          Please use your phone number to Sign Up
        </p>

        <input
          className="input__phone"
          type="number"
          name="phone"
          placeholder="Phone Number"
        />
        <button className="otpBtn">Send OTP</button>
      </div>
    </div>
  );
};

export default SignUpwithPhone;
