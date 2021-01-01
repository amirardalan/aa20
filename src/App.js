import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import Routes from './components/Routes'

function App() {

  // Google Analytics
  useEffect(() => {
    ReactGA.initialize('UA-185835431-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <div className="App">
      <Routes />
    </div>
  )
}

export default App
