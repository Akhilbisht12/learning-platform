import React from "react";
import ReactPlayer from "react-player";
import Layout from "../../components/Layout/Layout";

const whyRSP = () => {
  return (
    <Layout>
      <div className="p-3">
        <div className="">
          <div>
            <img
              className="w-100 rounded-3"
              src="https://bsplearningvideos.s3.ap-south-1.amazonaws.com/wall.jpg"
            />
          </div>
          <div className="p-4 bg-white rounded-3 shadow">
            We work for the Social Transformation and Economic Emancipation” of
            the “Bahujan Samaj “, which comprises of the Scheduled Castes (SCs),
            the Scheduled Tribes (STs), the Other Backward Classes (OBCs) and
            Religious Minorities.
          </div>
        </div>
        <div className="my-3">
          <ReactPlayer
            className="react-player"
            width="100%"
            height="auto"
            controls={true}
            url="https://bsplearningvideos.s3.ap-south-1.amazonaws.com/Gandhi+Jayanti.mp4"
          />
        </div>
      </div>
    </Layout>
  );
};

export default whyRSP;
