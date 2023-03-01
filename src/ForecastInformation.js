import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastInformation(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function callDay() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDate();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="ForecastInformation">
      <div>{callDay()}</div>
      <WeatherIcon code={props.data.condition.icon} size={32} />
      <div className="mt-3">
        <span className="max-temperature">{maxTemperature()}</span>
        <span className="min-temperature">{minTemperature()}</span>
      </div>
    </div>
  );
}
