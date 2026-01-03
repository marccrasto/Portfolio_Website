import React from "react";
import "../App.css";
import "./AcademicPage.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import AOS from 'aos';
import 'aos/dist/aos.css';

class ProjectsPage extends React.Component {
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
    this.setState({ showScrollButton: scrolled > 300 });
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
    const projects = [
      {
        title: "TextQuest",
        subtitle: "OCR → JSON → Game Pipeline",
        description:
          "Gamifies textbooks by extracting content via OCR, structuring it into JSON, and generating gameplay + questions from the material.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
        github: "#",
        demo: "#",
        tags: ["OCR", "LLM", "Web"],
      },
      {
        title: "Skin Cancer Classifier",
        subtitle: "CNN + Computer Vision",
        description:
          "End-to-end skin lesion classification with dataset curation across skin tones, preprocessing, and a deployable demo.",
        image: "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1200&q=80",
        github: "#",
        demo: "#",
        tags: ["Python", "CNN", "OpenCV"],
      },
      {
        title: "NSFW VLM Filter",
        subtitle: "Multimodal Safety",
        description:
          "Vision–language model that flags unsafe text prompts and images for 3D-print workflows, with a lightweight demo UI.",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80",
        github: "#",
        demo: "#",
        tags: ["VLM", "Safety", "React"],
      },
    ];

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
          <div className="projects-page">
            <div className="projects-header">
              <h1>Academic Work</h1>
              <p>Hover a card to see details + links.</p>
            </div>

            <div className="projects-grid">
              {projects.map((p) => (
                <div className="project-card" data-aos="fade-up" key={p.title}>
                  <div
                    className="project-image"
                    style={{ backgroundImage: `url(${p.image})` }}
                  />

                  <div className="project-footer">
                    <h2>{p.title}</h2>
                    <p className="project-subtitle">{p.subtitle}</p>
                  </div>

                  
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <h3>{p.title}</h3>
                      <p>{p.description}</p>

                      <div className="overlay-tags">
                        {p.tags.map((t) => (
                          <span className="pill" key={t}>
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="overlay-actions">
                        <a
                          className="project-link"
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub
                        </a>
                        <a
                          className="project-link"
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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

export default ProjectsPage;