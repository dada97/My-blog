import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ThreeCanvas from "./components/Three/ThreeCanvas";
import PageWrapper from "./components/pages/PageWrapper";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <PageWrapper></PageWrapper>
      <ThreeCanvas></ThreeCanvas>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
