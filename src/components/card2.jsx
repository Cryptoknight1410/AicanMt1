import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Colors from "../constants/colors";
let colors = new Colors();
function Card2() {
  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <div className={`flex-col flex mb-9 mt-9 rounded-3xl w-4/5 box-border p-5 ${colors.card2}` }>
        <div className="p-8 flex flex-col md:flex-row items-center justify-center">
          <div className="max-w-2xl mx-auto text-center md:text-left">
            <div className="px-6 py-4 text-center">
              <h3 className={`${colors.headingColor} text-lg font-bold`}>
                THREE STEP DEPLOYMENT
              </h3>
              <div className="h-4"></div>

              <h2 className={`text-lg lg:text-4xl sm:text-lg font-bold  ${colors.subheadingColor}`}>
                Going digital has never been easier!
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center flex-wrap">
        <div className="flex flex-col flex-wrap md:mt-0 mt-5">
            <div className={`text-center ${colors.textTomotoColor} font-extrabold sm:text-5xl text-2xl lg:text-8xl`}>
              1
            </div>
            <div className="w-52 md:w-80  text-sm text-center font-medium">
            Schedule a quick consultation session to lead your company towards a seamless digital transformation.
            </div>
          </div>

          <div className="flex flex-col flex-wrap md:mt-0 mt-5">
            <div className={`text-center ${colors.textTomotoColor} font-extrabold sm:text-5xl text-2xl lg:text-8xl`}>
              2
            </div>
            <div className="w-52 md:w-80  text-sm text-center font-medium">
            Our experts work closely with you to analyze your manufacturing processes and provide tailored solutions for optimizing production goals. 
            </div>
          </div>

        
        {/*  */}
        <div className="flex flex-col flex-wrap md:mt-0 mt-5">
            <div className={`text-center ${colors.textTomotoColor} font-extrabold sm:text-5xl text-2xl lg:text-8xl  `}>
              3
            </div>
            <div className="w-52 md:w-96  text-sm text-center font-medium">
            Revamp your factory floor with AICAN's cutting-edge sensor nodes seamlessly integrated with your machines and control units to provide real-time worker analytics.
            </div>
          </div>
        </div>

        <div className=" items-center flex flex-col ">
          <hr className={`${colors.borderTomotoColor} w-full my-6`} />
          <div className="flex items-baseline justify-center ">
            <h3
              className={`text-sm my-3 sm:text-base lg:text-base ${colors.textTomotoColor} font-semibold text-center cursor-pointer`}
            >
              START YOUR TRANSFORMATION NOW
            </h3>
            <AiOutlineArrowRight
              className={`hidden xsm:block cursor-pointer ${colors.textTomotoColor} font-semibold`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
