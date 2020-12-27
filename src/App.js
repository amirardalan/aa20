import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Work from './pages/Work'
import Bio from './pages/Bio'
import ReactGA from 'react-ga'

function App() {

  // Google Analytics
  useEffect(() => {
    ReactGA.initialize('UA-185835431-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

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
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/bio" component={Bio} />
        </Switch>
        <footer>
          <a className="Text-link Mobile-only" href="/amir-ardalan-resume.pdf" onClick={DownloadResumeButton} aria-label="Download resume"> Download Resume {'⤓'}</a>
          <p>
            Copyright &copy;
            <span>{(new Date().getFullYear())}</span>
            {'–'} <Link to="/" onClick={FooterHomeLink} className="Text-link">Amir Ardalan</Link>
          </p>
          <a className="Button-secondary" href="/amir-ardalan-resume.pdf" onClick={DownloadResumeButton} target="_blank" rel="noreferrer" aria-label="Download resume"> Download Resume {'⤓'}</a>
        </footer>
      </Router>
    </div>
  )
}

export default App
