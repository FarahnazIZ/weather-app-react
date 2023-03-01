import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast(props) {
  let longtitude = props.longtitude;
  let latitude = props.latitude;
  let apiKey = "2065f51b78f51fb9f65c3557ebb73d5b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);

  function callDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDate();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function displayForecast(response) {
    let forecastItems = response.data.daily;

    forecastItems.mapping((day, index) => {
      if (index < 6) {
        return callDay(day.time);
      }
    });
  }

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div>Wed</div>
          <WeatherIcon code="01d" size={32} />
          <div className="mt-3">
            <span className="max-temperature">19°</span>
            <span className="min-temperature">15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
