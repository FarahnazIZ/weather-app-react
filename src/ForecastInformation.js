import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastInformation(props) {
  return (
    <div className="ForecastInformation">
      <div>{props.data.time}</div>
      <WeatherIcon code={props.data.condition.icon} size={32} />
      <div className="mt-3">
        <span className="max-temperature">
          {props.data.temperature.maximum}°
        </span>
        <span className="min-temperature">
          {props.data.temperature.minimum}°
        </span>
      </div>
    </div>
  );
}
