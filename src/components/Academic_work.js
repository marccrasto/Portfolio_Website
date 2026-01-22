import React from "react";
import './Academic_work.css';
import { Link } from "react-router-dom";


class Academics extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Link to="/academic" className="card-wrapper">
                <div className="academics">
                    <h1>Academic Projects</h1> 
                </div>
            </Link>
        );
    }
}

export default Academics;