import React from "react";
import { useState } from "react";
import AuthServices from "../../ApiServices/auth.service";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/UI/Input/FormInput";
import "./Forms.css";

const Swot = () => {
  const [formdata, setformdata] = useState({
    village: "",
    strengths: "",
    weaknesses: "",
    opportunities: "",
    threats: "",
  });

  const handleswotsubmit = () => {
    const user = localStorage.getItem("userId");
    console.log(user);
    AuthServices.SwotForm(formdata, user);
  };
  const formElementsArray = [];

  return (
    <Layout>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          alignItems: "center",
          height: "90vh",
          flex: 1,
          background: "#15181fc",
        }}
      >
        <p style={{ color: "white" }}>
          SHNOW-SWOT analysis for your village/ward
        </p>
        <input
          className="InputElement"
          placeholder="Village Name"
          value={formdata.village}
          onChange={(e) =>
            setformdata({ ...formdata, village: e.target.value })
          }
        />
        <input
          className="InputElement"
          placeholder="Village Name"
          value={formdata.strengths}
          onChange={(e) =>
            setformdata({ ...formdata, strengths: e.target.value })
          }
        />
        <input
          className="InputElement"
          placeholder="Village Name"
          value={formdata.weaknesses}
          onChange={(e) =>
            setformdata({ ...formdata, weaknesses: e.target.value })
          }
        />
        <input
          className="InputElement"
          placeholder="Village Name"
          value={formdata.opportunities}
          onChange={(e) =>
            setformdata({ ...formdata, opportunities: e.target.value })
          }
        />
        <input
          className="InputElement"
          placeholder="Village Name"
          value={formdata.threats}
          onChange={(e) =>
            setformdata({ ...formdata, threats: e.target.value })
          }
        />
        <button onClick={handleswotsubmit}>submit</button>
      </main>
    </Layout>
  );
};

export default Swot;
