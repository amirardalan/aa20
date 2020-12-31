import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'
import logo from '../img/ghost.svg'
import ReactGA from 'react-ga'

function Home() {

    const HomeButtonPrimary = () => {
        ReactGA.event({
            category: 'Button',
            action: 'View Work Button Clicked'
        })
    }

    return (
        <div className="Home">
            <img src={logo} className="Home-logo" alt="Amir Ardalan Ghost Logo" />
            <h1 className="Home-title">Amir Ardalan</h1>
            <h2 className="Home-subtitle">
                Front-End Engineer {'&'} UI Designer
            </h2>
            <Link to='./work'>
                <button className="Button-primary" onClick={HomeButtonPrimary}>
                    <span className="Button-text">View Work</span>
                </button>
            </Link>
        </div>
    )
}

export default Home