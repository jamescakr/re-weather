import React from "react";

const Buttons = () => {
  return (
    <div>
      <div className="flex gap-5">
        <button className="bg-gray-400 rounded-full w-auto h-10 cursor-pointer px-5">
          Current Location
        </button>
        <button className="bg-gray-400 rounded-full w-auto h-10 cursor-pointer px-5">
          Sapporo
        </button>
        <button className="bg-gray-400 rounded-full w-auto h-10 cursor-pointer px-5">
          Singapore
        </button>
        <button className="bg-gray-400 rounded-full w-auto h-10 cursor-pointer px-5">
          Hawaii
        </button>
      </div>
    </div>
  );
};

export default Buttons;
