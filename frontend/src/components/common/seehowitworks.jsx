import React from "react";
import Colors from "../../constants/colors";
import Button from "./Button";

let colors = new Colors();
export default function Seehowitworks({ text, button }) {
  return (
    <div className=" flex flex-wrap xxsm:flex-row flex-col items-center justify-center my-5 lg:my-10 ">
      <div
        className={`${colors.BgColor} box-border lg:px-12 lg:py-24 xxsm:py-10 w-[92%] flex rounded-3xl  flex-wrap justify-around`}
      >
        <div className="w-[80px] hidden lg:block">
          <img
            src="../src/assets/database.svg"
            className=" relative lg:bottom-9 lg:left-14  "
          ></img>
        </div>

        <div className="flex flex-col relative left-[-6px] xsm:flex-row items-center w-[55%] ">
          <p
            className={`${colors.textSecondary} lg:text-lg
          sm:text-sm  text-center md:text-justify md:text-base  overflow-hidden my-3 lg:relative lg:left-[-35px] `}
          >
            {text}
          </p>
        </div>
        <button
          className={` ${colors.buttonColor} ${colors.textSecondary} text-sm rounded-lg
         px-3 py-2  md:px-5 md:py-3 my-5 lg:text-lg self-center border ${colors.borderGreenColor} text-center w-56 `}
        >
          {button}
        </button>
      </div>
    </div>
  );
}
