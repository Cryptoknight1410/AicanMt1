import React from 'react'
import Colors from '../../constants/colors'
const colors=new Colors();
function Text2({margin,heading,subheading}) {
  return (
    <div className={`w-full`}>
    <div className={`flex flex-col items-start `}>
      <img src="../src/assets/doublelines.svg" className="h-5 mb-10"></img>
      <div className="mr-8">
        <h1 className={`${colors.subheadingColor} font-semibold text-2xl ${margin} `}>
          {heading}
        </h1>
        <p>
          {subheading}
        </p>
        
      </div>
    </div>
  </div>
  )
}

export default Text2