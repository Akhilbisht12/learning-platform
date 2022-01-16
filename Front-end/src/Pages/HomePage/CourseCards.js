import React from "react";

const CourseCards = (props) => {
  console.log(props.course_num);
  return (
    <div className="d-flex flex-column align-items-center">
      <div
        className="card"
        style={{
          margin: "1rem",
          boxShadow: " 10px 10px 24px -5px rgba(89,86,86,0.75)",
          borderRadius: "8px",
        }}
      >
        <img
          className="card-img-top"
          style={{ borderRadius: "7px 7px 0 0" }}
          src={props.img}
          alt="Card image cap"
        />
        <div
          className="card-body bg-dark"
          style={{ borderRadius: "0 0 7px 7px" }}
        >
          <p className="card-text">Module</p>
          <h5 className="card-title text-white">{props.title}</h5>
          <p className="card-text">{props.short_desc}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCards;
