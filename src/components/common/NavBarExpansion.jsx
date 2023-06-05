import React, { useEffect, useRef, useState } from "react";
import { AiOutlineDown } from "react-icons/all";
import DropDown from "./DropDown";
import { motion, useAnimation } from "framer-motion";
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
        <motion.h2
          className={`font-semibold text-base cursor-pointer`}
          onClick={() => {
            handleClick(items);
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{duration:1}}
        >
          {Object.keys(items)}
        </motion.h2>
        <motion.div
          className="h-3 font-semifold cursor-pointer"
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
        <div className="h-[11px] flex items-center">
  <AiOutlineDown className="h-full w-auto" />
</div>

        </motion.div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          translate={{duration:10}}
        >
          <DropDown items={selectedItem} />
        </motion.div>  )}
         
      

      
    </div>
    </>
    
  );
}

export default NavBarExpansion;
