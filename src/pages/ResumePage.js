import React from "react";
import "../App.css";
import "./ResumePage.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from '@fortawesome/free-solid-svg-icons';

class ResumePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navbar: false,
      showScrollButton: false,
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ showScrollButton: window.scrollY > 300 });
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
    
    const resumePdf = "/resume/resume.pdf";
    const resumePreviewImage = "/resume/resume-preview.png";

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
            <a accessKey="c" href="#footer" className="contact">
              Contact
            </a>
          </p>
        </div>

        <div className={`${this.state.navbar ? "blur" : ""}`}>
          <div className="resume-page">
            <div className="resume-header" >
              <h1>Resume</h1>

              <a className="resume-download" href={resumePdf} download>
                DOWNLOAD HERE
              </a>
            </div>

            <div className="resume-preview-wrap">
              <img
                className="resume-preview"
                src={resumePreviewImage}
                alt="Resume preview"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const iframe = document.getElementById("resume-iframe");
                  if (iframe) iframe.style.display = "block";
                }}
              />

              <iframe
                id="resume-iframe"
                title="Resume PDF"
                className="resume-iframe"
                src={resumePdf}
                style={{ display: "none" }}
              />
            </div>
          </div>

          <Footer />

          {this.state.showScrollButton && (
            <button className="scroll-to-top" onClick={this.scrollToTop}>
              ↑
            </button>
          )}
        </div>

        <Navbar visibility={this.state.navbar} onClick={this.toggleNavbar} />
      </div>
    );
  }
}

export default ResumePage;