import React from "react";
import DateCalculator from "./DateCalculator";
import WeatherIcon from "./WeatherIcon";
import TemperatureConvertor from "./TemperatureConvertor";

export default function WeatherInformation(props) {
  return (
    <div className="WeatherInformation">
      <h1>{props.data.name}</h1>
      <div className="info-style">
        <DateCalculator date={props.data.date} />
      </div>
      <div className="info-style text-capitalize">{props.data.description}</div>
      <div className="container p-0">
        <div className="row">
          <div className="col-6 text-start">
            <WeatherIcon code={props.data.icon} />
            <TemperatureConvertor temperature={props.data.temperature} />
          </div>
          <div className="col-6 text-start info-style">
            <div>Wind: {Math.round(props.data.wind)} km/h</div>
            <div>Humidity: {props.data.humidity}%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
