import React from 'react'
import './About_me.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './components/Footer';
import { faBars } from '@fortawesome/free-solid-svg-icons';


class AboutMe extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            navbar: false,
        }

        this.toggleNavbar = this.toggleNavbar.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const scrolled = window.scrollY;
        if (scrolled > 300) {
            this.setState({ showScrollButton: true });
        }
        else {
            this.setState( {showScrollButton: false} );
        }
    }

    scrollToTop = () => {
        window.scrollTo( {top: 0, behavior: 'smooth'} )
    }

    toggleNavbar() {
        this.setState((state) => ({
            navbar: !state.navbar,
            showScrollButton: false
        }));
    }
    
    render() {
        return (
            <div className='welcome-container'>
                <div className='topbar'>
                    <div className='topbar-left'>
                        <button onClick={this.toggleNavbar}>
                            <FontAwesomeIcon className='menu-icon' icon={faBars}/>
                        </button>
                        <div className='site-name'>Marc Crasto</div>
                    </div>
                    <p><a accesskey="c" href="#footer" className='contact'>Contact</a></p>
                </div>
                <div></div>
                <Navbar visibility={this.state.navbar} onClick={this.toggleNavbar}/>
                <Footer/>
                {this.state.showScrollButton && (
                    <button className='scroll-to-top' onClick={this.scrollToTop}>
                        ↑
                    </button>
                )}
            </div>
    );
    }
}