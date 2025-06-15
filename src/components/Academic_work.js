import React from "react";
import './Academic_work.css';
import animation from "../animations/projects.webm"


class Academics extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="academics">
                <h1>Projects</h1>
                <video loop autoPlay muted playsInline>
                    <source src={animation} type="video/webm" />
                </video>  
            </div>
        );
    }
}

export default Academics;