import React, { useState } from "react";
import axios from "axios";
import WeatherInformation from "./WeatherInformation";
import Forecast from "./Forecast";
import "./Weather.css";
import Background from "./Background";
import { RotatingLines } from "react-loader-spinner";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function displayWeather(response) {
    setWeather({
      ready: true,
      name: response.data.city,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
      coordinates: response.data.coordinates,
    });
  }

  function search() {
    let apiKey = "892435254bc5d7b0f0663663abo3t153";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function displayCity(props) {
    setCity(props.target.value);
  }

  let form = (
    <form className="input-group mb-3" onSubmit={handleSubmit}>
      <input
        type="search"
        className="form-control"
        placeholder="Type a city"
        onChange={displayCity}
        autoFocus="on"
      />
      <input type="submit" className="btn" id="basic-addon2" value="Search" />
    </form>
  );

  if (weather.ready) {
    return (
      <div className="Weather">
        <section>
          <div className="container">
            <div className="left-content">
              <Background data={weather.icon} />
            </div>
            <div className="right-content">
              {form}
              <WeatherInformation data={weather} />
              <Forecast coordinates={weather.coordinates} />
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    search();

    return (
      <div className="spinner">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );
  }
}
