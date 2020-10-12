
import './App.css';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <main>
        <Title />
      </main>

      <header className="App-header">
        <h1>my first React thingy is broken!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          this is an experiment. it is maybe working?
        </p>
        <a
          className="App-link"
          href="https://www.reddit.com/r/reactjs/"
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
