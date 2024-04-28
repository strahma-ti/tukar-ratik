import logo from "./logo.svg";
import "./styles/App.css";
import Footer from "./components/Fragments/Footer/Footer";
// import { Button } from "./components/Elements/Button/Button";

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
        {/* <Button
          className="common-pointer cursor-pointer mx-auto mb-20 mt-20 text-center min-w-[198px] md:min-w-[198px] text-lg tracking-[-0.18px] transition-transform duration-300 transform hover:color-hover sm:text-sm rounded-full"
          shape="round"
          variant="fill"
          color="default"
        >
          Submit
        </Button> */}
        <h1 className="text-red-600 hover:scale-150 transition duration-1000 cursor-pointer hover:rotate-[360deg] animate-pulse font-sans">
          Hello tukaRatik!
        </h1>
        <Footer />
      </header>
    </div>
  );
}

export default App;
