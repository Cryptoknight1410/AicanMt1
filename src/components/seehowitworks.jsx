import React from "react";
import Colors from "../constants/colors";
import Button from "./Button";

let colors = new Colors();
export default function Seehowitworks({ text }) {
  return (
    <div className="w-full flex flex-wrap xsm:flex-col items-center justify-center mt-10 mb-10">
      <div
        className={`${colors.primary} box-border lg:p-24 xxsm:p-10 w-4/5  flex rounded-3xl justify-around flex-wrap`}
      >
        <img
          src="./src/assets/database.svg"
          className="relative lg:bottom-20 lg:left-10 "
        ></img>

        <div className="flex items-center w-2/4">
          <p className="text-white lg:text-2xl
          sm:text-lg overflow-hidden ">{text}</p>
        </div>
        <Button
          success
          rounded
          className="xxsm:mt-3 xxsm:h-10 lg:h-16 self-center    text-center"
        >
          See how it works
        </Button>
      </div>
    </div>
  );
}
