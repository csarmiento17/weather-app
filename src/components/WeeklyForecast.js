import React from "react";
import WeeklyForecastItem from "./WeeklyForecastItem";

const WeeklyForecast = ({ data }) => {
  const { daily } = data;

  return (
    <div className="weekly-container">
      {daily.slice(1, 5).map((item, idx) => {
        return <WeeklyForecastItem data={item} key={idx} />;
      })}
    </div>
  );
};

export default WeeklyForecast;
