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
                    <Link to="/" onClick={this.props.onClick}><a><li>Home</li></a></Link>
                    <Link to="/about" onClick={this.props.onClick}><a><li>About Me</li></a></Link>
                    <Link to="/projects" onClick={this.props.onClick}><a><li>Club Projects</li></a></Link>
                    <Link to="/academic" onClick={this.props.onClick}><a><li>Academic Projects</li></a></Link>
                    <Link to="/resume" onClick={this.props.onClick}><a><li>Resume</li></a></Link>
                </ul>
            </div>
        );
    }
}

export default Navbar;