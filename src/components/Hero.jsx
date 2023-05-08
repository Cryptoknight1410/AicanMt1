import React from "react";
import Button from "./Button";
import Colors from "../constants/colors";

function Hero() {
  let colors = new Colors();
  return (
    <div className="mt-14 ">
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-5xl lg:text-8xl font-bold text-black text-center mb-2">
          Improved floor level visibility
        </h1>
        <p
          className={`text-4xl lg:text-8xl font-bold ${colors.textprimary} text-center space-y-4`}
        >
          <span className="text-black "> to enhance</span> production
        </p>
        <p className="text-lg font-semibold text-center mt-4">
          Optimize your factory operations with AICAN's SaaS platform,
          leveraging IoT technology to drive efficiency, minimize waste, and
          &nbsp;
          <span class="hidden "> accelerate business growth.</span>
          <span class="block lg:break-words ">accelerate business growth.</span>
        </p>

        <Button success className=" p-5 mt-5" rounded>
          See how it Works
        </Button>
        <div className="flex mt-5 items-center bg-gray-300 justify-center  rounded-3xl w-4/5 h-96 text-white ml-44 mr-44">
          <img src="./src/assets/aicanlogo.svg"></img>
        </div>
      </div>

      <div className=" flex flex-wrap justify-around mt-5">
        <div className="flex flex-col">
          <div className="h-64 w-48">
            <img
              src="./src/assets/rocket.svg"
              className="h-full w-4/5 object-contain"
            ></img>
          </div>
          <p className=" text-center w-44 font-semibold text-2xl">
            Easy and fast deployment
          </p>
        </div>
        <div className="flex flex-col">
          <div className="h-64 w-48">
            <img
              src="./src/assets/mindmap.svg"
              className="h-full w-4/5 object-contain"
            ></img>
          </div>
          <p className="text-center w-52 font-semibold text-2xl">
            Data-driven decision making
          </p>
        </div>
        <div className="flex flex-col">
          <div className="h-64 w-48">
            <img
              src="./src/assets/positivedynamic.svg"
              className="h-full w-4/5 object-contain"
            ></img>
          </div>
          <p className=" text-center w-56 font-semibold text-2xl">
            Start generating ROI in weeks
          </p>
        </div>
        <div className="flex flex-col">
          <div className="h-64 w-48">
            <img
              src="./src/assets/workspace.svg"
              className="h-full w-4/5 object-contain"
            ></img>
          </div>
          <p className=" text-center w-44 font-semibold text-2xl">
            Simple UI for all users alike
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
