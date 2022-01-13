import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink, useHistory } from "react-router-dom";
import Logo from "../../Logo/Logo";
import AuthServices from "../../../../ApiServices/auth.service";
import { GoogleLogout } from "react-google-login";
import Search from "../../Search/search";
import { GiHamburgerMenu } from "react-icons/gi";
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

const Navbar = () => {
  const [isLogin, setLogin] = React.useState(false);
  const history = useHistory();
  const [drawer, setdrawer] = useState(true);
  // const [drawerClose, setdrawerClose] = useState(false);

  const handleMenu = () => {
    setdrawer(false);
  };

  const closeDrawer = () => {
    setdrawer(true);
  };

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (localStorage.getItem("user")) {
        setLogin(true);
      }
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const Drawer = (
    <div className="main__drawer-wrapper">
      <div className="profile__details">
        <div className="details">
          <img className="user__img" src={avatar} alt="" />
          <p className="user__name">User ABC</p>
          <p className="user__email">abc@email.com</p>
        </div>
        <div className="close">
          <FaWindowClose onClick={closeDrawer} size={25} color="white" />
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

  const logout = () => {
    setLogin(false);
    AuthServices.logout();
    console.log("logout called");
    history.push("/login");
  };

  let ToolBar = (
    <nav className=" navbar navbar-expand-lg sticky-top ">
      <div className="hamburger">
        <button className="menu__button" onClick={handleMenu}>
          <GiHamburgerMenu size={20} color="white" />
        </button>
      </div>
      <div className="screen__name">
        <h5>Your Dashboard</h5>
      </div>
      <div className="logo">
        <Logo />
      </div>
    </nav>
  );
  let Logout = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink
          to="/signup"
          activeClassName="btnactive"
          className="nav-link Signupbtn"
        >
          Signup
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          to="/login"
          activeClassName="btnactive"
          className="nav-link Loginbtn"
        >
          Login
        </NavLink>
      </li>
    </ul>
  );

  let loggedIn = (
    <ul className="navbar-nav ml-auto">
      <li
        className="nav-item"
        data-toggle="tooltip"
        data-placement="top"
        title="Create Your Course"
      >
        <NavLink
          to="/teacherhome"
          activeClassName="teacherActive"
          className="nav-link teachLink"
        >
          Teach on Shelp
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/Cart" className="nav-link ">
          <i
            data-toggle="tooltip"
            data-placement="top"
            title="Bookmarked Courses"
            className="fa fa-book"
            aria-hidden="true"
          >
            <span id="bookmarkNav"> Bookmark</span>
          </i>
        </NavLink>
      </li>

      <li className="nav-item">
        <GoogleLogout
          clientId={process.env.REACT_APP_GOOGLE_API_KEY}
          buttonText="Logout"
          render={(renderProps) => (
            <NavLink
              to="/login"
              onClick={logout}
              disabled={renderProps.disabled}
              className="nav-link logoutlink"
            >
              {" "}
              Logout{" "}
            </NavLink>
          )}
          onLogoutSuccess={logout}
        ></GoogleLogout>
      </li>
    </ul>
  );

  return (
    <div>
      <div style={{ display: drawer ? "" : "none" }}>{ToolBar}</div>
      <div
        className="fixed-top"
        style={{
          display: !drawer ? "" : "none",
          backdropFilter:"blur(2px)"
        }}
      >
        {Drawer}
      </div>
    </div>
  );
};

export default Navbar;