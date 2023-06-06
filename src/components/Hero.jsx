import React from "react";

import Colors from "../constants/colors";
import TypewriterComponent from "typewriter-effect";

function Hero() {
  let colors = new Colors();
  return (
    <div className="lg:mt-20  z-10 ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl sm:text-5xl  lg:text-6xl font-[550] text-center xxsm:mb-2">
          Improved floor level visibility
        </h1>
        <div className="flex flex-wrap text-center justify-center  ">
          <p
            className={`text-2xl sm:text-5xl lg:text-6xl font-[550] text-center space-y-4 `}
          >
            to enhance &nbsp;
          </p>
          <span
            className={`${colors.textPrimary} text-2xl sm:text-5xl lg:text-6xl font-[550]    text-center space-y-4`}
          >
            <TypewriterComponent
              options={{
                strings: [
                  "production",
                  "savings",
                  "operations",
                  "decision making",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            ></TypewriterComponent>
          </span>
        </div>
        <p
          className={`text-xs sm:text-base font-medium text-center mt-4 w-3/5 ${colors.text3}`}
        >
          Optimize your factory operations with AICAN's SaaS platform,
          leveraging IoT technology to drive efficiency, minimize waste, and
         accelerate business growth.
        </p>
        <div className="xsm:h-20 mt-5 xsm:mt-0"></div>
        <button
  className={`text-xs xsm:text-sm ${colors.buttonColor} ${colors.borderGreenColor} 
              px-3 py-3 xsm:px-[50px] xsm:py-[20px] lg:text-lg rounded-full 
              ${colors.textSecondary} 
              hover:px-4 hover:py-4 hover:rounded-lg hover:shadow-lg
              md:hover:px-[60px] md:hover:py-[25px] md:hover:rounded-full md:hover:shadow-gray-500`} 
> 
  See how it Works
</button>

<div className="w-full xsm:h-[1000px] h-auto xsm:w-full ">
  <img
    src="assets/HeroAssets.svg "
    className="w-[80%] mx-auto my-[60px] xsm:h-[900px] object-contain transition-all duration-500 ease-in-out transform scale-100 sm:scale-100 hover:w-[100%]"
  />
</div>

      </div>
    </div>
  );
}

export default Hero;
