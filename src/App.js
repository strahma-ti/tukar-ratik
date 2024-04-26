import logo from "./logo.svg";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 className="text-red-600 hover:scale-150 transition duration-1000 cursor-pointer hover:rotate-[360deg] animate-pulse">
          Hello tukaRatik!
        </h1>
      </header>
    </div>
  );
}

export default App;
