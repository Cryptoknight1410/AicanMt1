import React from "react";
import Text from "../../components/application/Text";
import MobileView from "../../components/common/MobileView";
function LeftCard({image}) {
  return (
    
     <>
    <div className={`hidden xsm:block w-full `}>

    <div className={`flex w-full md:w-[92%] items-center justify-center mx-auto  md:py-12 `}>
        <img src={image} className={`h-72 w-1/2 align-middle mr-8 ` }></img>
      <div className={`w-1/2`}>

        <Text heading="Comprehensive Error Logs and Real-Time Alerts" subtitle="Our platform maintains comprehensive error logs that record every error event, including timestamps, machine parameters, and worker actions. These logs serve as a valuable resource for root cause analysis and historical tracking. Additionally, our system generates real-time alerts and notifications when errors occur, allowing you to take immediate action and minimize production disruptions." margin="mr-0"></Text>
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
