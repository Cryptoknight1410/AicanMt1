import React from "react";
import Colors from "../constants/colors";
let colors = new Colors();
function Footer() {
  return (
    <div className={`${colors.primary} flex justify-around p-20`}>
      <div className="flex flex-col">
        <div className="h-16 w-22 mb-7">
          <img
            classname="w-full object-contain"
            src="./src/assets/aicanlogo2.svg"
          ></img>
        </div>
        <p className="text-white w-64">
          18th floor Zone Startup India, Bombay Stock Exchange PJ Towers, Dalal
          Street-400001
        </p>
        <div className="h-5"></div>
        <p className="text-white">work@aican.co.in</p>
        <div className="h-5"></div>
        <p className="text-white">770992975</p>
        <div className="flex">
          <img
            src="./src/assets/linkdln.svg"
            alt="LinkedIn Profile Picture"
            className="rounded-full border-2 border-solid border-white p-2 m-2"
          />
          <img
            src="./src/assets/linkdln.svg"
            alt="LinkedIn Profile Picture"
            className="rounded-full border-2 border-solid border-white p-2 m-2"
          />
          <img
            src="./src/assets/linkdln.svg"
            alt="LinkedIn Profile Picture"
            className="rounded-full border-2 border-solid border-white p-2 m-2"
          />
        </div>
      </div>
      {/* 2nd column */}
      <div className=" hidden xsm:flex flex-col">
        <div className="h-16 w-22 justify-self-end lg:mb-7 text-white font-semibold pt-9">
          Products
        </div>
        <p className="text-white w-64 mt-1">How it Works</p>
        <p className="text-white w-64 mt-1">Watch a Demo</p>
        <p className="text-white w-64 mt-1">Plans And Pricing</p>
        <p className="text-white w-64 mt-1">Analytics</p>
        <p className="text-white w-64 mt-1">Mobile App</p>
        <p className="text-white w-64 mt-1">Predictive Maintainence </p>
        <p className="text-white w-64 mt-1">Integration </p>
      </div>
      <div className=" hidden xsm:flex flex-col">
        <div className="h-16 w-22 justify-self-end lg:mb-7 text-white font-semibold pt-9">
          Products
        </div>
        <p className="text-white w-64 mt-1">How it Works</p>
        <p className="text-white w-64 mt-1">Watch a Demo</p>
        <p className="text-white w-64 mt-1">Plans And Pricing</p>
        <p className="text-white w-64 mt-1">Analytics</p>
        <p className="text-white w-64 mt-1">Mobile App</p>
        <p className="text-white w-64 mt-1">Predictive Maintainence </p>
        <p className="text-white w-64 mt-1">Integration </p>
      </div>
      <div className=" hidden xsm:flex flex-col">
        <div className="h-16 w-22 justify-self-end lg:mb-7 text-white font-semibold pt-9">
          Products
        </div>
        <p className="text-white w-64 mt-1">How it Works</p>
        <p className="text-white w-64 mt-1">Watch a Demo</p>
        <p className="text-white w-64 mt-1">Plans And Pricing</p>
        <p className="text-white w-64 mt-1">Analytics</p>
        <p className="text-white w-64 mt-1">Mobile App</p>
        <p className="text-white w-64 mt-1">Predictive Maintainence </p>
        <p className="text-white w-64 mt-1">Integration </p>
      </div>
      
    </div>
  );
}

export default Footer;
