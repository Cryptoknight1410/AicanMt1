import React from "react";
import Colors from "../../constants/colors";
const colors = new Colors();
function UnderstandYourData() {
  return (
    <div
      className={`flex z-50 xl:mt-[350px] cursor-pointer flex-col items-center  ${colors.textGreenColor2} font-semibold text-2xl mt-10`}
    >
      <div className={`text-3xl`}>Understand Your Data</div>
      <div className="h-5"></div>
      <div className={`text-5xl ${colors.subheadingColor } font-bold`}>Visual Management</div>
    </div>
  );
}

export default UnderstandYourData;
