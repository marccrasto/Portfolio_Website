import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import AboutMe from './components/About_me';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navbar: false
    }

    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState((state) => ({
      navbar: !state.navbar
    }));
  }

  render() {
    return (
      <div className='welcome-container'>
        <div className={`app ${this.state.navbar ? 'blur': ''}`}>
          <button onClick={this.toggleNavbar}><FontAwesomeIcon className='menu-icon' icon={faBars}/></button>
          <AboutMe />
        </div>
        <Navbar visibility={this.state.navbar} onClick={this.toggleNavbar}/>
      </div>
    );
  } 
}


export default App;
