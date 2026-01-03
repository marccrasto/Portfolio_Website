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
                    <a href="#"><li>Projects</li></a>
                    <Link to="/academic" reloadDocument><a><li>Academic Work</li></a></Link>
                    <a href="#"><li>Resume</li></a>
                </ul>
            </div>
        );
    }
}

export default Navbar;