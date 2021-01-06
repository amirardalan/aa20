import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from '../pages/Home'
import Work from '../pages/Work'
import Bio from '../pages/Bio'
import Footer from './Footer'

function Routes() {

  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/bio" component={Bio} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;