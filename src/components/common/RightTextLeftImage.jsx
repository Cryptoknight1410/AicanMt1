import React from "react";
import Colors from "../../constants/colors";
import MobileView from "./MobileView";
const colors = new Colors();
function RightTextLeftImage({ text, img ,width}) {
  return (
    <>
    <div
      className={`hidden sm:flex  ${width} mx-auto justify-between   my-5 mb-32 items-center`}
      >
      <img className={` ${colors.card2} w-1/2 h-80`}></img>
      <div className={`w-[40%]`}>
        <p className={`text-sm`}>
          An automobile spare parts software is a type of computer program or
          application that is designed to help manage various aspects of the
          spare parts inventory and distribution process in the automobile
          industry. This software can help auto parts manufacturers,
          distributors, and retailers manage their inventory, orders, pricing,
          and other important aspects of their business.<br></br> Automobile
        </p>
      </div>
    </div>

    <div className={`block sm:hidden`}>
    <MobileView ></MobileView>
       </div> 
        </>
  );
}

export default RightTextLeftImage;
