import React from "react";
import Text2 from "../../components/application/Text2";
import MobileView from "../../components/common/MobileView";
function LeftCard2({image,heading,subheading}) {
  return (
    
     <>
    <div className={`hidden xsm:block w-full `}>

    <div className={`flex w-full md:w-[92%] items-center justify-center mx-auto  p-5 md:p-12 `}>
        <img src={image} className={`h-72 w-1/2 align-middle mr-8 ` }></img>
      <div className={`w-1/2`}>

        <Text2 heading={heading} subheading={subheading}></Text2>
      </div>
    </div>
    </div>
    <div className='block xsm:hidden'>

    <MobileView text={subheading} img={image}></MobileView>
    </div>
</>
    
  );
}

export default LeftCard2;
