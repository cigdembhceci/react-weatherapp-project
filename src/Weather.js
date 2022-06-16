import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function showTemp(response) {
    setWeather({
      ready: true,
      coord: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      desc: response.data.weather[0].description,
      city: response.data.name,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }
  function search() {
    const apiKey = `8c378db8471f1cb632721fb78d722517`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(showTemp);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="Submit"
                defaultValue="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherData data={weather} />
        <WeatherForecast coord={weather.coord} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
