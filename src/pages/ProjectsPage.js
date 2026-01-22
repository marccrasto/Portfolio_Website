import React from "react";
import "../App.css";
import "./ProjectsPage.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from '@fortawesome/free-solid-svg-icons';

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
          "Designing an NSFW screening system for 3D printing pipelines, enabling automatic filtering of both textual prompts and image inputs prior to print execution",
          "Surveyed and compared vision–language model architectures to inform VLM integration using Python-based deep learning frameworks",
          "Partnering with the Western 3D Printing Club to validate real-world constraints and presenting the system’s design and results at CUCAI 2026",
        ],
        projectCard: {
          title: "3D Printing NSFW Detection",
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
            "Building an end-to-end skin cancer detection platform supporting real-time lesion capture and classification via a smartphone camera interface",
            "Implementing a custom CNN in PyTorch, informed by a review of 15 dermatology-focused research papers and a curated 10,000-image dataset spanning seven skin tones",
            "Contributing within a seven-person development team and presenting experimental findings and system performance at CUCAI 2026",
        ],
        projectCard: {
          title: "Skin Cancer Detection App",
          subtitle: "CNN + Computer Vision",
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
            "Implemented a real-time bus arrival prediction system for London, Ontario, achieving a 17% reduction in mean absolute error compared to Google Maps",
            "Benchmarked multiple predictive approaches before converging on a bidirectional LSTM architecture implemented in PyTorch",
            "Collaborated in an agile Scrum environment alongside Computer Science faculty to refine model design and system architecture",
        ],
        projectCard: {
          title: "Bus Arrival Predictor",
          subtitle: "LSTM + UI",
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
          "Designed the UI for a financial forecasting web app",
        didTitle: "What did I do?",
        bullets: [
            "Delivered and live-demoed a financial forecasting web application at CUCAI 2024 to an audience of 340+ delegates",
            "Built the presentation and interaction layers using Flask, HTML, and CSS, supporting form submission, routing, and dynamic forecast rendering",
            "Coordinated within a two-person team to produce a stable, conference-ready demo under tight timelines",
        ],
        projectCard: {
          title: "Financial Performance Predictor",
          subtitle: "Full-Stack",
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
          <div className="work-page">
            <div className="work-header">
              <h1>Club Projects</h1>
              <p>Clubs, projects, and my contributions.</p>
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

                <div className={`club-grid ${idx % 2 === 1 ? "reverse" : ""}`}>
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
                    <div className="project-strip-right">
                      {c.projectCard.github !== '#' ? (<a
                        className="project-icon-btn wide"
                        href={c.projectCard.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub repository"
                        title="GitHub"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>) : (<a
                        className="project-icon-btn-no-cursor wide"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub repository"
                        title="Coming Soon"
                      >
                        Coming Soon
                      </a>)}
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