import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/bio" component={Bio} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
