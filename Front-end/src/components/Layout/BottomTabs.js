import React from "react";
import { FaDesktop, FaClipboardList, FaBookOpen } from "react-icons/fa";
import { Redirect, useHistory } from "react-router-dom";

const BottomTabs = () => {
  const history = useHistory();

  return (
    <div className="fixed-bottom row p-2 glass">
      <div
        onClick={() => history.push("/dashboard")}
        className="col-4 d-flex align-items-center flex-column"
      >
        <FaDesktop size={25} color="white" />
        <div className="labels">Dashboard</div>
      </div>
      <div
        onClick={() => history.push("/home/all")}
        className="col-4 d-flex align-items-center flex-column"
      >
        <FaClipboardList size={25} color="white" />
        <div className="labels">Modules</div>
      </div>
      <div
        onClick={() => history.push("/forms")}
        className="col-4 d-flex align-items-center flex-column"
      >
        <FaBookOpen size={25} color="white" />
        <div className="labels">Forms</div>
      </div>
    </div>
  );
};

export default BottomTabs;
