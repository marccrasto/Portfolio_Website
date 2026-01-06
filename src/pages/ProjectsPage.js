import React from "react";
import "../App.css";
import "./ProjectsPage.css";

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
          "Worked in a team of 7 to create an end-to-end NSFW detection system for 3D printing workflows, enabling automated screening of both textual prompts and image inputs before print execution",
          "Researched and evaluated 10+ state-of-the-art vision–language model architectures; implemented and benchmarked a pretrained VLM against a custom-built VLM and CNN using Python and deep learning libraries, selecting the custom VLM based on performance gains",
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
            "Designed and trained a custom CNN in Python using PyTorch, informed by findings from 15 academic papers; preprocessed a 10,000-image Fitzpatrick dataset spanning 7 skin tones to improve model robustness and generalization",
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
            "Evaluated baseline models (linear regression, random forest) and researched four predictive architectures before implementing a bidirectional LSTM in Python using PyTorch; co-developed the frontend UI in React for real-time visualization",
            "Worked in a Scrum team of 7 and collaborated with Computer Science faculty to validate modeling choices and system design"
        ],
        projectCard: {
          title: "Bus Arrival Predictor",
          subtitle: "Model + UI",
          description:
            "Hover card description placeholder.",
          tags: ["Python", "ML", "UI"],
          github: "#",
          demo: "#",
        },
      },
      {
        clubName: "Western AI",
        roleLine: "Front-end Developer · Sep 2023 – Apr 2024",
        image: "/projects_pics/westernai.png",
        overviewTitle: "Overview",
        overview:
          "Built and live-demoed a financial forecasting web app at CUCAI 2024 attended by 340+ delegates",
        didTitle: "What did I do?",
        bullets: [
            "Built and live-demoed a financial forecasting web application at CUCAI 2024, presenting to 340+ delegates and showcasing real-time forecast generation",
            "Implemented the presentation and routing layers using Flask, HTML, and CSS, handling request routing, form submission, and dynamic rendering of forecast outputs for live demonstrations",
            "Worked in a two-person team to design, build, and deliver a production-ready demo under conference conditions"
        ],
        projectCard: {
          title: "Financial Performance Predictor",
          subtitle: "Python Flask + UI",
          description:
            "Hover card description placeholder.",
          tags: ["Python", "Flask", "HTML + CSS"],
          github: "#",
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
              <div className="club-section" data-aos="fade-up" data-aos-delay="150" key={c.clubName}>
                <div className="club-title-row">
                  <h2 data-aos="fade-right" data-aos-delay="150">{c.clubName}</h2>
                  <div className="club-role" data-aos="fade-left" data-aos-delay="150">{c.roleLine}</div>
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

                    {/* Project card (hover overlay like you wanted) */}
                    <div className="mini-card">
                      <div className="mini-card-inner">
                        <div className="mini-card-front">
                          <div className="mini-card-title">
                            <h4>{c.projectCard.title}</h4>
                            <span>{c.projectCard.subtitle}</span>
                          </div>
                          <div className="mini-tags">
                            {c.projectCard.tags.map((t) => (
                              <span className="pill" key={t}>
                                {t}
                              </span>
                            ))}
                          </div>
                          <div className="mini-hint">Hover for details</div>
                        </div>

                        <div className="mini-card-overlay">
                          <p>{c.projectCard.description}</p>
                          <div className="mini-actions">
                            <a
                              className="project-link"
                              href={c.projectCard.github}
                              target="_blank"
                              rel="noreferrer"
                            >
                              GitHub
                            </a>
                            <a
                              className="project-link"
                              href={c.projectCard.demo}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Demo
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: image placeholder */}
                  <div className="club-right">
                    <div className="club-image">
                      {c.image ? (
                        <img src={c.image} alt={`${c.clubName}`} />
                      ) : (
                        <div className="image-placeholder">
                          Club / Team Photo
                        </div>
                      )}
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