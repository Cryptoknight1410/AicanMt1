import React from 'react'
import Colors from '../../constants/colors';
const colors=new Colors();
function Text({margin}) {
    return (
        <div className={`w-full`}>
          <div className={`flex flex-col items-start `}>
            
            <div className={`ml-8 font-semibold ${colors.textSecondary} text-xs`} >
              <h1 className={` font-bold text-2xl ${margin} `}>
              How to Calculate OEE in Excel Video
              </h1>
              <p className='my-2'>
              By AICAN Team // April 29, 2023
              </p>
              
              <p>
              Calculating OEE in Excel is a quick and easy way to understand how your machines or manufacturing processes are performing. OEE is one of the KPIs every manufacturing company should track. OEE stands for Overall Equipment Effectiveness; it measures
              </p>
              <div className="h-5"></div>
              <p className={`${colors.textGreenColor}`}>
              Read More »
              </p>
            </div>
          </div>
        </div>
      );
}

export default Text