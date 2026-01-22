import React from "react";
import './Projects.css';
import { Link } from "react-router-dom";


class Projects extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Link to="/projects" className="card-wrapper">
                <div id="projects" className="projects">
                    <h1>Club Projects</h1>
                    
                </div>
            </Link>
        );
    }
}

export default Projects;