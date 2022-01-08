import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./Pages/Auth/Forms/Login/Login";
import Signup from "./Pages/Auth/Forms/Signup/Signup";
import EmailVerify from "./Pages/Auth/Forms/ForgotPassword/EmailVerify";
import ForgotPasswordotp from "./Pages/Auth/Forms/ForgotPassword/ForgotPassOtp";
import ResetPassword from "./Pages/Auth/Forms/ResetPassword/ResetPassword";
import Cart from "./Pages/Cart/Cart";
import Otp from "./Pages/Auth/Forms/Otp/Otp";
import Homepage from "./Pages/HomePage/Homepage";
import TeacherPage from "./Pages/Teacher/TeacherPage";
import TeacherVideos from "./Pages/Teacher/TeacherVideos";
import TeacherHomePage from "./Pages/Teacher/TeacherHomepage/TeacherHomepage";
import TeacherEdit from "./Pages/Teacher/TeacherHomepage/TeacherEdit";
import CoursePage from "./Pages/CoursePage/CoursePage";
import Preference from "./Pages/HomePage/Preference";
import Stripe from "./Pages/payment/StripeContainer";
import Chat from "./Pages/Chat/Chat";
import SignupBSP from "./Pages/Auth/Forms/Signup/SignupBSP";
import SignUpwithPhone from "./Pages/Auth/Forms/Signup/SignUpwithPhone";
import LoginPhone from './Pages/Auth/Forms/Login/LoginPhone'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route path="/signupOtp" component={SignUpwithPhone} /> */}
          {/* <Route path="/signup" exact component={Signup} /> */}
          <Route path="/login" component={LoginPhone} />
          <Route path="/signup/otp" component={Otp} />
          <Route path="/forgotpasswordemail" component={EmailVerify} />
          <Route path="/ForgotPasswordotp" component={ForgotPasswordotp} />
          <Route path="/ResetPassword" component={ResetPassword} />
          <Route path="/signup" component={SignupBSP} />

          <Route
            path="/home/:CourseName"
            exact
            render={(props) => (
              <Homepage key={props.location.pathname} {...props} />
            )}
          />
          <Route
            path="/home/Interest/Preference"
            exact
            component={Preference}
          />

          <Route
            path="/course/:Course/:Courseid"
            exact
            render={(props) => (
              <CoursePage key={props.location.pathname} {...props} />
            )}
          />

          <Route path="/Cart" component={Cart} />

          <Route
            path="/stripe/:CourseLink"
            exact
            render={(props) => (
              <Stripe key={props.location.pathname} {...props} />
            )}
          />

          <Route path="/Teacher" component={TeacherPage} />
          <Route
            path="/TeacherVideos"
            render={(props) => <TeacherVideos {...props} />}
          />

          <Route path="/TeacherHome" component={TeacherHomePage} />
          <Route path="/TeacherEdit" component={TeacherEdit} />

          {/* chat room for teacher and student */}

          <Route path="/chat" component={Chat} />
          {/* <Redirect to="/signupOtp" /> */}
          <Redirect to="/home/all" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
