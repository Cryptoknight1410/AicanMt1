import React from "react";
import Colors from "../../constants/colors";
import  { useEffect } from 'react';
import { motion } from 'framer-motion';
import './TopHeader.css';
function TopHeader() {

  useEffect(() => {
    const animatedElement = document.querySelector('.animated-element');
    animatedElement.classList.add('animate');
  }, []);
  const colors = new Colors();
  return (
    <div className={`w-full ${colors.BgColor}`}>

    <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        style={{width:"100%"}}
        className="animated-element"
        >
     <div className="container mx-auto ">
      <div
        className={`${colors.BgColor} hidden h-12 sm:flex justify-between items-center font-medium`}
        >
        <div className={`${colors.textSecondary} ml-10  text-sm`}>
          Digitize your factory with a free demo now!
        </div>
        <div className={`${colors.textSecondary} mr-10  text-sm cursor-pointer`}>
          Know More&gt;&gt;
        </div>
      </div>
        </div>
      </motion.div>
          </div>
   
  );
}

export default TopHeader;
