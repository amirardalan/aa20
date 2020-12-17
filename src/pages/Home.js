import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
import logo from '../folder.svg'

function Home() {
    return (
        <div className="Home">
            <img src={logo} className="Home-logo" alt="folder" />
            <h1 className="Home-title">
                Amir Ardalan
            </h1>
            <p className="Home-subtitle">
            UI Designer & Front-end Developer
            </p>
            <Link to='./work'>
                <button className="Home-button">
                    View Work
                </button>
            </Link>
        </div>
    )
}

export default Home