import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });

  function showTemp(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      desc: response.data.weather[0].description,
      city: response.data.name,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: "Wednesday 07:00",
    });
  }

  if (weather.ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City.."
                className="form-control"
                autoFocus="on"
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

        <h1> {weather.city}</h1>
        <ul>
          <li>{weather.date}</li>
          <li className="text-capitalize"> {weather.desc}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weather.iconUrl}
                alt={weather.desc}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature"> {weather.temperature}</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li> Humidity: {weather.humidity}%</li>
              <li>Wind:{weather.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `8613fc13ef9e495cb6053e94849faf9d`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(showTemp);

    return "Loading...";
  }
}
