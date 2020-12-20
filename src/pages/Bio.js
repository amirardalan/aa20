import React from 'react'
import { Link } from 'react-router-dom'
import './Bio.scss'
import Footer from '../components/Footer'
import logo from '../img/logo.svg'
import photo from '../img/photo.png'

function Bio() {
    return (
        <div className="Bio Page">
            <div className="Page-heading">
                <Link to="/" aria-label="Home">
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
                        <p><strong>Front-end Developer</strong></p>
                        <p><strong>UI Designer</strong></p>
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
                        <p><a href="mailto:hi@amirardalan.com">hi@amirardalan.com</a></p>
                        <p><a href="http://linkedin.com/in/amirardalan" target="_blank" rel="noreferrer">LinkedIn</a></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Bio;