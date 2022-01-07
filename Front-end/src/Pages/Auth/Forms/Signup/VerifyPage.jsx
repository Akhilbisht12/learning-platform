import React from "react";
import "./signupwithotp.css";
import bspLogo from "../../../../assets/Images/bsp_logo.png";
import { useState } from "react";

const VerifyPage = () => {
  const [otpcode, setOtpCode] = useState();
  return (
    <div className="main__wrapper">
      <div className="main__logo">
        <img src={bspLogo} />
      </div>
      <div className="part_wrapper">
        <h2 className="part__name">बहुजन समाज पार्टी</h2>
      </div>
    </div>
  );
};

export default VerifyPage;
