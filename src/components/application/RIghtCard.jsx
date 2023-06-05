import React from "react";
import Text from "../../components/application/Text";
import MobileView from "../../components/common/MobileView";
function RightCard({image}) {
  return (
    <>
      <div className={`hidden xsm:block w-full text-[#343434] font-medium`}>
        <div
          className={`flex w-full md:w-[92%] items-center justify-center mx-auto  md:pb-12  md:mt-2`}
        >
          <div className={`w-1/2`}>
            <Text heading=" Pinpointing Production Failures for Efficient Root Cause Analysis" subtitle=" Our Error Tracing feature simplifies the process of identifying root causes when errors or production failures occur. By tracking every detail of machine performance and worker actions, we provide a pinpoint location of the error that caused the production to fail or stop. Save valuable time and resources by quickly identifying and addressing the root cause of any issue in your factory within seconds using AICAN!"></Text>
          </div>
          <img className={`h-72 w-1/2 align-middle ` }src={image} ></img>
        </div>
      </div>
      <div className="block xsm:hidden">
        <MobileView></MobileView>
      </div>
    </>
  );
}

export default RightCard;
