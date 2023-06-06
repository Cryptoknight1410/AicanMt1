import React from "react";
import { Link } from "react-router-dom";
import Colors from "../../constants/colors";
// import '../../assets/Applications/'
let colors = new Colors();
function Footer() {
  return (
    <>
      <div className={`${colors.BgColor} flex justify-around p-20 `}>
        <div className={`flex flex-col ${colors.grayText}`}>
          <div className="h-16 w-22 mb-7 z-40">
            <img
              classname="w-full  object-contain"
              src="/assets/aicanlogo2.svg"
            ></img>
          </div>
          <p className={` w-64 text-sm mt-9 ${colors.grayText}`}>
          18th floor, Zone Startup India, Bombay Stock Exchange, PJ Towers, Dalal Street-400001
          </p>
          <div className="h-5"></div>
          <p className=" text-sm">work@aican.co.in</p>
          <div className="h-5"></div>
          <p className="">7709792975</p>
          <div className="flex">
            <img
              src="/assets/linkdln.svg"
              alt="LinkedIn Profile Picture"
              className="rounded-full border-2 border-solid border-white p-2 m-2"
            />
            <img
              src="/assets/twitter.svg"
              alt="LinkedIn Profile Picture"
              className="rounded-full border-2 border-solid border-white p-2 m-2"
            />
            <img
              src="/assets/youtube.svg"
              alt="Youtube Profile Picture"
              className="rounded-full border-2 border-solid border-white p-2 m-2"
            />
          </div>
           <div className={`mt-9 ${colors.textSecondary}`}>© Copyright 2023 AICAN Private Limited » <span className={`${colors.textGreenColor}`}>Privacy</span> </div> 
        </div>
        {/* 2nd column */}
        <div className={`hidden xsm:flex flex-col ${colors.grayText}`}>
          <div className="h-16 w-22 justify-self-end lg:mb-7 text-white font-semibold pt-9 z-40">
            Features
          </div>
          <div className="text-sm">
            <a href="/Application/ErrorTracing"><p className=" w-64 mt-1 leading-loose mb-3">Error Tracing </p></a>
            <a href="/Application/WorkerAnalytics"><p className=" w-64 mt-1 leading-loose mb-3">Worker Analytics </p></a>
            <a href="/Application/Inventory"><p className=" w-64 mt-1 leading-loose mb-3">Inventory </p></a>
            <a href="/Application/MachineHealth"><p className=" w-64 mt-1 leading-loose mb-3">Machine Health </p></a>
          
          
         
           </div> 
        </div>
        <div className={`hidden xsm:flex flex-col ${colors.grayText}`}>
          <div className="h-16 w-22 justify-self-end lg:mb-7 text-white font-semibold pt-9">
            Industries
          </div>
          <div className="text-sm">
          <a href="/Application/ErrorTracing"><p className=" w-64 mt-1 leading-loose mb-3">Automobile </p></a>
          <a href="/Application/ErrorTracing"><p className=" w-64 mt-1 leading-loose mb-3">Packaging </p></a>
          <a href="/Application/ErrorTracing"><p className=" w-64 mt-1 leading-loose mb-3">Electronics </p></a>
          <a href="/Application/ErrorTracing"><p className=" w-64 mt-1 leading-loose mb-3">Pharmaeuticals </p></a>
          
           </div> 
        </div>
        <div className={`hidden xsm:flex flex-col ${colors.grayText}`}>
          <div className="h-16 w-22 justify-self-end lg:mb-7 text-white font-semibold pt-9">
            Resources
          </div>
          <div className="text-sm">
          <a href="/Application/ErrorTracing"><p className=" w-64 mt-1 leading-loose mb-3">Blogs </p></a> 
          <a href="/Application/ErrorTracing"><p className=" w-64 mt-1 leading-loose mb-3">Case Studies </p></a>
           <a href="/Application/ErrorTracing"><p className=" w-64 mt-1 leading-loose mb-3">Calculators </p></a>
           <a href="/Application/ErrorTracing"><p className=" w-64 mt-1 leading-loose mb-3">OEE Calculators </p></a>
           </div> 
        </div>


      </div>
     
    </>
  );
}

export default Footer;
