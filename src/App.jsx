import React, { useEffect, useState } from "react";
import WeatherBox from "./components/WeatherBox";
import Buttons from "./components/Buttons";
import TodaySuggestion from "./components/TodaySuggestion";

const apiKey = import.meta.env.VITE_API_KEY;

//해야할일
//1. 앱실행되면 현재 날씨를 보여줌 >> 가운데 화면안 구성 : 현재위치,기온,풍속 등
//2. 다음줄 : 도시별 버튼 >> 현재위치 버튼, 서울, 주요도시 2개 추가
//3. 다음줄 : 날씨별 제안사항 >> sunny:음악과함께 야외활동, snow,rain:강의듣기, cloud,그외:영화
//3-1 할일별 링크 걸기 (spotify, 코알누 강의링크, 넷플릭스)
//4. (옵션)다음줄 : 시간대별 날씨 보여주기
//추가사항: 날씨에따라 배경이 바뀜, 로딩스피너

const App = () => {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    const api = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    let response = await fetch(api);
    let data = await response.json();
    console.log("data", data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-y-10">
      <TodaySuggestion />
      <WeatherBox />
      <Buttons />
    </div>
  );
};

export default App;
