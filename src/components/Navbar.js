import React from "react";
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div id="navbar" className={`navbar ${this.props.visibility ? 'visible' : ''}`}>
                <button id="btn" onClick={this.props.onClick}><FontAwesomeIcon className="close-icon" icon={faXmark}/></button>
                <ul>
                    <Link to="/" reloadDocument><a><li>Home</li></a></Link>
                    <Link to="/about" reloadDocument><a><li>About Me</li></a></Link>
                    <Link to="/projects" reloadDocument><a><li>Projects</li></a></Link>
                    <Link to="/academic" reloadDocument><a><li>Academic Work</li></a></Link>
                    <Link to="/resume" reloadDocument><a><li>Resume</li></a></Link>
                </ul>
            </div>
        );
    }
}

export default Navbar;