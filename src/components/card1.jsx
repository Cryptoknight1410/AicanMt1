import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Colors from "../constants/colors";
let colors = new Colors();
function Card1() {
  return (
    <div className="flex flex-col justify-center items-center mt-16 ">
      <div
        className={`${colors.card1} p-5 flex-col flex my-9  rounded-3xl w-4/5 box-border`}
      >
        <div className="p-8 flex flex-col md:flex-row items-center justify-center flex-wrap ">
          <div className="px-6 py-4 text-center  w-4/5 ">
            <h3 className={`${colors.headingColor}  text-lg font-bold`}>
              OPTIMUM EFFICIENCY, OPTIMUM ROI
            </h3>
            <div className="h-4"></div>

            <h2
              className={`text-lg lg:text-4xl ${colors.subheadingColor} sm:text-lg font-bold mb-10`}
            >
              Reduce Operational Costs by 25%
            </h2>
            <p
              className={`${colors.subheadingColor} text-lg  text-center font-medium`}
            >
              Experience the transformative power of AICAN and witness a rapid
              return on investment, with the potential to achieve a 25%
              reduction in operational costs within just three months. Unlock
              sustainable business growth, increased profitability, and enhanced
              efficiency with AICAN at your side.
            </p>
          </div>
        </div>
        <div className="flex justify-around items-center flex-wrap">
          <div className="flex flex-col flex-wrap">
            <div
              className={`${colors.textGreenColor} text-center font-extrabold sm:text-5xl text-2xl lg:text-9xl`}
            >
              15%
            </div>
            <div className="w-52 lg:text-lg text-base text-center font-medium">
              Increase in idle worker utilization with smart delegation
            </div>
          </div>

          <div className="flex flex-col flex-wrap">
            <div
              className={`${colors.textGreenColor} text-center font-extrabold sm:text-5xl text-2xl lg:text-9xl`}
            >
              25%
            </div>
            <div className="w-52 lg:text-lg text-base text-center font-medium">
              Increse in machine on-time through cycle times and micro stop
              tracing
            </div>
          </div>

          <div className="flex flex-col flex-wrap">
            <div
              className={`${colors.textGreenColor} text-center font-extrabold sm:text-5xl text-2xl lg:text-9xl`}
            >
              35%
            </div>
            <div className="w-52 lg:text-lg text-base text-center font-medium">
              Increase in on-time order fulfillment with error detection on
              ground level
            </div>
          </div>
        </div>

        <div className=" items-center flex flex-col ">
          <hr className={`${colors.borderGreenColor} w-full my-6`} />
          <div className="flex items-baseline justify-center ">
            <h3
              className={`text-sm my-3 sm:text-base lg:text-lg ${colors.textGreenColor} font-semibold text-center cursor-pointer`}
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

export default Card1;
