import logo from "./logo.svg";
import Home from "./components/Home/Home";
import "./App.css";
import Header from "./components/Header/Header";
function App() {
  return (
    <div>
      <Header/>
      <Home />
      <div>TEST DIV</div>
    </div>
  );
  /*<div className="App">
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
      </header>
    </div>
  );*/
}

export default App;
