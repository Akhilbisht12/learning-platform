import React, { Component } from "react";
import "./CSS/CategoriesCard.css";
import AuthServices from "../../ApiServices/auth.service";

class CourseTitle extends Component {
  render() {
    let userName = AuthServices.getUserName();
    let WelcomeMsg = "Register to Start Learning!";

    if (userName !== null) {
      WelcomeMsg = this.props.welcomeMessage + " " + userName + "!";
    }

    return <h5 className="CategoriesTitle"> {WelcomeMsg}</h5>;
  }
}

export default CourseTitle;
