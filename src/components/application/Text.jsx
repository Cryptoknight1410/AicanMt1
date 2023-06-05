import React from 'react'
import Colors from '../../constants/colors'
const colors=new Colors();
function    Text({heading,subtitle}) {
  return (
    <div className={`w-full`}>
    <div className={`flex flex-col items-start `}>
      <div className="mr-8">
        <h1 className={`${colors.subheadingColor} font-bold text-2xl  w-[60%]`}>
       {heading}
        </h1>
      <img src="../src/assets/loader.svg" className="h-5 mb-10 w-1/5 mt-5"></img>
        <p  className={`w-[85%]`}>
       {subtitle}
        </p>
        

      </div>
    </div>
  </div>

  )
}

export default Text