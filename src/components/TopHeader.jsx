import React from "react";
import Colors from "../constants/colors";
function TopHeader() {
  const colors = new Colors();
  return (
    <>
      <div
        className={`${colors.bgPrimary} hidden h-16 sm:flex justify-between items-center font-medium`}
      >
        <div className={`${colors.textSecondary} ml-10  text-lg`}>
          Digitize your factory with a free demo now!
        </div>
        <div className={`${colors.textSecondary} mr-10  text-lg cursor-pointer`}>
          Know More&gt;&gt;
        </div>
      </div>
    </>
  );
}

export default TopHeader;
