import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from './App'
import './index.scss'
import Nav from './components/Nav'
import Home from './pages/Home'
import Work from './pages/Work'
import Bio from './pages/Bio'
import GA from './utils/GoogleAnalytics'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      { GA.init() && <GA.RouteTracker /> }
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/bio" component={Bio} />
      </Switch>
    </Router>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)