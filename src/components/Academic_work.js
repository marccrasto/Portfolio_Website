import React from "react";
import './Academic_work.css';


class Academics extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <a href="#/academic" className="card-wrapper">
                <div className="academics">
                    <h1>Academic Projects</h1> 
                </div>
            </a>
        );
    }
}

export default Academics;