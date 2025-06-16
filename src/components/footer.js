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
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-left" data-aos="fade-up">
                        <h2>Contact Me</h2>
                        <form>
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Email" />
                            <input type="text" placeholder="Subject" />
                            <textarea placeholder="Your Message" />
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                    <div className="footer-right" data-aos="fade-left">
                        <div className="contact-info">
                            <h3>Email</h3>
                            <p><a href="mailto:marccrasto@gmail.com">marccrasto@gmail.com</a></p>

                            <h3>Location</h3>
                            <p>Toronto, ON<br />Canada</p>
                        </div>

                        <div className="footer-icons">
                            <a href="https://github.com/marccrasto" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="#" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>

                        <div className="footer-note">
                            <p>Open to full-time roles | Available for freelance work</p>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 Marc Crasto. All rights reserved.</p>
                </div>
            </footer>
        );
    }
}

export default Footer;