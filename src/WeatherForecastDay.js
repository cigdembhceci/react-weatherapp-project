import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }

  return (
    <div>
      <div className="forecastDay">{day()}</div>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          className="float-left"
        />
      </div>
      <div className="forecastTemp">
        <span className="forecastTemp-max">
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="forecastTemp-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
