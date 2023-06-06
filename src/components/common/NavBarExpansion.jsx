import React, { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/all";
import DropDown from "./DropDown";
import { motion } from "framer-motion";

function NavBarExpansion({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = (item) => {
    setSelectedItem(item);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="flex flex-row justify-around w-32 p-5 mx-10"
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex flex-row items-center"
        onMouseEnter={() => handleMouseEnter(items)}
      >
        <motion.h2
          className={`font-semibold text-base cursor-pointer`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 1 }}
        >
          {Object.keys(items)}
        </motion.h2>
        <motion.div
          className="h-3 font-semifold cursor-pointer"
          initial={{ rotate: 0 }}
          animate={{ rotate: isHovered ? 180 : 0 }}
        >
          <div className="h-[15px] flex items-center font-bold">
            <AiOutlineDown className="h-full w-auto" />
          </div>
        </motion.div>
      </div>

      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          translate={{ duration: 10 }}
        >
          <DropDown items={selectedItem} />
        </motion.div>
      )}
    </div>
  );
}

export default NavBarExpansion;
