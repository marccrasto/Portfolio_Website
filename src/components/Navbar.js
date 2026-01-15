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
                    <Link to="/" reloadDocument><a><li>Home</li></a></Link>
                    <Link to="/about" reloadDocument><a><li>About Me</li></a></Link>
                    <Link to="/projects" reloadDocument><a><li>Club Projects</li></a></Link>
                    <Link to="/academic" reloadDocument><a><li>Academic Work</li></a></Link>
                    <Link to="/resume" reloadDocument><a><li>Resume</li></a></Link>
                </ul>
            </div>
        );
    }
}

export default Navbar;