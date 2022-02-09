import React, { useState } from "react";
import Layout from "../../../../components/Layout/Layout";
import logoBhim from "../../../../assets/Images/bhim.png";
import { Link, useHistory } from "react-router-dom";
import authService from "../../../../ApiServices/auth.service";
import Alert from "../alert";
import { districts } from "./districts";

const NewSignup = () => {
  const history = useHistory();
  const [Loading, setLoading] = useState(false);
  const [districtRef, setdistrictRef] = useState(0);
  const [loginInfo, setloginInfo] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpass: "",
    profile: "",
    age: "",
    gender: "",
    residence: "",
    community: "",
    education: "",
    occupation: "",
    district: "",
    mandal: "",
    village: "",
    pconst: "",
    aconst: "",
  });
  const [step, setstep] = useState(1);
  const [error, seterror] = useState({
    alertMsg: "",
    alertType: "",
    value: false,
  });
  const handleformone = (e) => {
    e.preventDefault();
    if (loginInfo.password !== loginInfo.confirmpass) {
      alert("passwords does not match");
    } else {
      setstep(step + 1);
    }
  };

  const handleformback = () => {
    setstep(step - 1);
  };

  const submitform = (e) => {
    setLoading(true);
    e.preventDefault();
    let formData = new FormData();
    for (const [key, value] of Object.entries(loginInfo)) {
      formData.append(key, value);
      console.log(key, value);
    }
    authService
      .register(formData)
      .then((response) => {
        setLoading(false);
        console.log("Response:", response);
        localStorage.setItem("email", loginInfo.email);
        localStorage.setItem("phone", loginInfo.phone);
        localStorage.setItem("userName", loginInfo.name);
        localStorage.setItem("profile", response.data.profile);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("valid", true);
        localStorage.setItem("type", "success");
        localStorage.setItem("msg", response.data.message);
        history.push("/signup/otp");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.response);
        seterror({
          value: true,
          alertType: "danger",
          alertMsg: error.response.data.message[0].msg,
        });
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
        <p className="text-white my-2"> BHIM BATA APP USER REGISTRATION</p>
        {/* step 1 form */}
        <form
          onSubmit={handleformone}
          className={`w-100 ${
            step === 1 ? "d-flex" : "d-none"
          } flex-column justify-content-center align-items-center`}
        >
          <input
            style={inputStyle}
            placeholder="Full Name"
            value={loginInfo.name}
            required
            onChange={(e) => {
              setloginInfo({ ...loginInfo, name: e.target.value });
            }}
          />
          <input
            style={inputStyle}
            placeholder="Email"
            type="email"
            required
            value={loginInfo.email}
            onChange={(e) =>
              setloginInfo({ ...loginInfo, email: e.target.value })
            }
          />
          <input
            style={inputStyle}
            placeholder="Phone"
            type="number"
            required
            value={loginInfo.phone}
            onChange={(e) =>
              setloginInfo({ ...loginInfo, phone: e.target.value })
            }
          />
          <input
            placeholder="Password"
            type="password"
            autoComplete="new-password"
            required
            minLength={5}
            value={loginInfo.password}
            onChange={(e) =>
              setloginInfo({ ...loginInfo, password: e.target.value })
            }
            style={inputStyle}
          />
          <input
            placeholder="Confirm Password"
            type="password"
            required
            value={loginInfo.confirmpass}
            onChange={(e) =>
              setloginInfo({ ...loginInfo, confirmpass: e.target.value })
            }
            style={inputStyle}
          />
          <div style={inputStyle}>
            <label htmlFor="picture" className="m-0">
              Choose Profile Picture
            </label>
            <input
              placeholder="Upload Picture"
              required
              id="picture"
              style={{ visibility: "hidden" }}
              type="file"
              onChange={(e) =>
                setloginInfo({ ...loginInfo, profile: e.target.files[0] })
              }
              required
              accept=".jpg, .jpeg, .png"
            />
          </div>

          <input type="submit" value="Next" style={styles} />
        </form>
        {/* Second Form */}
        <form
          onSubmit={handleformone}
          className={`w-100 ${
            step === 2 ? "d-flex" : "d-none"
          } flex-column justify-content-center align-items-center`}
        >
          <input
            placeholder="Age"
            type="number"
            value={loginInfo.age}
            required
            onChange={(e) =>
              setloginInfo({ ...loginInfo, age: e.target.value })
            }
            style={inputStyle}
          />
          {/* <input
            placeholder="Gender"
            type="text"
            value={loginInfo.gender}
            required
            onChange={(e) =>
              setloginInfo({ ...loginInfo, gender: e.target.value })
            }
            className="form-control w-75 my-3"
          /> */}
          <select
            required
            style={inputStyle}
            value={loginInfo.gender}
            onChange={(e) => {
              console.log(loginInfo.gender);
              setloginInfo({ ...loginInfo, gender: e.target.value });
            }}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input
            placeholder="Residence"
            type="text"
            required
            value={loginInfo.residence}
            onChange={(e) =>
              setloginInfo({ ...loginInfo, residence: e.target.value })
            }
            style={inputStyle}
          />
          <input
            style={inputStyle}
            placeholder="Community"
            type="text"
            required
            value={loginInfo.community}
            onChange={(e) =>
              setloginInfo({ ...loginInfo, community: e.target.value })
            }
          />
          <input
            style={inputStyle}
            placeholder="Education"
            type="text"
            required
            value={loginInfo.education}
            onChange={(e) =>
              setloginInfo({ ...loginInfo, education: e.target.value })
            }
          />
          <input
            style={inputStyle}
            placeholder="Occupation"
            type="text"
            required
            value={loginInfo.occupation}
            onChange={(e) =>
              setloginInfo({ ...loginInfo, occupation: e.target.value })
            }
          />
          <div className="d-flex justify-content-center align-items-center">
            <button onClick={handleformback} style={prevBtn}>
              Back
            </button>
            <input type="submit" value="Next" style={prevBtn} />
          </div>
        </form>

        {/* Third Form */}
        <form
          onSubmit={submitform}
          className={`w-100 ${
            step === 3 ? "d-flex" : "d-none"
          } flex-column justify-content-center align-items-center`}
        >
          {/* <input
            placeholder="District"
            type="text"
            value={loginInfo.district}
            required
            onChange={(e) =>
              setloginInfo({ ...loginInfo, district: e.target.value })
            }
            style={inputStyle}
          /> */}
          <select
            required
            style={inputStyle}
            onChange={(e) => {
              {
                setdistrictRef(e.target.value);
                setloginInfo({
                  ...loginInfo,
                  district: districts[e.target.value].name,
                });
              }
            }}
          >
            <option value="">Select District</option>
            {districts.map((item, i) => {
              return <option value={i}>{item.name}</option>;
            })}
          </select>
          <input
            placeholder="Mandal"
            type="text"
            required
            value={loginInfo.mandal}
            onChange={(e) =>
              setloginInfo({ ...loginInfo, mandal: e.target.value })
            }
            style={inputStyle}
          />
          <input
            placeholder="Village"
            type="text"
            required
            value={loginInfo.village}
            onChange={(e) =>
              setloginInfo({ ...loginInfo, village: e.target.value })
            }
            style={inputStyle}
          />
          <select
            required
            style={inputStyle}
            onChange={(e) => {
              setloginInfo({
                ...loginInfo,
                pconst: districts[districtRef].cont[e.target.value],
              });
            }}
          >
            <option value="">Select Parliamentary Constituency</option>
            {districts[districtRef].cont.map((item, i) => {
              return <option value={i}>{item.name}</option>;
            })}
          </select>
          {/* <input
            placeholder="Parliamentary Constituency"
            type="text"
            required
            value={loginInfo.pconst}
            onChange={(e) =>
              setloginInfo({ ...loginInfo, pconst: e.target.value })
            }
            style={inputStyle}
          /> */}
          {/* <input
            placeholder="Assembly Constituency"
            type="text"
            required
            value={loginInfo.aconst}
            onChange={(e) =>
              setloginInfo({ ...loginInfo, aconst: e.target.value })
            }
            style={inputStyle}
          /> */}
          <select
            required
            style={inputStyle}
            onChange={(e) => {
              setloginInfo({
                ...loginInfo,
                aconst: districts[districtRef].cont[e.target.value],
              });
            }}
          >
            <option value="">Select Assembly Constituency</option>
            {districts[districtRef].cont.map((item, i) => {
              return <option value={i}>{item.name}</option>;
            })}
          </select>
          <div className="d-flex justify-content-center align-items-center">
            <button onClick={handleformback} style={prevBtn}>
              Back
            </button>
          </div>
          <input
            disabled={Loading}
            type="submit"
            value="Create Account"
            style={styles}
          />
        </form>

        <p className="my-4 text-white">
          Already have an account? <Link to="/login">Login</Link>
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
  background: "#ffffff 0% 0% no-repeat padding-box",
  font: "normal normal normal 18px/15px Gilroy",
  letterSpacing: "0px",
  color: "#707070",
  borderRadius: "25px",
  textAlign: "center",
  padding: "0.8rem",
  marginBottom: "1rem",
  boxSizing: "border-box",
};

const prevBtn = {
  width: "160px",
  textTransform: "uppercase",
  padding: "1rem",
  borderRadius: "7px",
  marginTop: "15px",
  marginLeft: "1rem",
  backgroundColor: "white",
  color: "#00005c",
  font: "normal normal normal 16px/19px Gilroy",
  border: "none",
};

export default NewSignup;
