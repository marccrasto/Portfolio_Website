import React from "react";
import "../App.css";
import "./AcademicPage.css";

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
        image: "/projects_pics/textquest.jpg",
        github: "https://github.com/lblommesteyn/wds-rpg",
        demo: "#",
        tags: ["OCR", "LLM", "Web"],
      },
      {
        title: "Pac-Man",
        subtitle: "A variation of the Pac-Man Game",
        description:
          "A Java Pac-Man Game implemented using a Binary Search Tree",
        image: "/projects_pics/pacman.jpg",
        github: "https://github.com/marccrasto/Pac-Man",
        demo: "#",
        tags: ["Python", "CNN", "OpenCV"],
      },
      {
        title: "In a Row",
        subtitle: "Every turn counts. Every line decides",
        description:
          "A game played by two players where they take turns placing tiles on a square board and only win when k tiles are in adjacent positions within the same row, column, or diagonal.",
        image: "/projects_pics/inarow.jpg",
        github: "https://github.com/marccrasto/InARow",
        demo: "#",
        tags: ["VLM", "Safety", "React"],
      },
      {
        title: "Taskly",
        subtitle: "Kanban Board",
        description:
          "Taskly allows you to collaborate and track tasks with an intuitive and easy-to-use interface designed with HCI principles in mind that will streamline your workflow and take the mental strain away from your mind, so you can focus on being the best version of yourself!",
        image: "/projects_pics/taskly.jpg",
        github: "https://github.com/marccrasto/Taskly",
        demo: "#",
        tags: ["VLM", "Safety", "React"],
      },
      {
        title: "Group Chat Messaging Service",
        subtitle: "Kanban Board",
        description:
          "Distributed chat system that efficiently manages communication among multiple users using gRPC.",
        image: "/projects_pics/chatsystem.jpg",
        github: "https://github.com/marccrasto/Group_Chat_Messaging_Service",
        demo: "#",
        tags: ["VLM", "Safety", "React"],
      },
      {
        title: "Traffic Accident Severity Detection",
        subtitle: "From Data to Action: Predicting Traffic Accident Severity for Emergency Response",
        description:
          "This project leverages the Seattle Traffic Collision Dataset to predict traffic accident severity, minor, major, or fatal, using features like weather, road surface, and lighting conditions",
        image: "/projects_pics/trafficseverity.png",
        github: "https://github.com/marccrasto/Traffic_Accident_Severity",
        demo: "#",
        tags: ["VLM", "Safety", "React"],
      }
    ];

    return (
      <div className="welcome-container">
        <div className="topbar">
          <div className="topbar left">
            <button onClick={this.toggleNavbar} className='topbar-btn'>
              <FontAwesomeIcon key={this.state.navbar ? 'x' : 'bars'} className={`menu-icon`} icon={this.state.navbar ? faXmark : faBars}/>
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
              <p>Hover a card to see details + GitHub link.</p>
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
                          className="project-icon-btn"
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="GitHub repository"
                          title="GitHub"
                        >
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
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