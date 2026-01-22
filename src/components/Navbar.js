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
                    <li><a href="#/" onClick={this.props.onClick}>Home</a></li>
                    <li><a href="#/about" onClick={this.props.onClick}>About Me</a></li>
                    <li><a href="#/projects" onClick={this.props.onClick}>Club Projects</a></li>
                    <li><a href="#/academic" onClick={this.props.onClick}>Academic Projects</a></li>
                    <li><a href="#/resume" onClick={this.props.onClick}>Resume</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;