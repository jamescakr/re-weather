import React, { useEffect, useState } from "react";
import WeatherBox from "./components/WeatherBox";
import Buttons from "./components/Buttons";
import DetailBox from "./components/DetailBox";
import TodaySuggestion from "./components/TodaySuggestion";
import ClipLoader from "react-spinners/ClipLoader";

const apiKey = import.meta.env.VITE_API_KEY;

const App = () => {
  const [weather, getWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeButton, setActiveButton] = useState(null);
  const cities = ["Vancouver", "Calgary", "Singapore", "Hawaii", "Peru", "Montreal"];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    setLoading(true);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error("응답이 올바르지 않습니다.");
      }
      let data = await response.json();
      getWeather(data);
    } catch (error) {
      console.log("오류 발생", error);
    } finally {
      setLoading(false);
    }
  };

  const getWeatherByCities = async () => {
    setLoading(true);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error("응답이 올바르지 않습니다");
      }
      let data = await response.json();
      getWeather(data);
    } catch (error) {
      console.log("오류 발생", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    {
      city === "" ? getCurrentLocation() : getWeatherByCities();
    }
  }, [city]);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader
            color="#64FFDA"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen gap-y-4 md:gap-y-10">
          <div className="flex gap-x-5">
            <WeatherBox weather={weather} />
            <TodaySuggestion weather={weather} />
          </div>

          <DetailBox weather={weather} />
          <Buttons
            cities={cities}
            setCity={setCity}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            getCurrentLocation={getCurrentLocation}
          />
        </div>
      )}
    </div>
  );
};

export default App;
