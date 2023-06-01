import React, { useEffect, useRef, useState } from "react";
import { AiOutlineDown } from "react-icons/all";
import DropDown from "./DropDown";
function NavBarExpansion({ items }) {
  
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
    setOpen(!isOpen);
  };
  const seeChanges = useRef("");

  const handleClickOutside = (event) => {
    if (seeChanges.current && !seeChanges.current.contains(event.target)) {
      setOpen(false);
    }
  };
  useEffect(() => {
 
    seeChanges.current &&
      document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
  return (
    <>
      <div className="flex flex-row justify-around w-32 p-5 m-2 ">
        <div className="flex flex-row items-center " ref={seeChanges}>
          <h2
            ref={seeChanges}
            className={`font-semibold text-base cursor-pointer `}
            onClick={() => {
              handleClick(items);
            }}
          >
            {Object.keys(items)}
          </h2>
          <AiOutlineDown  
            className={`h-3 font-semifold cursor-pointer`}
          ></AiOutlineDown>
        </div>

        {isOpen && <DropDown items={selectedItem}></DropDown>}
      </div>
    </>
  );
}

export default NavBarExpansion;
