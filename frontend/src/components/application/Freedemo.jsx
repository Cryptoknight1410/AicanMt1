import React from 'react'
import Colors from '../../constants/colors'
import Button from '../common/Button';
const colors=new Colors();
function Freedemo() {
  return (
    <div className="w-full flex  flex-wrap xsm:flex-col items-center justify-center lg:mt-16 lg:mb-10">
      <div
        className={`${colors.BgColor} box-border lg:px-12 lg:py-24 xxsm:py-10 w-[92%]  flex  rounded-3xl justify-around flex-wrap`}
      >   

      <div className={`flex-col flex`}>
        <h1 className={`${colors.textGreenColor2} lg:text-lg
          sm:text-2xl  text-sm font-bold  overflow-hidden my-3`}>WATCH THE FREE DEMO</h1>
        <h1 className={`${colors.textSecondary} lg:text-lg
          sm:text-2xl  text-sm font-bold  overflow-hidden my-3`}>Learn More About Mingo.</h1>
        </div>  

        <Button
          
          rounded
          className={` ${colors.buttonColor} ${colors.textSecondary} text-sm
         px-3 py-2  md:px-5 md:py-3 my-5 lg:text-lg self-center border ${colors.borderGreenColor  } text-center`}
        >
          Get Demo
        </Button>
      </div>
    </div>
  )
}

export default Freedemo