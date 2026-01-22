import React from "react";
import "./About_me.css";

class AboutMe extends React.Component {
  render() {
    return (
      <a href="#/about" reloadDocument className="card-wrapper">
        <div className="about-me">
          <h1>About Me</h1>
        </div>
      </a>
    );
  }
}

export default AboutMe;