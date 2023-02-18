import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import "./App.css";

function App(props) {
  let [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [info, setInfo] = useState(false);

  function displayWeather(response) {
    console.log(response.data);
    setInfo(true);
    setWeather({
      name: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      latitude: response.data.coord.lat,
      longtitude: response.data.coord.long,
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

  function start(city) {
    let apiKey = "2065f51b78f51fb9f65c3557ebb73d5b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  let form = (
    <form className="input-group mb-3" onSubmit={handleSubmit}>
      <input
        type="search"
        className="form-control"
        placeholder="Type a city"
        onChange={displayCity}
      />
      <input
        type="submit"
        className="btn btn-primary"
        id="basic-addon2"
        value="Search"
      />
    </form>
  );

  if (info) {
    return (
      <div className="App container border">
        {form}
        <h1>{weather.name}</h1>
        <div className="info-style">{weather.description}</div>
        <div className="row">
          <div className="col-6">
            <img src={weather.icon} className="pb-md-4" alt="weather icon" />
            <span className="temp-style">
              {Math.round(weather.temperature)}℃
            </span>
          </div>
          <div className="col-6 info-style">
            <div>Wind: {Math.round(weather.wind)}km/h</div>
            <div>Humidity: {weather.humidity}%</div>
          </div>
          <div>
            <Forecast
              latitude={weather.latitude}
              longtitude={weather.longtitude}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App container">
        {form}
        <h1>{start("Singapore")}</h1>
      </div>
    );
  }
}

export default App;
