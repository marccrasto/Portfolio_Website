import React from "react";
import "../App.css";
import "./ResumePage.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
    const resumePreviewImage = "/resume/resume-preview.png"; // optional

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
            <a accessKey="c" href="#footer" className="contact">
              Contact
            </a>
          </p>
        </div>

        {/* Blur wrapper includes content + footer + scroll button */}
        <div className={`${this.state.navbar ? "blur" : ""}`}>
          <div className="resume-page">
            <div className="resume-header" >
              <h1>Resume</h1>

              <a className="resume-download" href={resumePdf} download>
                DOWNLOAD HERE
              </a>
            </div>

            {/* Preview */}
            <div className="resume-preview-wrap">
              {/* Option A: show a preview image (fast + clean) */}
              <img
                className="resume-preview"
                src={resumePreviewImage}
                alt="Resume preview"
                onError={(e) => {
                  // If you haven't added resume-preview.png yet,
                  // fallback to showing the PDF in an iframe.
                  e.currentTarget.style.display = "none";
                  const iframe = document.getElementById("resume-iframe");
                  if (iframe) iframe.style.display = "block";
                }}
              />

              {/* Option B: PDF iframe (hidden unless image fails) */}
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