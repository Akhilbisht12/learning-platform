import React from "react";
import { useState } from "react";
import AuthServices from '../../ApiServices/auth.service';

const Influencer = () => {
  const [formdata, setformdata] = useState({
    village: "",
    strengths: "",
    weaknesses: "",
    opportunities: "",
    threats: "",
  });

  const handleswotsubmit = () => {
    const user = localStorage.getItem('userId')
    console.log(user)
    AuthServices.InfluencerForm(formdata, user)
  }

  return (
    <div>
      <input
        value={formdata.village}
        onChange={(e) => setformdata({ ...formdata, village: e.target.value })}
      />
      <input
        value={formdata.strengths}
        onChange={(e) =>
          setformdata({ ...formdata, strengths: e.target.value })
        }
      />
      <input
        value={formdata.weaknesses}
        onChange={(e) =>
          setformdata({ ...formdata, weaknesses: e.target.value })
        }
      />
      <input
        value={formdata.opportunities}
        onChange={(e) =>
          setformdata({ ...formdata, opportunities: e.target.value })
        }
      />
      <input
        value={formdata.threats}
        onChange={(e) => setformdata({ ...formdata, threats: e.target.value })}
      />
      <button onClick={handleswotsubmit}>submit</button>
    </div>
  );
};

export default Influencer;
