import React from "react";
import './Projects.css';


class Projects extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <a to="#/projects" onClick={() => window.location.reload()} className="card-wrapper">
                <div id="projects" className="projects">
                    <h1>Club Projects</h1>
                </div>
            </a>
        );
    }
}

export default Projects;