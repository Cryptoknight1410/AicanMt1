import React from "react";
import Colors from "../constants/colors";
let colors = new Colors();
function Card2() {
  return (
    <div
      class={` bg-[#EAFFE6] mx-auto   shadow-lg rounded-lg overflow-hidden w-4/5`}
    >
      <div class="text-center py-4">
        <h2 class="text-2xl font-bold text-blue-600 mb-2">
          OPTIMUM EFFICIENCY OPTIMUM ROI
        </h2>
        <h3 class="text-lg  mb-4">REDUCE OPERATIONAL COST bt 25%</h3>
        <p class="text-black px-6 mb-6">
          Experience the transformative power of AICAN and witness a rapid
          return on investment, with the potential to achieve a 25% reduction in
          operational costs within just three months. Unlock sustainable
          business growth, increased profitability, and enhanced efficiency with
          AICAN at your side.
        </p>
      </div>
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/3 px-4 py-2">
          <h4 class="text-lg font-bold text-green-800 mb-2">15%</h4>
          <p class="">
            Increase in idle worker utilization with smart delegation
          </p>
        </div>
        <div class="w-full md:w-1/3 px-4 py-2">
          <h4 class="text-lg font-bold text-green-800 mb-2">25%</h4>
          <p class="">
            Increase in machine on-time through cycle times and micro stops
            tracing
          </p>
        </div>
        <div class="w-full md:w-1/3 px-4 py-2">
          <h4 class="text-lg font-bold text-green-800 mb-2">20% </h4>
          <p class="">
            Increase in on-time order fulfillment with error detection on ground
            level
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card2;
