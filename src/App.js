import Nav from './components/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import Bio from './pages/Bio'

function App() {
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
      <footer>Copyright &copy; 2020 &mdash; Amir Ardalan</footer>
    </div>
  )
}

export default App
