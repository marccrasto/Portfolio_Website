import React from "react";
import './About_me.css';
import animation from "../animations/about_me.webm";


class AboutMe extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="about-me">
                <h1>About Me</h1>
                <video loop autoPlay playsInline>
                    <source src={animation} type="video/webm"/>
                </video>
            </div>
        );
    }
}

export default AboutMe;
