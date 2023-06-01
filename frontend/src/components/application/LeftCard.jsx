import React from "react";
import Text from "../../components/application/Text";
import MobileView from "../../components/common/MobileView";
function LeftCard() {
  return (
    
     <>
    <div className={`hidden xsm:block w-full `}>

    <div className={`flex w-full md:w-[92%] items-center justify-center mx-auto  md:py-12 `}>
        <img className={`h-56 bg-slate-700 w-1/2 align-middle mr-8 ` }></img>
      <div className={`w-1/2`}>

        <Text margin="mr-0"></Text>
      </div>
    </div>
    </div>
    <div className='block xsm:hidden'>

    <MobileView ></MobileView>
    </div>
</>
    
  );
}

export default LeftCard;
