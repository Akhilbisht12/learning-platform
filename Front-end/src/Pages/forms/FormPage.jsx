import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { formImg } from "../../assets/Images/form_img.png";
import BottomTabs from "../../components/Layout/BottomTabs";
import { useHistory } from "react-router-dom";
import authService from "../../ApiServices/auth.service";

const FormPage = () => {
  const history = useHistory();
  const [coursesWatched, setcoursesWatched] = useState(0);
  useEffect(() => {
    const user = localStorage.getItem("userId");
    authService.GetCourseCount(user).then((response) => {
      setcoursesWatched(response.data.count);
    });
  }, []);
  return (
    <Layout>
      <div className="main__from-wrapper">
        <div className="img__box"></div>
        <div
          className={`btn__wrapper ${coursesWatched === 4 ? "d-block" : "d-none"}`}
        >
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
        <div
          className={`btn__wrapper ${coursesWatched < 4 ? "d-block" : "d-none"}`}
        >
          <p className="text-center text-white">
            You have not completed all the modules, please complete all the
            modules and unlock forms
          </p>
        </div>
      </div>
      <BottomTabs />
    </Layout>
  );
};

export default FormPage;
