import React from 'react';
import '../components/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer id="footer" className="footer">
                <div className="footer-container">
                    <div className="footer-left" data-aos="fade-up">
                        <h2>Contact Me</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();

                                if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
                                    console.error("Missing EmailJS env vars");
                                    alert("Email config missing. Check your .env variables.");
                                    return;
                                }

                                emailjs.sendForm(
                                SERVICE_ID,
                                TEMPLATE_ID,
                                e.target,
                                PUBLIC_KEY
                                )
                                .then(() => {
                                alert("Message sent successfully!");
                                e.target.reset();
                                })
                                .catch((err) => {
                                    console.error("EmailJS error:", err);
                                    alert("Failed to send message. Please try again.");

                                });
                            }}
                        >
                            <input name="name" type="text" placeholder="Your Name" required />
                            <input name="email" type="email" placeholder="Your Email" required />
                            <input name="title" type="text" placeholder="Subject" required />
                            <textarea name="message" placeholder="Your Message" required />
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                    <div className="footer-right" data-aos="fade-left">
                        <div className="contact-info">
                            <h3>Email</h3>
                            <p><a href="mailto:marcalex458@gmail.com">marcalex458@gmail.com</a></p>

                            <h3>Location</h3>
                            <p>London, ON<br />Canada</p>
                        </div>

                        <div className="footer-icons">
                            <a href="https://github.com/marccrasto" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://www.linkedin.com/in/marc-crasto-95736b1b2/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>

                        <div className="footer-note">
                            <p>Open to full-time roles | Available for freelance work</p>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 Marc Crasto. All rights reserved.</p>
                    <p className="footer-tech">
                        Built with React
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;