import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Search() {
  const [city, setCity] = useState(null);
  const [message, setMessage] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0efb4fc16a9ed98dc0b3aafd8491d6ad&units=metric`;
    axios.get(url).then(displayWeather);

    setMessage(`This is the current weather in ${city}`);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
    setTemperature(`Temperature: ${Math.round(response.data.main.temp)} ºC`);
    setHumidity(`Humidity: ${Math.round(response.data.main.humidity)} %`);
    setWind(`Wind: ${Math.round(response.data.wind.speed)} m/s`);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={changeCity} />
        <input type="submit" value="Search" />
      </form>
      <h2>{message}</h2>
      <ul>
        <li>{temperature}</li>
        <li>{humidity}</li>
        <li>{wind} </li>
      </ul>
    </div>
  );
}
