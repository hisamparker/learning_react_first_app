import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>yy first React thingy!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          this is an experiment. it is maybe working?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          i maybe will learn React? who knows!
        </a>
      </header>
    </div>
  );
}

export default App;
