import React from "react";
import CoAlNu from "../assets/CoAlNu.png";
import Netflix from "../assets/Netflix.png";
import Spotify from "../assets/Spotify.png";

const suggestionByWeather = {
  clear: [
    {
      text: "오늘은 날씨가 맑네요, 이런 날엔 노래와 함께 가벼운 산책을 하면 어떨까요?",
      image: Spotify,
      url: "https://open.spotify.com/",
    },
  ],
  clouds: [
    {
      text: "오늘은 날이 흐리네요, 이런 날엔 코딩알려주는 누나와 함께 공부해 보는건 어떨까요?",
      image: CoAlNu,
      url: "https://codingnoona.thinkific.com/",
    },
  ],
  rain: [
    {
      text: "오늘은 비가 오네요, 넷플릭스에서 보고싶었던 드라마 몰아보기는 어떠세요?",
      image: Netflix,
      url: "https://www.netflix.com/",
    },
  ],
  drizzle: [
    {
      text: "오늘은 비가 오네요, 넷플릭스에서 보고싶었던 드라마 몰아보기는 어떠세요?",
      image: Netflix,
      url: "https://www.netflix.com/",
    },
  ],
  snow: [
    {
      text: "오늘은 눈이 오네요, 넷플릭스에서 보고싶었던 드라마 몰아보기는 어떠세요?",
      image: Netflix,
      url: "https://www.netflix.com/",
    },
  ],
  default: [
    {
      text: "과제는 다 안하셨다면.. 코딩알려주는 누나와 함께 공부해보는건 어떨까요?",
      image: CoAlNu,
    },
  ],
};

const TodaySuggestion = ({ weather }) => {
  const weatherMain = weather?.weather[0]?.main?.toLowerCase();

  let suggestion;
  if (weatherMain === "clear") {
    suggestion = suggestionByWeather.clear[0];
  } else if (weatherMain === "clouds") {
    suggestion = suggestionByWeather.clouds[0];
  } else if (weatherMain === "rain" || weatherMain === "drizzle") {
    suggestion = suggestionByWeather.rain[0];
  } else if (weatherMain === "snow") {
    suggestion = suggestionByWeather.snow[0];
  } else {
    suggestion = suggestionByWeather.default[0];
  }

  return (
    <div className="relative">
      <div className=" bg-[#64FFDA]/50 rounded-xl w-40 h-30 md:h-40 p-3 text-sm sm:text-lg">
        {suggestion.text}
      </div>

      <button
        className="w-40 h-12 rounded-xl cursor-pointer"
        onClick={() => suggestion.url && window.open(suggestion.url, "_blank")}
      >
        <img
          src={suggestion.image}
          className="w-full h-full object-cover pointer-events-none"
        />
      </button>
    </div>
  );
};

export default TodaySuggestion;
