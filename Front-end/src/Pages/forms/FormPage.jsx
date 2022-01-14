import React from "react";
import Layout from "../../components/Layout/Layout";
import { formImg } from "../../assets/Images/form_img.png";
import BottomTabs from "../../components/Layout/BottomTabs";
import { useHistory } from "react-router-dom";

const FormPage = () => {
  const history = useHistory();
  return (
    <Layout>
      <div className="main__from-wrapper">
        <div className="img__box"></div>
        <div className="btn__wrapper">
          <button className="formBtn" onClick={() => history.push("/swot")}>
            SWOT Analysis Form
          </button>
          <button
            className="formBtn"
            onClick={() => history.push("/influencer")}
          >
            {" "}
            Neutral Influencer Form
          </button>
        </div>
      </div>
      <BottomTabs />
    </Layout>
  );
};

export default FormPage;
