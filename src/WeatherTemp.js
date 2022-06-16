import React, { useState } from "react";
import "./WeatherTemp.css";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemp">
        <div className="temperature">{Math.round(props.fahrenheit)} </div>
        <div className="unit">
          °F|
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </div>
      </div>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <div className="WeatherTemp">
        <div className="temperature">{Math.round(celsius)}</div>
        <div className="unit">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
          |°C
        </div>
      </div>
    );
  }
}
