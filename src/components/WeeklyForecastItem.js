import React from "react";
import { ConvertDate, RoundTemperature } from "../utils/helper";

const WeeklyForecastItem = ({ data }) => {
  let weatherIcon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0]["icon"]}.svg`;
  return (
    <div className="weekly-container-item">
      <span className="weekly-date">{ConvertDate(data.dt)}</span>
      <img className="weekly-icon" src={weatherIcon} alt="Weather Icon" />
      <span className="weekly-temp">
        {" "}
        {`${RoundTemperature(data.temp.day)}°`}
      </span>
    </div>
  );
};

export default WeeklyForecastItem;
