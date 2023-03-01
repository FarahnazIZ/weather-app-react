import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setReady(true);
    setForecast(response.data.daily);
  }

  function callDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDate();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  if (ready) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <div>Wed</div>
            <WeatherIcon code="mist-night" size={32} />
            <div className="mt-3">
              <span className="max-temperature">19°</span>
              <span className="min-temperature">15°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let longtitude = props.coordinates.longtitude;
    let latitude = props.coordinates.latitude;
    let apiKey = "892435254bc5d7b0f0663663abo3t153";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longtitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);

    return null;
  }
}
