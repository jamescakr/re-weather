import React, { useEffect, useState } from "react";
import WeatherBox from "./components/WeatherBox";
import Buttons from "./components/Buttons";
import DetailBox from "./components/DetailBox";
import TodaySuggestion from "./components/TodaySuggestion";

const apiKey = import.meta.env.VITE_API_KEY;

const App = () => {
  const [weather, getWeather] = useState(null);
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    let response = await fetch(api);
    let data = await response.json();
    getWeather(data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-y-10">
      <div className="flex gap-x-5">
        <WeatherBox weather={weather} />
        <TodaySuggestion />
      </div>

      <DetailBox weather={weather} />
      <Buttons />
    </div>
  );
};

export default App;
