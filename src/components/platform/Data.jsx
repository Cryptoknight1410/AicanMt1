import React from "react";
import Colors from "../../constants/colors";
const color=new Colors();

function Data() {
  return (
    <div className={`flex flex-col`}>
      <h1 className={`w-full text-center font-semibold text-xl`}>Integrate Your Data</h1>
      <p className={`w-[45%] text-center mx-auto `}>
        There’s no need to get rid of the tools you love. Mingo integrates with
        many other software tools and supports 100+ different protocols. Connect
        to historians, process controllers, ERPS, MES systems, or PLCs.
        <span className={`${color.textGreenColor}`}>Explore all integrations »</span>
      </p>

      <div className={`flex flex-row justify-around md:mt-16 flex-wrap`}>
        
      <div className="h-10 w-22 mb-7">
          <img
            classname="w-full object-contain"
            src="../src/assets/companyA.svg"
          ></img>
        </div>
      <div className="h-10 w-22 mb-7">
          <img
            classname="w-full object-contain"
            src="../src/assets/companyB.svg"
          ></img>
        </div>
      <div className="mb-7 ">
          <img
            classname="w-full h-5 object-cover"
            src="../src/assets/companyC.svg"
          ></img>
        </div>
      <div className="h-16 w-22 mb-7">
          <img
            classname="w-full object-contain"
            src="../src/assets/companyD.svg"
          ></img>
        </div>
      <div className="h-16 w-22 mb-7">
          <img
            classname="w-full object-contain"
            src="../src/assets/companyE.svg"
          ></img>
        </div>
      <div className="h-16 w-22 mb-16">
          <img
            classname="w-full object-contain"
            src="../src/assets/companyF.svg"
          ></img>
        </div>
       
        

      </div>

      <h1 className={`w-full text-center font-semibold text-xl`}>Implementation Process</h1>
      <p className={`w-[65%] text-center mx-auto `}>
      Step by step, we’ll walk you through the implementation process so you’re up and running in no time. Our methodology has been developed and improved over time to ensure you’re given the best support possible. The implementation team coaches and helps you along to ensure your goals are achieved. 
        <span className={`${color.textGreenColor}`}>See how you can achieve success with Mingo »</span>
      </p>
    </div>
  );
}

export default Data;
