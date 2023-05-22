import React from "react";
import Colors from "../../../constants/colors";
import { AiOutlineArrowRight } from "react-icons/ai";

import RTLI2 from "../../common/RTLI2";
import LTRI2 from "../../common/LTRI2";
const colors = new Colors();
function Issues() {
  return (
    <div className="flex flex-col justify-center items-center mt-16 ">
      <div
        className={`${colors.card1} p-5 flex-col flex my-9 rounded-3xl w-4/5 box-border`}
      >
        <div className="p-0 flex flex-col md:flex-row items-center justify-center flex-wrap ">
          <div className="px-0 py-4 text-center  w-4/5 ">
            <h3 className={`${colors.headingColor}  text-base font-bold`}>
              Issues
            </h3>
            <div className="h-4"></div>

            <h2
              className={`text-lg lg:text-3xl ${colors.subheadingColor} sm:text-lg font-bold mb-10`}
            >
              Most commonly issues solved digitally
            </h2>
            <div className="text-left ">
              <RTLI2></RTLI2>
            </div>
            <div className="text-left ">
              <LTRI2></LTRI2>
            </div>
            <div className="text-left ">
              <RTLI2></RTLI2>
            </div>
            <div className="text-left ">
              <LTRI2></LTRI2>
            </div>
            <div className="text-left ">
              <RTLI2></RTLI2>
            </div>
            
            </div>  
          
          </div>
        <div className=" items-center flex flex-col ">
          <hr className={`${colors.borderGreenColor} w-full my-6`} />
          <div className="flex items-baseline justify-center ">
            <h3
              className={`text-sm my-3 sm:text-base lg:text-base ${colors.textGreenColor} font-semibold text-center cursor-pointer`}
            >
              START YOUR TRANSFORMATION NOW
            </h3>
            <AiOutlineArrowRight
              className={`hidden xsm:block cursor-pointer ${colors.textGreenColor} font-semibold`}
            />
          </div>
        </div>
        </div>

      </div>
    
  );
}

export default Issues;
