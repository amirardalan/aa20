import React from 'react'
import './Work.scss'
import Footer from '../components/Footer'
import logo from '../logo.svg'

function Work() {
    return (
        <div className="Work Page">
            <div className="Page-heading">
                <img src={logo} className="Page-logo" alt="logo" />
                <h1>Work</h1>
            </div>
            <h2>
                Selected work
            </h2>
            <div className="Page-content-wrapper">
                <div className="Page-content">
                    <div className="Content-item">
                        <h3>KEEN<br/> Footwear</h3>
                        <strong>LEAD UI ENGINEER</strong>
                        <p>Styleguide-driven development</p>
                        <p>Collaborated with BASIC Agency</p>
                        <p>Adaptive design approach</p>
                    </div>
                    <div className="Content-item">
                        <h3>CHROME<br/> Industries</h3>
                        <strong>LEAD UI ENGINEER</strong>
                        <p>Styleguide-driven development</p>
                        <p>Collaborated with BASIC Agency</p>
                        <p>Adaptive design approach</p>
                    </div>
                    <div className="Content-item">
                        <h3>Columbia<br/> Sportswear</h3>
                        <strong>Web Developer I</strong>
                        <p>Front-end development</p>
                        <p>Responsive Design</p>
                        <p>Salesforce Commerce Cloud</p>
                    </div>
                    <div className="Content-item">
                        <h3>Hanna<br/> Andersson</h3>
                        <strong>Agency Consultant</strong>
                        <p>Front-end feature development</p>
                        <p>Collaborated with internal team</p>
                        <p>HTML / Sass / JavaScript</p>
                    </div>
                </div>         
            </div>  
            <Footer />
        </div>
    )
}

export default Work
