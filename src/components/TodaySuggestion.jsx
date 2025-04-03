import React from "react";

const TodaySuggestion = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-150 h-20 border-2 border-red-200 bg-gray-200">
        오늘은 흐리고 비가 오네요, 이런 날엔 코딩알려주는 누나 강의를 들어보는건
        어떨까요?
      </div>
      <div className="flex justify-center items-center border-2 border-red-200 w-60 h-20">
        아이콘
      </div>
    </div>
  );
};

export default TodaySuggestion;
