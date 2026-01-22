import React from "react";
import './Navbar.css'

import { Link } from "react-router-dom";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div id="navbar" className={`navbar ${this.props.visibility ? 'visible' : ''}`}>
                <ul>
                    <li><a href="#/" onClick={() => window.location.reload()}>Home</a></li>
                    <li><a href="#/about" onClick={() => window.location.reload()}>About Me</a></li>
                    <li><a href="#/projects" onClick={() => window.location.reload()}>Club Projects</a></li>
                    <li><a href="#/academic" onClick={() => window.location.reload()}>Academic Projects</a></li>
                    <li><a href="#/resume" onClick={() => window.location.reload()}>Resume</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;