import React from "react";

export default function Background(props) {
  const codeMapping = {
    "clear-sky-day": require(`./img/clear-sky-day.jpg`),
    "clear-sky-night": require(`./img/clear-sky-night.jpg`),
    "few-clouds-day": require(`./img/few-clouds-day.jpg`),
    "few-clouds-night": require(`./img/few-clouds-night.jpg`),
    "scattered-clouds-day": require(`./img/scattered-clouds-day.jpg`),
    "scattered-clouds-night": require(`./img/scattered-clouds-night.jpg`),
    "broken-clouds-day": require(`./img/broken-clouds-day.jpg`),
    "broken-clouds-night": require(`./img/broken-clouds-night.jpg`),
    "shower-rain-day": require(`./img/shower-rain-day.jpg`),
    "shower-rain-night": require(`./img/shower-rain-night.jpg`),
    "rain-day": require(`./img/rain-day.jpg`),
    "rain-night": require(`./img/rain-night.jpg`),
    "thunderstorm-day": require(`./img/thunderstorm-day.jpg`),
    "thunderstorm-night": require(`./img/thunderstorm-night.jpg`),
    "snow-day": require(`./img/snow-day.jpg`),
    "snow-night": require(`./img/snow-night.jpg`),
    "mist-day": require(`./img/mist-day.jpg`),
    "mist-night": require(`./img/mist-night.jpg`),
  };

  return (
    <div className="Background">
      <img src={codeMapping[props.data]} alt="" />
    </div>
  );
}
