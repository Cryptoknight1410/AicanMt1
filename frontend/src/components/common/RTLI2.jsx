import React from "react";
import Colors from "../../constants/colors";
import MobileView from "./MobileView";
const colors = new Colors();
function RTLI2({ text, img, width }) {
    return (
        <>
          <div className={`hidden sm:flex ${width} mx-auto justify-between my-5 mb-32 items-center`}>
            <img className={`${colors.card2} w-1/2 h-80`} />
            <div className="w-[40%]">
              <p className="text-sm font-semibold">
                Effective inventory management is crucial to ensuring that the right parts are available at the right time. Poor inventory management can lead to stockouts, overstocking, and unnecessary costs. To address this issue, the factory should:
              </p>
              <ul className="font-semibold text-sm">
                <li style={{listStyleType:'disc'}}>
                  Implement a robust inventory management system: An effective inventory management system can help track inventory levels, monitor stock levels, and ensure the availability of partss.
                </li>
                <li style={{listStyleType:'disc'}}>
                  Use demand forecasting: Forecasting demand can provide insights into future inventory needs, enabling better planning and preventing stockouts or overstocking.
                </li>
                <li style={{listStyleType:'disc'}}>
                  Use demand forecasting: Forecasting demand can provide insights into future inventory needs, enabling better planning and preventing stockouts or overstocking.
                </li>
              </ul>
            </div>
          </div>
      
          <div className="block sm:hidden">
            <MobileView />
          </div>
        </>
      );
      
      
}

export default RTLI2;
