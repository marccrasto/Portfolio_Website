import React from "react";
import './Navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="navbar" className="navbar">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Me</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Academic Work</a></li>
                    <li><a href="">Resume</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;