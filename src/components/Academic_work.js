import React from "react";
import './Academic_work.css';
import animation from "../animations/projects.webm"
import { Link } from "react-router-dom";


class Academics extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Link to="/academic" reloadDocument className="card-wrapper">
                <div className="academics">
                    <h1>Academic Projects</h1>
                    <video loop autoPlay muted playsInline>
                        <source src={animation} type="video/webm" />
                    </video>  
                </div>
            </Link>
        );
    }
}

export default Academics;