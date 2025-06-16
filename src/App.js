import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import AboutMe from './components/About_me';
import Projects from './components/Projects';
import Academics from './components/Academic_work';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navbar: false
    }

    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  componentDidMount() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }

  toggleNavbar() {
    this.setState((state) => ({
      navbar: !state.navbar
    }));
  }

  render() {
    return (
      <div className='welcome-container'>
        <div className="topbar">
          <button onClick={this.toggleNavbar}>
            <FontAwesomeIcon className='menu-icon' icon={faBars}/>
          </button>
          <div className="site-name">Marc Crasto</div>
        </div>
        <div className="hero-section">
          <h1>Hi, I'm Marc Crasto 👋</h1>
          <p>Aspiring Full-Stack Developer | Passionate about AI & UI</p>
          <a href="#projects" className="cta-button">View My Work ↓</a>
        </div>
        <div className={`app ${this.state.navbar ? 'blur': ''}`}>
          <AboutMe />
          <Projects />
          <Academics />
        </div>
        <Navbar visibility={this.state.navbar} onClick={this.toggleNavbar}/>
        <Footer />
      </div>
    );
  } 
}


export default App;
