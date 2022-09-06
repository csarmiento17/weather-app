import React from "react";
import Navigation from "./Navigation";
import CurrentForecast from "./CurrentForecast";
import WeeklyForecast from "./WeeklyForecast";
import Loader from "./Loader";
import Error from "./Error";
import useWeatherForecast from "../hooks/useWeatherForecast";

const Container = () => {
  const { isError, isLoading, forecast, fetchRequest } = useWeatherForecast();

  const onSubmitCity = (value) => {
    fetchRequest(value);
  };

  return (
    <>
      <Navigation submitCity={onSubmitCity} />
      <div className="container">
        {isLoading && <Loader />}
        {isError && <Error message={isError} />}

        {!isError && !isLoading && forecast && (
          <CurrentForecast data={forecast} />
        )}
        {!isError && !isLoading && forecast && (
          <WeeklyForecast data={forecast} />
        )}
      </div>
    </>
  );
};

export default Container;
