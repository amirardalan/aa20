import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'
import Footer from '../components/Footer'
import logo from '../img/logo.svg'
import ReactGA from 'react-ga'

function Home() {

    const HomeButtonPrimary= () => {
        ReactGA.event({
            category: 'Button',
            action: 'View Work Button Clicked'
        })
    }

    return (
        <>
            <div className="Home">
                <img src={logo} className="Home-logo" alt="logo" />
                <h1 className="Home-title">
                    Amir Ardalan
                </h1>
                <p className="Home-subtitle">
                UI Designer & Front-end Developer
                </p>
                <Link to='./work'>
                    <button className="Button-primary" onClick={HomeButtonPrimary}>
                        View Work
                    </button>
                </Link>
            </div>
            <Footer />
        </>
    )
}

export default Home