import React, { useState, useRef, useEffect } from "react";
import { AiOutlineDown } from "react-icons/all";

function DropDown({ items }) {
  const [isDropDownOpen, setDropDown] = useState(false);
  const keys = Object.keys(items);
  const area = useRef(null);
  const handleClickOutside = (event) => {
    if (area.current && !area.current.contains(event.target)) {
      setDropDown(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <div className="relative flex justify-around" style={{width: "10rem"}}>
      <div
        ref={area}
        className="flex items-center cursor-pointer font-semibold sm:text-md text-gray-700  lg:text-xl"
        onClick={() => setDropDown(!isDropDownOpen)}
      >
        <div>{Object.keys(items)}</div>
        <div>
          <AiOutlineDown className="stroke-[50px] h-3"></AiOutlineDown>
        </div>
      </div>

      {isDropDownOpen && (
        <div className="absolute z-50 mt-2 py-2 bg-white border border-gray-300 rounded-lg shadow-lg">
          {items[keys].map((value, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-lg "
              style={{ minWidth: "150px" }}
            >
              {value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDown;
