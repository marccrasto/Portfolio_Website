import React from "react";
import './About_me.css';
import animation from "../animations/about_me.webm";
import background from "../backgrounds/about_me_background.jpg"


class AboutMe extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="about-me">
                <h1>About Me</h1>
                <video loop autoPlay muted playsInline>
                    <source src={animation} type="video/webm" />
                </video>
            </div>
        );
    }
}

export default AboutMe;
