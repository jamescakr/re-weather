import React from "react";

const WeatherBox = ({ weather }) => {
  console.log("weather?", weather);

  return (
    <div>
      <div className="rounded-xl bg-[#64FFDA]/50 w-40 h-40 md:w-50 md:h-50 p-2 md:p-5">
        <div className="space-y-1">
          <div className="text-2xl md:text-3xl">{weather?.name}</div>
          <div className="text-3xl md:text-5xl">
            {Math.floor(weather?.main?.temp)}°C
          </div>

          <div className="text-2xl md:text-3xl bg-blue-500 rounded-xl flex justify-center items-center w-auto md:w-auto h-10 md:h-12">
            {weather?.weather[0]?.main}
          </div>
          <div className="flex gap-x-2 text-sm md:text-md">
            <div>최고: {Math.floor(weather?.main?.temp_max)}°C</div>
            <div>최저: {Math.floor(weather?.main?.temp_min)}°C</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherBox;
