import React from "react";
import "../App.css";
import "./AcademicPage.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        subtitle: "AI-Assisted Learning Prototype",
        description:
          "A proof-of-concept AI-driven learning platform that gamifies textbooks by extracting content with OCR and generating progression logic and assessment questions using an LLM. The system demonstrates a Subway Surfers–style gameplay flow where players answer textbook-based questions through lane-based interactions.",
        image: process.env.PUBLIC_URL + "/projects_pics/textquest.jpg",
        github: "https://github.com/lblommesteyn/wds-rpg/tree/marc-crasto",
        demo: "#",
        tags: ["OCR", "LLM", "Game Design", "AI"],
      },
      {
        title: "Pac-Man",
        subtitle: "Data-Structure–Driven Game Logic",
        description:
          "A Java-based implementation of the classic Pac-Man game completed as a course assignment to demonstrate data structures in practice. The project uses a Binary Search Tree to manage game state and in-game entities, illustrating how fundamental structures like BSTs can be applied within game systems.",
        image: process.env.PUBLIC_URL + "/projects_pics/pacman.jpg",
        github: "https://github.com/marccrasto/Pac-Man",
        demo: "#",
        tags: ["Java", "Data Structures"],
      },
      {
        title: "In a Row",
        subtitle: "Configurable Grid Game with State Evaluation",
        description:
          "A two-player strategy game, featuring variable board sizes, blocked cells, and turn-based tile placement on a square grid. The game supports configurable win conditions, draw detection, and state evaluation through string encodings and a hash table that stores the value of each tile on the grid",
        image: process.env.PUBLIC_URL + "/projects_pics/inarow.jpg",
        github: "https://github.com/marccrasto/InARow",
        demo: "#",
        tags: ["Algorithms", "Game Logic", "JavaScript"],
      },
      {
        title: "Taskly",
        subtitle: "Reducing Cognitive Load in Task Tracking",
        description:
          "A collaborative task management application inspired by Kanban workflows and grounded in core Human–Computer Interaction principles for usability-focused design decisions and workflow clarity. The system supports task creation, prioritization, and progress tracking through an interface to reduce cognitive load.",
        image: process.env.PUBLIC_URL + "/projects_pics/taskly.jpg",
        github: "https://github.com/marccrasto/Taskly",
        demo: "#",
        tags: ["HCI", "Full Stack", "JavaScript", "UI/UX"],
      },
      {
        title: "Group Chat Messaging Service",
        subtitle: "Distributed Systems with gRPC",
        description:
          "A distributed group chat system built using gRPC to enable real-time communication across multiple users within a networked client–server architecture and message-driven design. The project focuses on concurrency, synchronization, and reliable delivery while demonstrating core distributed systems principles clearly.",
        image: process.env.PUBLIC_URL + "/projects_pics/chatsystem.jpg",
        github: "https://github.com/marccrasto/Group_Chat_Messaging_Service",
        demo: "#",
        tags: ["Distributed Systems", "gRPC", "Networking"],
      },
      {
        title: "Traffic Accident Severity Detection",
        subtitle: "Predicting Crash Severity with ML",
        description:
          "A machine learning project that predicts traffic accident severity levels using collision data and supervised classification techniques for decision-support analysis tasks at scale. The model incorporates environmental context such as weather, road conditions, lighting, and time to inform decisions.",
        image: process.env.PUBLIC_URL + "/projects_pics/trafficseverity.png",
        github: "https://github.com/marccrasto/Traffic_Accident_Severity",
        demo: "#",
        tags: ["Machine Learning", "Classification"],
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
          <div className="projects-page">
            <div className="projects-header">
              <h1>Academic Projects</h1>
              <p>Hover for details • Click to view on GitHub</p>
            </div>

            <div className="projects-grid">
              {projects.map((p) => (
                <div className="project-card" onClick={() => window.open(p.github, "_blank")} data-aos="fade-up" key={p.title}>
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
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="projects-header">
              <p>To see more projects, visit my <a href="https://github.com/marccrasto">GitHub!</a></p>
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