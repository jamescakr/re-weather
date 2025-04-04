import React from "react";

const WeatherBox = ({ weather }) => {
  console.log("weather?", weather);

  return (
    <div>
      <div className="grid grid-col-2 bg-sky-300 rounded-xl w-50 h-50 p-5">
        <div>
          <div className="text-3xl">{weather?.name}</div>
          <div className="text-6xl">{Math.floor(weather?.main?.temp)}°C</div>

          <div className="text-xl">{weather?.weather[0]?.main}</div>
          <div className="flex gap-x-2">
            <div>최고: {Math.floor(weather?.main?.temp_max)}°C</div>
            <div>최저: {Math.floor(weather?.main?.temp_min)}°C</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherBox;
