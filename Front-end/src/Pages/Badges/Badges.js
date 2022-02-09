import React, { useEffect, useState } from "react";
import authService from "../../ApiServices/auth.service";
import Layout from "../../components/Layout/Layout";

const Badges = () => {
  const [coursesWatched, setcoursesWatched] = useState(0);
  useEffect(() => {
    const user = localStorage.getItem("userId");
    authService.GetCourseCount(user).then((response) => {
      setcoursesWatched(response.data.count);
    });
  }, []);
  return (
    <Layout>
      <div className="container">
        <div className="row justify-content-center">
          <h4 className="col-8 my-3 text-center">Badges Earned</h4>
          <div
            className={`col-8 my-3 text-center ${
              coursesWatched === 0 ? "d-flex" : "d-none"
            }`}
          >
            Your badges will be displayed here. Complete modules to earn badges.
          </div>
          <div
            className={`col-8 my-3 shadow p-4 rounded ${
              coursesWatched >= 1 ? "d-flex" : "d-none"
            }`}
          >
            <img
              className="w-100"
              src="https://bsplearningvideos.s3.ap-south-1.amazonaws.com/medals/bronze.png"
            />
          </div>
          <div
            className={`col-8 my-3 shadow p-4 rounded ${
              coursesWatched >= 2 ? "d-flex" : "d-none"
            }`}
          >
            <img
              className="w-100"
              src="https://bsplearningvideos.s3.ap-south-1.amazonaws.com/medals/silver.png"
            />
          </div>
          <div
            className={`col-8 my-3 shadow p-4 rounded ${
              coursesWatched >= 3 ? "d-flex" : "d-none"
            }`}
          >
            <img
              className="w-100"
              src="https://bsplearningvideos.s3.ap-south-1.amazonaws.com/medals/gold.png"
            />
          </div>
          <div
            className={`col-8 my-3 shadow p-4 rounded ${
              coursesWatched >= 4 ? "d-flex" : "d-none"
            }`}
          >
            <img
              className="w-100"
              src="https://bsplearningvideos.s3.ap-south-1.amazonaws.com/medals/platinium.png"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Badges;
