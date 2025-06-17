import React from "react";
import './About_me.css';
import animation from "../animations/about_me.webm";


class AboutMe extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="about-me" data-aos="fade-up" data-aos-delay="600">
                <h1>About Me</h1>
                <video loop autoPlay muted playsInline>
                    <source src={animation} type="video/webm" />
                </video>
            </div>
        );
    }
}

export default AboutMe;
