import React from "react";
import { RoundTemperature } from "../utils/helper";

const CurrentForecast = ({ data }) => {
  const { current } = data;
  let weatherIcon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${current.weather[0]["icon"]}.svg`;
  //let weatherIcon = `https://openweathermap.org/img/w/${current.weather[0].icon}.png`;
  return (
    <div className="current-forecast-container">
      <p className="current-day">Today</p>
      <div className="current-day-info">
        <img
          className="current-day-icon"
          src={weatherIcon}
          alt="Weather Icon"
        />

        <div className="current-day-right">
          <span className="current-day-temp">
            {`${RoundTemperature(current.temp)}°`}
          </span>
          <p className="current-day-desc">{current.weather[0].main}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentForecast;
