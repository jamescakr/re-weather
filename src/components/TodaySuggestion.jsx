import React from "react";
import CoAlNu from "../assets/CoAlNu.png";

const TodaySuggestion = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 z-10 bg-pink-400 rounded-xl w-40 h-50 flex justify-center items-center">
        내일 공개됩니다
      </div>
      <div className=" bg-blue-200 rounded-xl w-40 h-40 p-5">
        오늘은 흐리고 비가 오네요, 이런 날엔 코딩알려주는 누나 강의를 들어보는건
        어떨까요?
      </div>

      <div className="w-40 h-10">
        <img src={CoAlNu} />
      </div>
    </div>
  );
};

export default TodaySuggestion;
