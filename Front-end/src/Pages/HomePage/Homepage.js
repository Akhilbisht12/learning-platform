import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actions";
import Categories from "./Categories";
import HomeBanner from "./HomeBanner";
import CourseCards from "./CourseCards";
import CourseTitle from "./CourseTitle";
import { Redirect, NavLink } from "react-router-dom";
import Loader from "react-loader-spinner";
import Layout from "../../components/Layout/Layout";
import Recommendation from "./Recommendation";
import "./CSS/Homepage.css";
import Url from "../../ApiServices/BackendUrl";
import BottomTabs from "../../components/Layout/BottomTabs";

class Homepage extends Component {
  IsMounted = false;

  state = {
    CourseLink: this.props.match.params.CourseName,
    Courses: this.props.Courses,
    loading: true,
    img: "",
    progress: 0,
    redirect: null,
  };

  componentDidMount() {
    this.IsMounted = true;

    const fd = new FormData();
    const form = {};
    form["userId"] = localStorage.getItem("userId");
    fd.append("userId", localStorage.getItem("userId"));

    if (this.state.CourseLink === "preferences" && this.IsMounted)
      this.props.fetchPreferenceCourses(this.state.CourseLink, form);

    // fetch all courses if redux store is empty
    if (this.IsMounted && !this.props.Courses.length) this.props.fetchCourses();
  }

  componentWillUnmount() {
    this.IsMounted = false;
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    let BannerImage;

    let data = (
      <Loader
        type="Puff"
        color="#08BD80"
        height={50}
        width={50}
        className="loader"

        //3 secs
      />
    );

    if (this.props.Courses.length > 0) {
      // by default, it displays all the courses
      let CourseArray = this.props.Courses;
      console.log(CourseArray);

      if (
        this.state.CourseLink !== "all" &&
        this.state.CourseLink !== "preferences"
      ) {
        CourseArray = this.props.Courses.filter(
          (course) => course.category === this.state.CourseLink
        );
      }

      // this is the preference link
      else if (this.state.CourseLink === "preferences")
        CourseArray = this.props.PreferenceCourses;

      data = CourseArray.map((item) => {
        let rating = [item ? item.rating.ratingFinal : 0];
        if (rating === 0) rating = 1;

        return (
          <NavLink
            key={item._id}
            style={{ textDecoration: "none" }}
            exact
            to={`/course/${this.state.CourseLink}/${item._id}`}
          >
            <CourseCards
              course_num={item}
              key={item._id}
              title={item.title}
              img={item.imageurl}
              short_desc={item.discription}
            />
          </NavLink>
        );
      });

      BannerImage = this.state.CourseLink;
    }

    return (
      <Layout>
        <div style={{ paddingBottom: "4rem" }}>{data}</div>
        <BottomTabs />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Courses: state.filter.Courses,
    PreferenceCourses: state.filter.PreferenceCourse,
    //   selectedCourse: state.filter.selectedCourse,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCourses: () => dispatch(actionCreators.fetchAsyncCourses()),
    fetchPreferenceCourses: (CourseLink, form) =>
      dispatch(actionCreators.fetchAsyncPreferenceCourse(CourseLink, form)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
