import React from "react";
import "../App.css";
import "./AboutPage.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from '@fortawesome/free-solid-svg-icons';

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
          <div className="topbar-left">
            <button onClick={this.toggleNavbar} className='topbar-btn'>
              <FontAwesomeIcon key={this.state.navbar ? 'x' : 'bars'} className={`menu-icon`} icon={this.state.navbar ? faXmark : faBars}/>
            </button>
            <div className="site-name">Marc Crasto</div>
          </div>
          <p>
            <a
              href="#"
              className="contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("footer")?.scrollIntoView({
                  behavior: "smooth",
                });
                if (this.state.navbar) this.toggleNavbar();
              }}
            >
              Contact
            </a>
          </p>
        </div>

        <div className={`${this.state.navbar ? "blur" : ""}`}>
          <div className={`about-page ${this.state.navbar ? "blur" : ""}`}>
            <div className="about-header">
              <h1>About Me</h1>
              <p>Someone who enjoys turning ideas into software, bridging logic and creativity to build systems that feel as good to use as they are to engineer.</p>
            </div>

            <div className="about-main">
              <div className="about-photo">
                <div className="photo-placeholder">
                  <img
                    src={process.env.PUBLIC_URL + "/profile_pic/profile_pic.jpg"}
                    alt="Marc Crasto"
                    className="photo-placeholder"
                  />
                </div>
              </div>

              <div className="about-text">
                <h2>Who I Am</h2>
                <p>
                  Hi, my name is Marc Crasto. I’m a Computer Science undergraduate at Western University with a strong interest in building thoughtful, real-world software. I enjoy working at the intersection of problem-solving and design—turning complex ideas into intuitive, functional systems. Through coursework, research, and team projects, I’ve developed a solid foundation in software development and machine learning while continuously pushing myself to learn new technologies and approaches.
                </p>
                <p>
                  My interests span artificial intelligence, full-stack development, and user-focused interface design. I’m especially drawn to projects where intelligent systems meet clean, usable interfaces—whether that’s machine learning models, data-driven applications, or end-to-end web platforms. I’m currently looking for opportunities to collaborate on impactful projects, deepen my technical skills, and contribute to products that are both technically sound and genuinely useful.
                </p>
              </div>
            </div>

            <div className="about-section" data-aos="fade-left">
              <h2>Programming Languages</h2>
              <div className="pill-row">
                <span className="pill">Java</span>
                <span className="pill">Python</span>
                <span className="pill">Javascript</span>
                <span className="pill">SQL</span>
                <span className="pill">C</span>
              </div>
            </div>

            <div className="about-section" data-aos="fade-right">
              <h2>Frameworks & Tools</h2>
              <div className="pill-row">
                <span className="pill">React</span>
                <span className="pill">Node.js</span>
                <span className="pill">Express</span>
                <span className="pill">Flask</span>
                <span className="pill">Git</span>
                <span className="pill">Docker</span>
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