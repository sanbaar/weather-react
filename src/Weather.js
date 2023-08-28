import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in Copenhagen is ${Math.round(response.data.main.temp)}ºC`
    );
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=0efb4fc16a9ed98dc0b3aafd8491d6ad&units=metric`;
  axios.get(url).then(handleResponse);
  return <h2>Hi</h2>;
}
