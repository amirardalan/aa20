import React from 'react'
import './Bio.scss'
import Footer from '../components/Footer'
import logo from '../logo.svg'

function Bio() {
    return (
        <div className="Bio Page">
            <div className="Page-heading">
                <img src={logo} className="Page-logo" alt="logo" />
                <h1>Bio</h1>
            </div>
            <h2>Currently available for hire ✓</h2>
            <div className="Page-content-wrapper">
                <div className="Page-content">
                    <div className="Content-item">
                        <h3>Amir Ardalan</h3>
                        <strong>Front-end Developer & UI Designer</strong>
                        <p>16+ Years professional experience.</p>
                    </div>
                    <div className="Content-item">
                        <h3>Skills</h3>
                        <strong>JavaScript / React / Sass</strong>
                        <p>Salesforce Commerce Cloud</p>
                        <p>User Interface Design</p>
                    </div>
                    <div className="Content-item">
                        <h3>Hobbies</h3>
                        <strong>Music Production</strong>
                        <p>Reading</p>
                        <p>Soccer</p>
                        <p>Reading</p>
                        <p>Rocket League</p>
                    </div>
                    <div className="Content-item">
                        <h3>Contact</h3>
                        <strong><a href="mailto:hi@amirardalan.com">hi@amirardalan.com</a></strong>
                        <p><a href="http://linkedin.com/in/amirardalan" target="_blank" rel="noreferrer">LinkedIn</a></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Bio;