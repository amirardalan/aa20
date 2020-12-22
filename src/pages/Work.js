import React from 'react'
import { Link } from 'react-router-dom'
import './Work.scss'
import Footer from '../components/Footer'
import logo from '../img/logo.svg'
import ReactGA from 'react-ga'

function Work() {

    const HomeLogoButton = () => {
        ReactGA.event({
            category: 'Logo Button',
            action: 'Back to Home Logo Button Clicked'
        })
    }

    const BasicAgencyLink = () => {
        ReactGA.event({
            category: 'Link',
            action: 'BASIC® Agency Link'
        })
    }

    return (
        <div className="Work Page">
            <div className="Page-heading">
                <Link to="/" onClick={HomeLogoButton} aria-label="Home">
                    <img src={logo} className="Page-logo" alt="logo" aria-hidden="true" />
                </Link>
                <h1>Work</h1>
            </div>
            <h2>Selected work</h2>
            <div className="Page-content-wrapper">
                <div className="Page-content">
                    <div className="Content-item">
                        <h3>KEEN<br/> Footwear</h3>
                        <strong>LEAD UI ENGINEER &mdash; 2015-2018</strong>
                        <p>Collaborated with <a className="Text-link" href="https://www.basicagency.com/" target="_blank" rel="noreferrer" onClick={BasicAgencyLink}>BASIC&reg; Agency</a> to deliver a Salesforce Commerce Cloud adaptive ecommerce experience for KEEN. Localized content and shopping functionality for increased international sales and visiblity.</p>
                    </div>
                    <div className="Content-item">
                        <h3>CHROME<br/> Industries</h3>
                        <strong>LEAD UI ENGINEER &mdash; 2015-2018</strong>
                        <p>Contributed to a brand-specific UI/UX experience on a SFCC instance shared with KEEN Footwear. Utilized reusable front-end modules and strict adherance to a living styleguide.</p>
                    </div>
                    <div className="Content-item">
                        <h3>Columbia<br/> Sportswear</h3>
                        <strong>Web Developer I &mdash; 2014-2015</strong>
                        <p>Worked directly with internal Graphic Design, UX and Product Owner teams to deliver responsive, front-end features for Columbia Sportswear's SFCC ecommerce platform. Developed the 2014 Performance Fishing Gear landing page.</p>
                    </div>
                    <div className="Content-item">
                        <h3>Hanna<br/> Andersson</h3>
                        <strong>Agency Consultant &mdash; 2019</strong>
                        <p>Contributed to code for several featured shopping experiences on Hanna Andersson's ecommerce site. Consulted with internal management and graphic designers on design and development considerations.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Work
