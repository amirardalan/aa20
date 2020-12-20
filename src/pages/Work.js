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
                Selected works from 2014 - 2020
            </h2>
            <div className="Page-content-wrapper">
                <div className="Page-content">
                    <div className="Content-item">
                        <h3>KEEN<br/> Footwear</h3>
                        <strong>LEAD UI ENGINEER</strong>
                        <p>Salesforce Commerce Cloud</p>
                        <p>UI design</p>
                        <p>HTML / Sass / JavaScript</p>
                        <p>Adaptive design</p>
                    </div>
                    <div className="Content-item">
                        <h3>CHROME<br/> Industries</h3>
                        <strong>LEAD UI ENGINEER</strong>
                        <p>Salesforce Commerce Cloud</p>
                        <p>UI design</p>
                        <p>HTML / Sass / JavaScript</p>
                        <p>Adaptive design</p>
                    </div>
                    <div className="Content-item">
                        <h3>Columbia<br/> Sportswear</h3>
                        <strong>LEAD UI ENGINEER</strong>
                        <p>Salesforce Commerce Cloud</p>
                        <p>UI design</p>
                        <p>HTML / Sass / JavaScript</p>
                        <p>Adaptive design</p>
                    </div>
                    <div className="Content-item">
                        <h3>Hanna<br/> Andersson</h3>
                        <strong>LEAD UI ENGINEER</strong>
                        <p>Salesforce Commerce Cloud</p>
                        <p>UI design</p>
                        <p>HTML / Sass / JavaScript</p>
                        <p>Adaptive design</p>
                    </div>
                </div>         
            </div>  
            <Footer />
        </div>
    )
}

export default Work
