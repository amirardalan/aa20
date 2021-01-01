import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'
import ReactGA from 'react-ga'

function Footer() {

    const FooterHomeLink = () => {
        ReactGA.event({
            category: 'Link',
            action: 'Footer Home Link'
        })
      }
    
      const DownloadResumeButton = () => {
        ReactGA.event({
            category: 'Button',
            action: 'Download Resume Button'
        })
      }

    return (
        <footer>
            <a className="Text-link Mobile-only" href="/amir-ardalan-resume.pdf" onClick={DownloadResumeButton} aria-label="Download resume"> Download Resume {'⤓'}</a>
            <p>
            Copyright &copy;
            <span>{(new Date().getFullYear())}</span>
            {'–'} <Link to="/" onClick={FooterHomeLink} className="Text-link">Amir Ardalan</Link>
            </p>
            <a className="Button-secondary" href="/amir-ardalan-resume.pdf" onClick={DownloadResumeButton} target="_blank" rel="noreferrer" aria-label="Download resume"> Download Resume {'⤓'}</a>
        </footer>
    )
}

export default Footer