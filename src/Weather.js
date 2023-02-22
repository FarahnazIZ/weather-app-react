import React, { useState } from "react";
import axios from "axios";
import WeatherInformation from "./WeatherInformation";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState({ ready: false });

  function displayWeather(response) {
    setWeather({
      ready: true,
      name: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      latitude: response.data.coord.lat,
      longtitude: response.data.coord.lon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "2065f51b78f51fb9f65c3557ebb73d5b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
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
      <input
        type="submit"
        className="btn btn-primary"
        id="basic-addon2"
        value="Search"
      />
    </form>
  );

  if (weather.ready) {
    return (
      <div className="Weather container border">
        {form}
        <WeatherInformation data={weather} />
      </div>
    );
  } else {
    let apiKey = "2065f51b78f51fb9f65c3557ebb73d5b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);

    return (
      <div class="d-flex justify-content-center">
        <div className="spinner-border mt-5" role="status"></div>
      </div>
    );
  }
}
