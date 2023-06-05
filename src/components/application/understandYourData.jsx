import React from "react";
import Colors from "../../constants/colors";
const colors = new Colors();
function UnderstandYourData({title,subheading}) {
  return (
    <div
      className={`flex z-50 xl:mt-[350px] md:mb-24   cursor-pointer flex-col items-center  ${colors.textGreenColor2} font-semibold text-2xl mt-10`}
    >
      <div className={`md:text-3xl font-bold`}>{title}</div>
      <div className="h-5"></div>
      <div className={`md:text-5xl w-1/2 text-center ${colors.subheadingColor } font-bold`}>{subheading}</div>
    </div>
  );
}

export default UnderstandYourData;
