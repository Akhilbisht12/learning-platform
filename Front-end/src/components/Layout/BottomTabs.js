import React from "react";
import { FaDesktop, FaClipboardList, FaBookOpen } from "react-icons/fa";
import { Redirect, useHistory } from "react-router-dom";

const BottomTabs = () => {
  const history = useHistory();

  return (
    <div className="fixed-bottom bg-white row p-2">
      <div
        onClick={() => history.push("/dashboard")}
        className="col-4 d-flex align-items-center flex-column"
      >
        <FaDesktop size={25} />
        <div>Dashboard</div>
      </div>
      <div
        onClick={() => history.push("/home/all")}
        className="col-4 d-flex align-items-center flex-column"
      >
        <FaClipboardList size={25} />
        <div>Modules</div>
      </div>
      <div
        onClick={() => history.push("/forms")}
        className="col-4 d-flex align-items-center flex-column"
      >
        <FaBookOpen size={25} />
        <div>Forms</div>
      </div>
    </div>
  );
};

export default BottomTabs;
