import React from "react";
import "./About_me.css";
import { Link } from "react-router-dom";

class AboutMe extends React.Component {
  render() {
    return (
      <Link to="/about" reloadDocument className="card-wrapper">
        <div className="about-me">
          <h1>About Me</h1>
        </div>
      </Link>
    );
  }
}

export default AboutMe;