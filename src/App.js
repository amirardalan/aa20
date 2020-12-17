import logo from './folder.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="folder" />
        <h1 className="App-title">
          Amir Ardalan
        </h1>
        <p>
          UI Designer & Front-end Developer
        </p>
        <button
          className="App-button"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Work
        </button>
      </header>
    </div>
  );
}

export default App;
