import React from "react";
import WeatherBody from "./components/WeatherBody";
import "./styles.css";
import weatherData from "./weatherData";

console.log(weatherData)


const weather = weatherData.map((element, index) => {
  return <WeatherBody {...element} key={index} />
})


export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
    <section>{weather}</section>
    </div>





  );
}
