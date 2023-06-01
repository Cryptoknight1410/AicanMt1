import React from "react";
import Button from "./common/Button";
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
          px-3 py-3 xsm:px-[50px] xsm :py-[20px]  lg:text-lg rounded-full ${colors.textSecondary}`}
        >
          See how it Works
        </button>
        <div class="w-fullsm:h-[900px] h-auto xsm:w-full ">
          <img
            src="./src/assets/HeroAssets.svg"
            class="w-full sm:h-[900px] object-contain "
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
