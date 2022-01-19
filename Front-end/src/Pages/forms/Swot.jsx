import React from "react";
import { useState } from "react";
import AuthServices from "../../ApiServices/auth.service";
import Layout from "../../components/Layout/Layout";
import BottomTabs from "../../components/Layout/BottomTabs";
import "./Forms.css";

const Swot = () => {
  const [toastShow, setToastShow] = useState(false);
  const [formdata, setformdata] = useState({
    village: "",
    strengths: "",
    weaknesses: "",
    opportunities: "",
    threats: "",
  });

  const handleswotsubmit = () => {
    const user = localStorage.getItem("userId");
    AuthServices.SwotForm(formdata, user);
    setformdata({
      village: "",
      strengths: "",
      weaknesses: "",
      opportunities: "",
      threats: "",
    });
    setToastShow(true);
    setTimeout(() => {
      setToastShow(false);
    }, 2000);
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
          height: "auto",
          background: "#15181fc",
        }}
      >
        <h4 className="heading">SHNOW-SWOT analysis for your village/ward</h4>
        <div className="inputs">
          <label htmlFor="village">Village/ward</label>
          <input
            name="village"
            className="inputElement"
            value={formdata.village}
            onChange={(e) =>
              setformdata({ ...formdata, village: e.target.value })
            }
          />
        </div>
        <div className="inputs">
          <label htmlFor="village">Strengths</label>
          <input
            className="inputElement"
            value={formdata.strengths}
            onChange={(e) =>
              setformdata({ ...formdata, strengths: e.target.value })
            }
          />
        </div>
        <div className="inputs">
          <label htmlFor="village">Weaknesses</label>
          <input
            className="inputElement"
            value={formdata.weaknesses}
            onChange={(e) =>
              setformdata({ ...formdata, weaknesses: e.target.value })
            }
          />
        </div>
        <div className="inputs">
          <label htmlFor="village">Opportunities</label>
          <input
            className="inputElement"
            value={formdata.opportunities}
            onChange={(e) =>
              setformdata({ ...formdata, opportunities: e.target.value })
            }
          />
        </div>
        <div className="inputs">
          <label htmlFor="village">Threats</label>
          <input
            className="inputElement"
            value={formdata.threats}
            onChange={(e) =>
              setformdata({ ...formdata, threats: e.target.value })
            }
          />
        </div>
        {toastShow == true && (
          <span className="badge badge-success">Success</span>
        )}
        <button
          className="formBtn"
          style={{ marginBottom: "5rem" }}
          onClick={handleswotsubmit}
        >
          Submit
        </button>
      </main>
      <BottomTabs />
    </Layout>
  );
};

export default Swot;
