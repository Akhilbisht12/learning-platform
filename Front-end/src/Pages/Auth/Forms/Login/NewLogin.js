import React, { useState } from "react";
import Layout from "../../../../components/Layout/Layout";
import logoBhim from "../../../../assets/Images/bhim.png";
import authService from "../../../../ApiServices/auth.service";
import { Link, useHistory } from "react-router-dom";
import Alert from "../alert";

const NewLogin = () => {
  const history = useHistory();
  const [loginInfo, setloginInfo] = useState({
    identity: "",
    password: "",
  });
  const [Loading, setLoading] = useState(false);
  const [error, seterror] = useState({
    alertMsg: "",
    alertType: "",
    value: false,
  });
  const submitLogin = (e) => {
    setLoading(true);
    e.preventDefault();
    const regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    const res = regex.test(loginInfo.identity.toLowerCase());
    console.log(res);
    const formData = {};
    for (const [key, value] of Object.entries(loginInfo)) {
      formData[key] = value;
    }
    formData.type = res ? "email" : "phone";
    res
      ? localStorage.setItem("email", loginInfo.identity)
      : localStorage.setItem("phone", loginInfo.identity);
    authService
      .login(formData)
      .then((response) => {
        console.log("Response:", response);
        setLoading(false);
        // AlertError("Successfully Logged in", "success");
        seterror({
          value: true,
          alertType: "success",
          alertMsg: "logged in successfully",
        });
        localStorage.setItem("user", response.data.access_token);
        localStorage.setItem("ref_token", response.data.referesh_token);
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("userName", response.data.username);
        history.push("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.response);
        seterror({
          value: true,
          alertType: "danger",
          alertMsg: error.response.data.message,
        });
        if (error.response.data.redirect) {
          history.push("/signup/otp");
        }
      });
  };

  return (
    <Layout>
      <Alert
        value={error.value}
        alertMsg={error.alertMsg}
        alertType={error.alertType}
      />
      <div
        className="d-flex flex-column align-items-center"
        style={{ fontFamily: "Gilroy" }}
      >
        <img className="w-25" src={logoBhim} />
        <h3 className="text-white my-2"> BHIM BATA</h3>
        <form
          onSubmit={submitLogin}
          className="w-100 d-flex flex-column justify-content-center align-items-center my-5"
        >
          <input
            placeholder="Email or Phone"
            required
            value={loginInfo.identity}
            onChange={(e) =>
              setloginInfo({
                ...loginInfo,
                identity: e.target.value.toLowerCase(),
              })
            }
            style={inputStyle}
          />
          <input
            placeholder="Password"
            type="password"
            style={inputStyle}
            required
            value={loginInfo.password}
            onChange={(e) =>
              setloginInfo({ ...loginInfo, password: e.target.value })
            }
          />
          <Link className="my-2 " to="/forgotpasswordemail">
            <p className="forgot-password flex-end"> Forgot Password?</p>
          </Link>
          <input
            style={styles}
            disabled={Loading}
            type="submit"
            value="Login"
          />
        </form>
        <p style={{ color: "white" }}>
          New User?
          <Link className="my-4" to="/signup">
            <span style={{ fontWeight: "500", color: "rgb(141 103 255)" }}>
              {" "}
              Sign up
            </span>
          </Link>
        </p>
      </div>
    </Layout>
  );
};

const styles = {
  width: "326px",
  textTransform: "uppercase",
  padding: "1rem",
  borderRadius: "7px",
  marginTop: "15px",
  backgroundColor: "white",
  color: "#00005c",
  font: "normal normal normal 16px/19px Gilroy",
  border: "none",
};
const inputStyle = {
  outline: "none",
  display: "block",
  width: "326px",
  border: "solid 2px white",
  background: "#0005ac 0% 0% no-repeat padding-box",
  font: "normal normal normal 15px/12px Gilroy",
  letterSpacing: "0px",
  color: "#707070",
  borderRadius: "5px",
  padding: "1rem",
  marginBottom: "1rem",
  boxSizing: "border-box",
};

export default NewLogin;
