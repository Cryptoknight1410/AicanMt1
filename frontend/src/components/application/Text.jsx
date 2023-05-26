import React from 'react'
import Colors from '../../constants/colors'
const colors=new Colors();
function    Text() {
  return (
    <div className={`w-full`}>
    <div className={`flex flex-col items-start `}>
      <div className="mr-8">
        <h1 className={`${colors.subheadingColor} font-bold text-2xl  `}>
        Pinpointing Production Failures for Efficient Root Cause Analysis
        </h1>
      <img src="../src/assets/loader.svg" className="h-5 mb-10 w-1/4 mt-5"></img>
        <p>
        Our Error Tracing feature simplifies the process of identifying root causes when errors or production failures occur. By tracking every detail of machine performance and worker actions, we provide a pinpoint location of the error that caused the production to fail or stop. Save valuable time and resources by quickly identifying and addressing the root cause of any issue in your factory within seconds using AICAN!
        </p>
        

      </div>
    </div>
  </div>

  )
}

export default Text