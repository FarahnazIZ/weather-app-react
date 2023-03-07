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
      <div className="p-0">
        <div className="row mb-4">
          <div className="col-7 text-start pe-1">
            <span className="me-2">
              <WeatherIcon code={props.data.icon} size={64} />
            </span>
            <span>
              <TemperatureConvertor temperature={props.data.temperature} />
            </span>
          </div>
          <div className="col-5 info-style text-start pt-3">
            <div>
              Wind: {Math.round(props.data.wind)}{" "}
              <span className="unit">km/h</span>
            </div>
            <div>
              Humidity: {props.data.humidity}
              <span className="unit">%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
