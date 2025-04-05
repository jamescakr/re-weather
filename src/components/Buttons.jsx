import React from "react";

const Buttons = ({
  cities,
  setCity,
  activeButton,
  setActiveButton,
  getCurrentLocation,
}) => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        <button
          className={`rounded-xl w-auto h-10 cursor-pointer px-5 text-sm md:text-lg ${
            activeButton === "current"
              ? "bg-[#64FFDA] text-[#0A192F]"
              : "bg-[#0A192F] text-[#64FFDA]"
          }`}
          onClick={() => {
            setActiveButton("current");
            getCurrentLocation();
          }}
        >
          Current Location
        </button>

        {cities.map((city, index) => (
          <button
            key={index}
            className={`rounded-xl w-auto h-10 cursor-pointer px-5 text-sm md:text-lg ${
              activeButton === index
                ? "bg-[#64FFDA] text-[#0A192F]"
                : "bg-[#0A192F] text-[#64FFDA]"
            }`}
            onClick={() => {
              setCity(city);
              setActiveButton(index);
            }}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Buttons;
