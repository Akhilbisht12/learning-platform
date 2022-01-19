import React from "react";
import { useState } from "react";
import AuthServices from "../../ApiServices/auth.service";
import Layout from "../../components/Layout/Layout";
import BottomTabs from "../../components/Layout/BottomTabs";
import "./Forms.css";

const Influencer = () => {
  const [toastShow, setToastShow] = useState(false);
  const [formdata, setformdata] = useState({
    name: "",
    phone: "",
    occupation: "",
    district: "",
    mandal: "",
    village: "",
  });

  const handleinfluencersubmit = () => {
    const user = localStorage.getItem("userId");
    console.log(user);
    AuthServices.InfluencerForm(formdata, user);
    setformdata({
      name: "",
      phone: "",
      occupation: "",
      district: "",
      mandal: "",
      village: "",
    });
    setToastShow(true);
    setTimeout(() => {
      setToastShow(false);
    }, 2000);
  };

  return (
    <Layout>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          height: "auto",
          alignItems: "center",
          background: "#15181fc",
        }}
      >
        <h4 className="heading">Neutral Influencers</h4>
        <div className="inputs">
          <label htmlFor="village">Name</label>
          <input
            name="village"
            className="inputElement"
            value={formdata.name}
            onChange={(e) => setformdata({ ...formdata, name: e.target.value })}
          />
        </div>
        <div className="inputs">
          <label htmlFor="village">Phone Number</label>
          <input
            className="inputElement"
            value={formdata.phone}
            onChange={(e) =>
              setformdata({ ...formdata, phone: e.target.value })
            }
          />
        </div>
        <div className="inputs">
          <label htmlFor="village">Occupation</label>
          <input
            className="inputElement"
            value={formdata.occupation}
            onChange={(e) =>
              setformdata({ ...formdata, occupation: e.target.value })
            }
          />
        </div>
        <div className="inputs">
          <label htmlFor="village">District</label>
          <input
            className="inputElement"
            value={formdata.district}
            onChange={(e) =>
              setformdata({ ...formdata, district: e.target.value })
            }
          />
        </div>
        <div className="inputs">
          <label htmlFor="village">Mandal</label>
          <input
            className="inputElement"
            value={formdata.mandal}
            onChange={(e) =>
              setformdata({ ...formdata, mandal: e.target.value })
            }
          />
        </div>
        <div className="inputs">
          <label htmlFor="village">Village</label>
          <input
            className="inputElement"
            value={formdata.village}
            onChange={(e) =>
              setformdata({ ...formdata, village: e.target.value })
            }
          />
        </div>
        {toastShow == true && (
          <span className="badge badge-success">Success</span>
        )}
        <button
          className="formBtn"
          style={{ marginBottom: "4rem" }}
          onClick={handleinfluencersubmit}
        >
          Submit
        </button>
      </main>
      <BottomTabs />
    </Layout>
  );
};

export default Influencer;
