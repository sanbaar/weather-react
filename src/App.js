import "./App.css";
import Weather from "./Weather";
import React from "react";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Weather App</h1>
        <Weather />
      </header>
      <footer className="App-footer">
        <a
          href="https://github.com/sanbaar/weather-react.git"
          target="blank_"
          className="App-link"
        >
          Open-source code{" "}
        </a>
        by Sandra B.A.
      </footer>
    </div>
  );
}

export default App;
