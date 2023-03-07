import React, { useState } from "react";

export default function TemperatureConvertor(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return props.temperature * (9 / 5) + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="TemperatureConvertor d-block d-sm-inline ">
        <span className="temp-style">{Math.round(props.temperature)}</span>
        <span className="position-relative unit">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="TemperatureConvertor d-inline">
        <span className="temp-style">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
