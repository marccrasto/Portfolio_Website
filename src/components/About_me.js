import React from "react";
import "./About_me.css";
import animation from "../animations/about_me.webm";
import { Link } from "react-router-dom";

class AboutMe extends React.Component {
  render() {
    return (
      <Link to="/about" reloadDocument className="card-wrapper">
        <div className="about-me">
          <h1>About Me</h1>
          <video loop autoPlay muted playsInline>
            <source src={animation} type="video/webm" />
          </video>
        </div>
      </Link>
    );
  }
}

export default AboutMe;