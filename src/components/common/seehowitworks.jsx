import React from "react";
import Colors from "../../constants/colors";
import Button from "./Button";

let colors = new Colors();
export default function Seehowitworks({ text }) {
  return (
    <div className="w-full flex flex-wrap xxsm:flex-row flex-col items-center justify-center lg:mt-16 lg:mb-10 mb-5">
      <div
        className={`${colors.BgColor} box-border lg:px-12 lg:py-24 xxsm:py-10 w-4/5  flex rounded-3xl justify-around flex-wrap`}
      >
        <img
          src="../src/assets/database.svg"
          className="hidden lg:block relative lg:bottom-20 lg:left-10  "
        ></img>

        <div className="flex flex-col xsm:flex-row items-center w-[55%] min-w-[60%]">
          <p
            className={`${colors.textSecondary} lg:text-lg
          sm:text-sm  text-base  overflow-hidden my-3`}
          >
            {text}
          </p>
        </div>
        <Button
          rounded
          className={` ${colors.buttonColor} ${colors.textSecondary} text-sm
         px-3 py-2  md:px-5 md:py-3 my-5 lg:text-lg self-center border ${colors.borderGreenColor} text-center`}
        >
          Schedule a Demo
        </Button>
      </div>
    </div>
  );
}
