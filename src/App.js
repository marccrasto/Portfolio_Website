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
    this.meetMe = this.meetMe.bind(this);
  }

  componentDidMount() {
    AOS.init({
      duration: 1000,
      once: true,
    });

    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrolled = window.scrollY;
    if (scrolled > 300) {
      this.setState({ showScrollButton: true });
    } else {
      this.setState({ showScrollButton: false });
    }
  };

  meetMe = () => {
    window.scrollTo({ top: 255, behavior: 'smooth'});
  }

scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

  toggleNavbar() {
    this.setState((state) => ({
      navbar: !state.navbar,
      showScrollButton: false
    }));
  }

  render() {
    return (
      <div className='welcome-container'>
        <div className="topbar">
          <div className='topbar left'>
            <button onClick={this.toggleNavbar}>
              <FontAwesomeIcon className='menu-icon' icon={faBars}/>
            </button>
            <div className="site-name">Marc Crasto</div>
          </div>
          <p><a accesskey="c" href="#footer" className='contact'>Contact</a></p>
        </div>
        <div className="hero-section">
          <h1 data-aos="fade-left" data-aos-delay="150">Hi, I'm Marc Crasto 👋</h1>
          <p data-aos="fade-right" data-aos-delay="300">Aspiring Full-Stack Developer | Passionate about AI & UI</p>
          <a className="cta-button" data-aos="fade-in" data-aos-delay="450" onClick={this.meetMe}>Meet me ↓</a>
        </div>
        <div className={`app ${this.state.navbar ? 'blur': ''}`}>
          <AboutMe />
          <Projects />
          <Academics />
        </div>
        <Navbar visibility={this.state.navbar} onClick={this.toggleNavbar}/>
        <Footer />
        {this.state.showScrollButton && (
          <button className="scroll-to-top" onClick={this.scrollToTop}>
            ↑
          </button>
        )}
      </div>
    );
  } 
}


export default App;
