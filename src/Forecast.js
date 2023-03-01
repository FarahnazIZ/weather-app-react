import React, { useState } from "react";
import axios from "axios";
import ForecastInformation from "./ForecastInformation";
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
            <ForecastInformation data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiKey = "892435254bc5d7b0f0663663abo3t153";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);

    return null;
  }
}
