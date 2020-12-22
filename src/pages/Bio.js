import React from 'react'
import { Link } from 'react-router-dom'
import './Bio.scss'
import Footer from '../components/Footer'
import logo from '../img/logo.svg'
import photo from '../img/photo.png'
import ReactGA from 'react-ga'

function Bio() {

    const HomeLogoButton = () => {
        ReactGA.event({
            category: 'Logo Button',
            action: 'Back to Home Logo Button Clicked'
        })
    }
    const EmailLink = () => {
        ReactGA.event({
            category: 'Email Link',
            action: 'Email Link Clicked'
        })
    }
    const LinkedInLink = () => {
        ReactGA.event({
            category: 'LinkedIn Link',
            action: 'LinkedIn Link Clicked'
        })
    }

    return (
        <div className="Bio Page">
            <div className="Page-heading">
                <Link to="/" onClick={HomeLogoButton} aria-label="Home">
                    <img src={logo} className="Page-logo" alt="logo" aria-hidden="true" />
                </Link>
                <h1>Bio</h1>
            </div>
            <h2>Available for hire ✓</h2>
            <div className="Page-content-wrapper">
                <div className="Page-content">
                    <div className="Content-item sm">
                        <img src={photo} className="Bio-photo" alt="Amir Ardalan Headshot" />
                    </div>
                    <div className="Content-item">
                        <h3>Amir Ardalan</h3>
                        <strong>Front-end Developer <br /> UI Designer</strong>
                        <p>16+ Years professional experience.</p>
                    </div>
                    <div className="Content-item">
                        <h3>Skills</h3>
                        <p>JavaScript / React / Sass</p>
                        <p>User Interface Design</p>
                        <p>Salesforce Commerce Cloud</p>
                    </div>
                    <div className="Content-item">
                        <h3>Hobbies</h3>
                        <p>Music Production (Ableton)</p>
                        <p>Non-fiction Reading</p>
                        <p>Soccer / Futsal</p>
                        <p>German Cars</p>
                        <p>Rocket League</p>
                    </div>
                    <div className="Content-item">
                        <h3>Contact</h3>
                        <p><a href="mailto:hi@amirardalan.com" onClick={EmailLink}>hi@amirardalan.com</a></p>
                        <p><a href="http://linkedin.com/in/amirardalan" onClick={LinkedInLink} target="_blank" rel="noreferrer">LinkedIn</a></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Bio;