import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Colors from "../constants/colors";
let colors = new Colors();
function Card1() {
  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <div className="bg-[#EAFFE6] flex-col flex mb-9 mt-9 rounded-3xl w-4/5 box-border">
        <div className="p-8 flex flex-col md:flex-row items-center justify-center">
          <div className="w-3xl mx-auto text-center md:text-left">
            <div className="px-6 py-4 text-center">
              <h3 className="text-blue-700 text-lg font-bold">
                OPTIMUM EFFICIENCY, OPTIMUM ROI
              </h3>
              <div className="h-4"></div>

              <h2 className="text-lg lg:text-4xl sm:text-lg font-bold mb-10">
                Reduce Operational Costs by 25%
              </h2>
              <p className="text-lg ">
                Experience the transformative power of AICAN and witness a rapid
                return on investment, with the potential to achieve a 25%
                reduction in operational costs within just three months. Unlock
                sustainable business growth, increased profitability, and
                enhanced efficiency with AICAN at your side.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center flex-wrap">
        <div className="flex flex-col flex-wrap">
            <div className="text-center text-green-600 font-extrabold sm:text-5xl text-2xl lg:text-9xl ">
              15%
            </div>
            <div className="w-52 lg:text-lg text-base text-center">
              Increase in idle worker utilization with smart delegation
            </div>
          </div>

          <div className="flex flex-col flex-wrap">
            <div className="text-center text-green-600 font-extrabold sm:text-5xl text-2xl lg:text-9xl ">
              25%
            </div>
            <div className="w-52 lg:text-lg text-base text-center">
              Increase in idle worker utilization with smart delegation
            </div>
          </div>

          <div className="flex flex-col flex-wrap">
            <div className="text-center text-green-600 font-extrabold sm:text-5xl text-2xl lg:text-9xl ">
              35%
            </div>
            <div className="w-52 lg:text-lg text-base text-center">
              Increase in idle worker utilization with smart delegation
            </div>
          </div>
        </div>

        <div className=" items-center justify-center">
          <hr className="border-green-700 w-full my-6 mr-4" />
          <div className="flex items-center justify-center">
            <h3 className="text-center text-sm my-3 sm:text-base lg:text-lg text-green-700 font-semibold">
              START YOUR TRANSFORMATION NOW
            </h3>
            <AiOutlineArrowRight color="blue" className="hidden xsm:block" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
