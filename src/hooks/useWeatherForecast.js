import React, { useState } from "react";
import axios from "axios";

const useGetForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState("");

  const getCity = async (city) => {
    const { data } = await axios(
      `${process.env.REACT_APP_CROSS_DOMAIN}/${process.env.REACT_APP_GETCITY_API}${city}&appid=${process.env.REACT_APP_API_KEY}`
    );

    if (!data || data.length === 0) {
      setError("Location not found...");
      setLoading(false);
      return;
    }

    return data;
  };

  const getDailyWeather = async (lat, lon) => {
    const { data } = await axios(
      `${process.env.REACT_APP_GETWEATHER_API}lat=${lat}&lon=${lon}&&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    );

    if (!data || data.length === 0) {
      setError("Something weng wrong. Please refresh the page.");
      setLoading(false);
      return;
    }
    setLoading(false);
    return data;
  };
  const fetchRequest = async (city) => {
    setLoading(true);
    setError(false);
    const response = await getCity(city);

    const data = await getDailyWeather(response[0].lat, response[0].lon);

    setForecast(data);
  };

  return { isError, isLoading, forecast, fetchRequest };
};

export default useGetForecast;
