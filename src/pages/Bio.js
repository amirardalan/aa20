import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/ghost.svg'
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
            category: 'Link',
            action: 'Email Link Clicked'
        })
    }
    const LinkedInLink = () => {
        ReactGA.event({
            category: 'Link',
            action: 'LinkedIn Link Clicked'
        })
    }
    const GitHubLink = () => {
        ReactGA.event({
            category: 'Link',
            action: 'GitHub Link Clicked'
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
            <h2>Available for hire {'✓'}</h2>
            <div className="Page-content-wrapper">
                <div className="Page-content">
                    <div className="Content-item sm">
                        <img src={photo} className="Photo" alt="Amir Ardalan Headshot" />
                    </div>
                    <div className="Content-item">
                        <h3>Amir Ardalan</h3>
                        <strong>Front-End Engineer {'&'} UI Designer</strong>
                        <p>15+ years experience</p>
                        <p><a className="Text-link" href="./amir-ardalan-resume.pdf">Download Resume</a></p>
                        <p><a className="Text-link" href="http://github.com/amirardalan" onClick={GitHubLink} target="_blank" rel="noreferrer">GitHub</a></p>
                    </div>
                    <div className="Content-item">
                        <h3>Skills</h3>
                        <p>JavaScript / React / Sass / Git</p>
                        <p>UI Design / Adobe XD</p>
                        <p>Salesforce Commerce Cloud</p>
                        <p>Web Accessibility</p>
                    </div>
                    <div className="Content-item">
                        <h3>Hobbies</h3>
                        <p>Music Production / Ableton Live</p>
                        <p>Soccer / Futsal</p>
                        <p>Magic: The Gathering</p>
                        <p>German Cars</p>
                    </div>
                    <div className="Content-item">
                        <h3>Contact</h3>
                        <p><a className="Text-link" href="mailto:hi@amirardalan.com" onClick={EmailLink}>hi@amirardalan.com</a></p>
                        <p><a className="Text-link" href="http://linkedin.com/in/amirardalan" onClick={LinkedInLink} target="_blank" rel="noreferrer">LinkedIn</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bio;