import React from "react";
import Weather from "./Weather";
import "./App.css";
import Background from "./Background";

export default function App() {
  return (
    <div className="App">
      <Background />
      <div className="content">
        <Weather defaultCity="Singapore" />
        <div className="text-center mt-3">
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
        </div>
      </div>
    </div>
  );
}
