import React from "react";
import Button from "./common/Button";
import Colors from "../constants/colors";
import TypewriterComponent from "typewriter-effect";

function Hero() {
  let colors = new Colors();
  return (
    <div className="lg:mt-20 xxsm:mt-3 z-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-lg xsm:text-5xl  lg:text-6xl font-[550] text-center xxsm:mb-2">
          Improved floor level visibility
        </h1>
        <div className="flex flex-wrap text-center justify-center ">
          <p
            className={`text-lg xsm:text-4xl lg:text-6xl font-[550] text-center space-y-4 `}
          >
            to enhance &nbsp;
          </p>
          <span
            className={`${colors.textPrimary} text-lg xsm:text-4xl lg:text-6xl font-[550]    text-center space-y-4`}
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
          className={`text-xs md:text-base font-medium text-center mt-4 ${colors.text3}`}
        >
          Optimize your factory operations with AICAN's SaaS platform,
          leveraging IoT technology to drive efficiency, minimize waste, and
          &nbsp;
          <span class="hidden "> accelerate business growth.</span>
          <span class="block lg:break-words ">accelerate business growth.</span>
        </p>
        <div className="h-8"></div>
        <button
          className={`text-sm ${colors.buttonColor} ${colors.borderGreenColor} relative top-10
          px-3 py-5 md:px-[50px] md:py-[20px] mt-5 lg:text-lg rounded-full ${colors.textSecondary}`}
        >
          See how it Works
        </button>
        <div class="w-full h-[900px]  sm:h-auto xsm:w-full">
          <img
            src="./src/assets/HeroAssets.svg"
            class="w-full h-[900px] object-contain "
          />
        </div>
      </div>

      {/* <div className="hidden  lg:flex flex-wrap justify-around mt-5 w-3/4 mx-auto">
        <div className="flex flex-col">
          <div className="h-32 w-48">
            <img
              src="./src/assets/rocket.svg"
              className="h-full w-4/5 object-contain"
            ></img>
          </div>
          <p
            className={` text-center w-44 font-semibold text-xl ${colors.subheadingColor}`}
          >
            Easy and fast deployment
          </p>
        </div>
        <div className="flex flex-col">
          <div className="h-32 w-48">
            <img
              src="./src/assets/mindmap.svg"
              className="h-full w-4/5 object-contain"
            ></img>
          </div>
          <p
            className={`text-center w-56 font-semibold text-xl ${colors.subheadingColor}`}
          >
            Data-driven decision making{" "}
          </p>
        </div>
        <div className="flex flex-col">
          <div className="h-32 w-48">
            <img
              src="./src/assets/positivedynamic.svg"
              className="h-full w-4/5 object-contain"
            ></img>
          </div>
          <p
            className={`text-center w-56 font-semibold text-xl ${colors.subheadingColor}`}
          >
            Start generating ROI in weeks{" "}
          </p>
        </div>
        <div className="flex flex-col">
          <div className="h-32 w-48">
            <img
              src="./src/assets/workspace.svg"
              className="h-full w-4/5 object-contain"
            ></img>
          </div>
          <p
            className={`text-center w-56 font-semibold text-xl ${colors.subheadingColor}`}
          >
            Simple UI for all users alike{" "}
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default Hero;
