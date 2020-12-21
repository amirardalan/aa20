import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'
import ReactGA from 'react-ga'

function Footer() {

    const FooterHomeLink = () => {
        ReactGA.event({
            category: 'Link',
            action: 'Footer Home Link'
        })
    }

    return (
        <footer>
            Copyright &copy;
            <span>{(new Date().getFullYear())}</span>
            &mdash; <Link to="/" onClick={FooterHomeLink} className="Text-link">Amir Ardalan</Link>
        </footer>
    )
}

export default Footer