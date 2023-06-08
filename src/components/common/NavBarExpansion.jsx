import React, { useEffect, useState, useRef } from "react";
import { AiOutlineDown } from "react-icons/all";
import DropDown from "./DropDown";
import { motion } from "framer-motion";

function NavBarExpansion({ items }) {
  const [selectedItem, setSelectedItem] = useState("");
  const [isHovered, setHovered] = useState(false);
  const navbarRef = useRef("");
  const [isExpanded, setExpanded] = useState(false);
  const submenuRef = useRef("");

  const handleMouseEnter = (item) => {
    setSelectedItem(item);
    setHovered(true);
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setExpanded(false);
  };


  useEffect(()=>{

  },[])
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setHovered(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <nav className=""
      
      ref={navbarRef}  onMouseEnter={() => handleMouseEnter(items)}   onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-row justify-around w-32 p-5 mx-10">
      <div
        className="flex flex-row items-center ml-48"
       
      >
        <motion.h2
          className={`font-semibold text-base cursor-pointer  ml-9 `}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          
          transition={{ duration: 1 }}
        >
          {Object.keys(items)}
        </motion.h2>
        <motion.div
          className="h-3 font-semifold cursor-pointer"
          initial={{ rotate: 0 }}
          animate={{ rotate: isHovered ? 180 : 0 }}
        >
          <div className="h-[11px] flex items-center  pl-4 mr-4 ">
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
          ref={submenuRef}
        
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        >
           <DropDown items={selectedItem} />
          {console.log("DropDown Triggered")}
        </motion.div>
      )}
      </div>
    </nav>
  );
}

export default NavBarExpansion;
