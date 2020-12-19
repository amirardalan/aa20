import React from 'react'
import './Footer.scss'

function Footer() {
    return (
        <footer>
            Copyright &copy;
            <span>{(new Date().getFullYear())}</span>
            &mdash; <a className="Text-link" href="/">Amir Ardalan</a>
        </footer>
    )
}

export default Footer