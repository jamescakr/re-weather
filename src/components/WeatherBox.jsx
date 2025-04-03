import React from "react";

const WeatherBox = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center bg-blue-200 rounded-xl w-100 h-60">
          <div>현재 위치</div>
          <div>현재 기온</div>
          <div>현재 날씨</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherBox;
