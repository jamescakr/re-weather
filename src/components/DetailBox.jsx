import React from "react";

const DetailBox = ({ weather }) => {
  const timeFormat = (time) =>
    new Date((time + weather?.timezone) * 1000).toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "UTC",
    });

  return (
    <div>
      <div className="flex">
        <div className="grid grid-cols-2 justify-items-center items-center gap-3 mr-3">
          <div className="bg-[#64FFDA]/50 rounded-xl w-22 h-22 md:w-25 md:h-25 p-2 md:p-3">
            <div className="text-sm pb-3 ">체감 온도</div>
            <div className="text-md md:text-xl">
              {Math.floor(weather?.main?.feels_like)}°C
            </div>
          </div>
          <div className="bg-[#64FFDA]/50 rounded-xl w-22 h-22 md:w-25 md:h-25 p-2 md:p-3">
            <div className="text-sm pb-3 ">습도</div>
            <div className="text-md md:text-xl">{weather?.main?.humidity}%</div>
          </div>
          <div className="bg-[#64FFDA]/50 rounded-xl w-22 h-22 md:w-25 md:h-25 p-2 md:p-3">
            <div className="text-sm pb-3 ">가시거리</div>
            <div className="text-md md:text-xl">
              {(weather?.visibility / 1000).toFixed(1)} km
            </div>
          </div>
          <div className="bg-[#64FFDA]/50 rounded-xl w-22 h-22 md:w-25 md:h-25 p-2 md:p-3">
            <div className="text-sm pb-3 ">시간대</div>
            <div className="text-md md:text-xl">UTC {weather?.timezone / 3600}</div>
          </div>
        </div>

        <div className="grid grid-col-1 gap-3">
          <div className="flex flex-col justify-center bg-[#64FFDA]/50 rounded-xl w-36 h-22 md:w-40 md:h-25 p-3">
            <div className="flex justify-between items-center">
              <span className="text-sm ">일출</span>
              <span className="text-md md:text-xl">
                {timeFormat(weather?.sys?.sunrise)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm ">일몰</span>
              <span className="text-md md:text-xl">
                {timeFormat(weather?.sys?.sunset)}
              </span>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center bg-[#64FFDA]/50 rounded-xl w-36 h-22 md:w-40 md:h-25 p-3">
              <div className="flex justify-between items-center">
                <span className="text-sm ">풍속 </span>
                <span className="text-md md:text-xl">
                  {(weather?.wind?.speed * 3.6).toFixed(1)} km/h
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm ">돌풍</span>
                <span className="text-md md:text-xl">
                  {(weather?.wind?.gust * 3.6).toFixed(1)} km/h
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBox;
