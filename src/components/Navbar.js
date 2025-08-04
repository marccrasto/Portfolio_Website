import React from "react";
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div id="navbar" className={`navbar ${this.props.visibility ? 'visible' : ''}`}>
                <button id="btn" onClick={this.props.onClick}><FontAwesomeIcon className="close-icon" icon={faXmark}/></button>
                <ul>
                    <a href="#" onClick={this.props.onClick}><li>Home</li></a>
                    <a href="../pages/About_me.js"><li>About Me</li></a>
                    <a href="#"><li>Projects</li></a>
                    <a href="#"><li>Academic Work</li></a>
                    <a href="#"><li>Resume</li></a>
                </ul>
            </div>
        );
    }
}

export default Navbar;