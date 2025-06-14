import React from "react";
import './Projects.css';
import animation from "../animations/about_me.webm";


class Projects extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="about-me">
                <h1>Projects</h1>
                <video loop autoPlay muted playsInline>
                    <source src={animation} type="video/webm" />
                </video>
            </div>
        );
    }
}

export default Projects;