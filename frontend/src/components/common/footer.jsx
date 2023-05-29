import React from "react";
import Colors from "../../constants/colors";
let colors = new Colors();
function Footer() {
  return (
    <>
      <div className={`${colors.BgColor} flex justify-around p-20 `}>
        <div className={`flex flex-col ${colors.grayText}`}>
          <div className="h-16 w-22 mb-7 z-40">
            <img
              classname="w-full  object-contain"
              src="../src/assets/aicanlogo2.svg"
            ></img>
          </div>
          <p className={` w-64 text-sm ${colors.grayText}`}>
            18th floor Zone Startup India, Bombay Stock Exchange PJ Towers,
            Dalal Street-400001
          </p>
          <div className="h-5"></div>
          <p className=" text-sm">work@aican.co.in</p>
          <div className="h-5"></div>
          <p className="">770992975</p>
          <div className="flex">
            <img
              src="../src/assets/linkdln.svg"
              alt="LinkedIn Profile Picture"
              className="rounded-full border-2 border-solid border-white p-2 m-2"
            />
            <img
              src="../src/assets/twitter.svg"
              alt="LinkedIn Profile Picture"
              className="rounded-full border-2 border-solid border-white p-2 m-2"
            />
            <img
              src="../src/assets/youtube.svg"
              alt="LinkedIn Profile Picture"
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
          <p className=" w-64 mt-1 leading-loose">Error Tracing </p>
          <p className=" w-64 mt-1 leading-loose">Worker Analytics</p>
          <p className=" w-64 mt-1 leading-loose">Machine Health</p>
          <p className=" w-64 mt-1 leading-loose">Inventory Management</p>
         
           </div> 
        </div>
        <div className={`hidden xsm:flex flex-col ${colors.grayText}`}>
          <div className="h-16 w-22 justify-self-end lg:mb-7 text-white font-semibold pt-9">
            Industries
          </div>
          <div className="text-sm">
          <p className=" w-64 mt-1 leading-loose">Automobile</p>
          <p className=" w-64 mt-1 leading-loose">Electronics</p>
          <p className=" w-64 mt-1 leading-loose">Packaging</p>
          <p className=" w-64 mt-1 leading-loose">Pharmaceticals</p>
          
           </div> 
        </div>
        <div className={`hidden xsm:flex flex-col ${colors.grayText}`}>
          <div className="h-16 w-22 justify-self-end lg:mb-7 text-white font-semibold pt-9">
            Resources
          </div>
          <div className="text-sm">
          <p className=" w-64 mt-1 leading-loose">Blogs</p>
          <p className=" w-64 mt-1 leading-loose">Case Study</p>
          <p className=" w-64 mt-1 leading-loose">Calculators</p>
          <p className=" w-64 mt-1 leading-loose">OEE Calculator</p>
          
           </div> 
        </div>


      </div>
     
    </>
  );
}

export default Footer;
