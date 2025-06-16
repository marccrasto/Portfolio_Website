import React from 'react';
import '../components/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className='footer'>
                <div className='footer-content'>
                    <form>
                        <h2>Contact Me</h2>
                        <label id="name-label" for="name">
                            <input id="name" placeholder='Enter your name' />
                        </label>
                        <label id="email-label" for="email">
                            <input id="email" placeholder='Enter your email'/>
                        </label>
                        <label id="subject-label" for="subject">
                            <input id="subject" placeholder='Enter subject of message'/>
                        </label>
                        <label id="message-label" for="message">
                            <textarea id="message" placeholder='Enter your message'/>
                        </label>
                    </form>
                </div>
                <div class="social-links">
                    <a href="https://github.com/marccrasto" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="#" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
            </footer>
        );
    }
}

export default Footer;