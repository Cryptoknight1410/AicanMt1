import React from "react";
import Colors from "../constants/colors";
const colors = new Colors();
function TechnoWriting() {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center lg:mt-40 lg:mb-20">
        <h3
          className={`${colors.headingColor}  text-xl text-center font-semibold  `}
        >
          TECHNOLOGY ARCHITECTURE
        </h3>
        <h1
          className={`sm:text-lg ${colors.subheadingColor} lg:text-5xl font-bold text-center  w-[60%] md:w-[60%]`}
        >
          Everything about your factory - all on a single screen
        </h1>
        <div className="h-0 md:h-10"></div>
      </div>
    </div>
  );
}

export default TechnoWriting;
