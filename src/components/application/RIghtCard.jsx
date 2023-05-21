import React from "react";
import Text from "../../components/application/Text";
import MobileView from "../../components/common/MobileView";
function RightCard() {
  return (
    <>
      <div className={`hidden xsm:block w-full `}>
        <div
          className={`flex w-full md:w-4/5 items-center justify-center mx-auto  p-5 md:p-12 `}
        >
          <div className={`w-1/2`}>
            <Text></Text>
          </div>
          <img className={`h-56 bg-slate-700 w-1/2 align-middle`}></img>
        </div>
      </div>
      <div className="block xsm:hidden">
        <MobileView></MobileView>
      </div>
    </>
  );
}

export default RightCard;
