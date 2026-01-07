import React from "react";
import "../App.css";
import "./ProjectsPage.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

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
    // 4 clubs (placeholders). Swap text/images/links later.
    const clubs = [
      {
        clubName: "Western Developers' Society",
        roleLine: "Machine Learning Developer · Sep 2025 – Apr 2026",
        image: "/projects_pics/westerndevsociety.jpg",
        overviewTitle: "Overview",
        overview:
          "Developing a vision–language model (VLM) for NSFW detection in 3D printing workflows",
        didTitle: "What did I do?",
        bullets: [
          "Worked in a team of 7 to create an NSFW detection system for 3D printing workflows, enabling screening of both textual prompts and image inputs before print execution",
          "Researched and evaluated 10+ state-of-the-art vision–language model architectures; implemented a pretrained VLM using Python and deep learning libraries",
          "Collaborated with the Western 3D Printing Club to validate real-world use cases and presented the system and experimental results at CUCAI 2026",
        ],
        projectCard: {
          title: "NSFW Detection",
          subtitle: "VLM + CNN",
          description:
            "Hover card description placeholder: what you built, why it matters, and what makes it unique.",
          tags: ["VLM", "CNN", "Python"],
          github: "#",
          demo: "#",
        },
      },
      {
        clubName: "Western Cyber Society",
        roleLine: "Full-Stack Developer · Sep 2025 – Apr 2026",
        image: "/projects_pics/westerncybersociety.jpg",
        overviewTitle: "Overview",
        overview:
          "Building a full-stack skin cancer detection application",
        didTitle: "What did I do?",
        bullets: [
            "Developed a full-stack skin cancer detection application enabling end-to-end lesion classification, including real-time image capture and inference via a smartphone camera",
            "Designed and trained a custom CNN in Python using PyTorch, informed by findings from 15 academic papers; preprocessed a 10,000-image dataset spanning 7 skin tones",
            "Collaborated with a team of 7 developers and presented the completed system and experimental results at CUCAI 2026"
        ],
        projectCard: {
          title: "Skin Cancer Detection App",
          subtitle: "CNN + Full-stack",
          description:
            "Hover card description placeholder.",
          tags: ["CNN", "Computer Vision", "React"],
          github: "#",
          demo: "#",
        },
      },
      {
        clubName: "Western Developers' Society",
        roleLine: "Machine Learning Developer · Sep 2024 – Apr 2025",
        image: "/projects_pics/westerndevsociety.jpg",
        overviewTitle: "Overview",
        overview:
          "Worked in a Scrum team of 7 to develop a real-time transit app for London, Ontario",
        didTitle: "What did I do?",
        bullets: [
            "Developed a real-time transit prediction application for London, Ontario, improving arrival time accuracy and reducing mean absolute error by 17% compared to Google Maps",
            "Evaluated baseline models (linear regression, random forest) and researched four predictive architectures before implementing a bidirectional LSTM using PyTorch",
            "Worked in a Scrum team of 7 and collaborated with Computer Science faculty to validate modeling choices and system design"
        ],
        projectCard: {
          title: "Bus Arrival Predictor",
          subtitle: "Model + UI",
          description:
            "Hover card description placeholder.",
          tags: ["Python", "ML", "UI"],
          github: "https://github.com/EthanPisani/WDS_LTC_BUS",
          demo: "#",
        },
      },
      {
        clubName: "Western AI",
        roleLine: "Front-end Developer · Sep 2023 – Apr 2024",
        image: "/projects_pics/westernuai.jpg",
        overviewTitle: "Overview",
        overview:
          "Built and demoed a financial forecasting web app at CUCAI 2024",
        didTitle: "What did I do?",
        bullets: [
            "Built and live-demoed a financial forecasting web application at CUCAI 2024, presenting to 340+ delegates and showcasing real-time forecast generation",
            "Implemented the UI and routing layers using Flask, HTML, and CSS, handling request routing, form submission, and dynamic rendering of forecast outputs",
            "Worked in a two-person team to design, build, and deliver a production-ready demo under conference conditions"
        ],
        projectCard: {
          title: "Financial Performance Predictor",
          subtitle: "Python Flask + UI",
          description:
            "Hover card description placeholder.",
          tags: ["Python", "Flask", "HTML + CSS"],
          github: "https://github.com/marccrasto/WAI",
          demo: "#",
        },
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
            <a accessKey="c" href="#footer" className="contact">
              Contact
            </a>
          </p>
        </div>

        {/* Blur wrapper (includes content + footer + scroll button) */}
        <div className={`${this.state.navbar ? "blur" : ""}`}>
          <div className="work-page">
            <div className="work-header">
              <h1>Work Experience</h1>
              <p>Clubs, projects, and what I built in each.</p>
            </div>

            {clubs.map((c, idx) => (
              <div className="club-section" data-aos="fade-up" data-aos-delay="150" key={`${c.clubName}-${idx}`}>
                <div className="club-title-row">
                  <div className="club-title-left">
                    <h2>{c.clubName}</h2>

                    <div className="project-title-inline">
                      <span className="project-name">{c.projectCard.title}</span>
                      <span className="project-separator">·</span>
                      <span className="project-subtitle">{c.projectCard.subtitle}</span>
                    </div>
                  </div>

                  <div className="club-role">
                    {c.roleLine}
                  </div>
                </div>

                {/* 2-column layout */}
                <div className={`club-grid ${idx % 2 === 1 ? "reverse" : ""}`}>
                  {/* Left: text */}
                  <div className="club-left">
                    <div className="club-block">
                      <h3>{c.overviewTitle}</h3>
                      <p>{c.overview}</p>
                    </div>

                    <div className="club-block">
                      <h3>{c.didTitle}</h3>
                      <ul>
                        {c.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: image placeholder */}
                  <div className="club-right">
                    <div className='club-image'>
                      {c.image ? (
                        <img src={c.image} alt={`${c.clubName}`} />
                      ) : (
                        <div className="image-placeholder">
                          Club / Team Photo
                        </div>
                      )}
                    </div>
                    {/* Project strip (Option 2) */}
                    <div className="project-strip-right">
                      {c.projectCard.github != '#' ? (<a
                        className="project-icon-btn wide"
                        href={c.projectCard.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub repository"
                        title="GitHub"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>) : (<a
                        className="project-icon-btn wide"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub repository"
                        title="GitHub"
                      >
                        Coming Soon
                      </a>)}
                      {/*<a
                        className="project-icon-btn wide"
                        href={c.projectCard.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Live demo"
                        title="Demo"
                      >
                        <FontAwesomeIcon icon={faPlay} />
                      </a>*/}
                    </div>
                  </div>
                </div>

                <div className="club-divider" />
              </div>
            ))}
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