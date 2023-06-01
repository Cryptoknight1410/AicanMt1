import React from "react";
import Text from "../../components/application/Text";
import MobileView from "../../components/common/MobileView";
function RightCard({image}) {
  return (
    <>
      <div className={`hidden xsm:block w-full `}>
        <div
          className={`flex w-full md:w-[92%] items-center justify-center mx-auto  md:py-12 `}
        >
          <div className={`w-1/2`}>
            <Text></Text>
          </div>
          <img className={`h-56  w-1/2 align-middle ` }src={image} ></img>
        </div>
      </div>
      <div className="block xsm:hidden">
        <MobileView></MobileView>
      </div>
    </>
  );
}

export default RightCard;
