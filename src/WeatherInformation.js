import React from "react";
import DateCalculator from "./DateCalculator";

export default function WeatherInformation(props) {
  return (
    <div className="WeatherInformation">
      <h1>{props.data.name}</h1>
      <div className="info-style">
        <DateCalculator date={props.data.date} />
      </div>
      <div className="info-style text-capitalize">{props.data.description}</div>
      <div className="row">
        <div className="col-6">
          <img
            src={props.data.icon}
            className="pb-md-4"
            alt={props.data.description}
          />
          <span className="temp-style">
            {Math.round(props.data.temperature)}℃
          </span>
        </div>
        <div className="col-6 info-style">
          <div>Wind: {Math.round(props.data.wind)}km/h</div>
          <div>Humidity: {props.data.humidity}%</div>
        </div>
      </div>
    </div>
  );
}
