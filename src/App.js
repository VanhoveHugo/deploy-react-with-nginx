import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Configuration d'un VPS avec Nginx & React
        </p>
        <a
          className="App-link"
          href="https://hugov.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
      </header>
    </div>
  );
}

export default App;
