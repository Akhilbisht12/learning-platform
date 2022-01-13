import React from "react";
import "./Navbar.css";
import avatar from "../../../../assets/Images/user.png";
import {
  FaDesktop,
  FaClipboardList,
  FaBookOpen,
  FaAward,
  FaBullhorn,
  FaSignOutAlt,
  FaPaperPlane,
  FaWindowClose,
} from "react-icons/fa";
const Drawer = () => {
  return (
    <div className="main__drawer-wrapper">
      <div className="profile__details">
        <div className="details">
          <img className="user__img" src={avatar} alt="" />
          <p className="user__name">User ABC</p>
          <p className="user__email">abc@email.com</p>
        </div>
        <div className="close">
          <FaWindowClose size={25} color="white" />
        </div>
      </div>
      <div className="drawer__navigations">
        <ul className="nav__menu">
          <li className="nav__items">
            <FaDesktop size={25} color="black" />
            <span> Your Dashboard</span>
          </li>
          <li className="nav__items">
            <FaClipboardList size={25} color="black" />
            <span> Modules</span>
          </li>
          <li className="nav__items">
            <FaBookOpen size={25} color="black" />
            <span> Your Forms</span>
          </li>
          <li className="nav__items">
            <FaAward size={25} color="black" />
            <span> Your Badges</span>
          </li>
          <li className="nav__items">
            <FaBullhorn size={25} color="black" />
            <span> Meeting Updates</span>
          </li>
          <li className="nav__items">
            <FaPaperPlane size={25} color="black" />
            <span> Why RSP?</span>
          </li>
          <li className="nav__items">
            <FaSignOutAlt size={25} color="black" />
            <span> Sign Out</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
