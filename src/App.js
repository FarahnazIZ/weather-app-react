import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Singapore" />
      <footer className="text-center">
        <a
          href="https://github.com/FarahnazIZ/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by{" "}
        <a
          href="https://curious-flan-f035bf.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Farahnaz Izadi
        </a>
      </footer>
    </div>
  );
}
