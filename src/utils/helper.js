export const ConvertDate = (data) => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let d = new Date(data * 1000);
  let dayName = days[d.getDay()];

  return dayName.substring(0, 3);
};

export const RoundTemperature = (data) => {
  return Math.round(data.toFixed());
};
