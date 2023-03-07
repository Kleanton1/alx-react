import React, { Component, PureComponent } from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import propTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";
import "./App.css";

// implement class components
class App extends PureComponent {
    listCourses = [
      { id: 1, name: "ES6", value: "60" },
      { id: 2, name: "Webpack", credit: '20' },
      { id: 3, name: "React", credit: "40" }
    ];

    listNotifications = [
      { id: 1, type: "default", value: "New course available"},
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, html: {__html: getLatestNotification() }, type: "urgent" }
    ];

    render() {
    return (
      <React.Fragment>
      <div className="App">
        <div className="heading-section">
        <Notifications listNotifications={listNotifications} />
        <Header />
        </div>
        {this.props.isLoggedIn ? <CourseList listCourses={this.listCourses} /> : <Login />}
          <Footer />
        </div>
        </React.Fragment>
    )
  }
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: propTypes.bool,
};

export default App;