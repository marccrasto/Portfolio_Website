import React from "react";
import "../App.css";
import "./AboutPage.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import AOS from 'aos';
import 'aos/dist/aos.css';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navbar: false,
      showScrollButton: false,
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  componentDidMount() {
    AOS.init({
          duration: 1000,
          once: true,
    });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const scrolled = window.scrollY;
    if (scrolled > 300) {
      this.setState({ showScrollButton: true });
    } else {
      this.setState({ showScrollButton: false });
    }
  };

  toggleNavbar() {
    this.setState((state) => ({
      navbar: !state.navbar,
      showScrollButton: false,
    }));
  }

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    return (
      <div className="welcome-container">
        <div className="topbar">
          <div className="topbar left">
            <button onClick={this.toggleNavbar}>
              <FontAwesomeIcon className="menu-icon" icon={faBars} />
            </button>
            <div className="site-name">Marc Crasto</div>
          </div>
          <p>
            <a accessKey="c" href="#footer" onClick={this.state.navbar ? this.toggleNavbar : () => {}} className="contact">
              Contact
            </a>
          </p>
        </div>

        <div className={`${this.state.navbar ? "blur" : ""}`}>
          <div className={`about-page ${this.state.navbar ? "blur" : ""}`}>
            <div className="about-header">
              <h1>About Me</h1>
              <p>Placeholder intro — add 1–2 sentences here.</p>
            </div>

            <div className="about-main">
              <div className="about-photo">
                <div className="photo-placeholder">Your Photo</div>
              </div>

              <div className="about-text">
                <h2>Who I Am</h2>
                <p>
                  Placeholder paragraph about who you are, what you’re studying,
                  and what you enjoy building.
                </p>
                <p>
                  Placeholder paragraph about your interests (AI, UI, full-stack),
                  and what you’re looking for.
                </p>
              </div>
            </div>

            <div className="about-section" data-aos="fade-left">
              <h2>Programming Languages</h2>
              <div className="pill-row">
                <span className="pill">JavaScript</span>
                <span className="pill">Python</span>
                <span className="pill">Java</span>
                <span className="pill">C</span>
                <span className="pill">SQL</span>
              </div>
            </div>

            <div className="about-section" data-aos="fade-right">
              <h2>Frameworks & Tools</h2>
              <div className="pill-row">
                <span className="pill">React</span>
                <span className="pill">Node.js</span>
                <span className="pill">Git</span>
                <span className="pill">Docker</span>
                <span className="pill">PostgreSQL</span>
              </div>
            </div>
          </div>

          <Footer />
        </div>
        <Navbar visibility={this.state.navbar} onClick={this.toggleNavbar} />

        {this.state.showScrollButton && (
          <button className="scroll-to-top" onClick={this.scrollToTop}>
            ↑
          </button>
        )}
      </div>
    );
  }
}

export default AboutPage;