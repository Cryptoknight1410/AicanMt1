import React from 'react'
import Colors from '../../constants/colors'
const colors=new Colors();
function Text2({margin}) {
  return (
    <div className={`w-full`}>
    <div className={`flex flex-col items-start `}>
      <img src="../src/assets/doublelines.svg" className="h-5 mb-10"></img>
      <div className="mr-8">
        <h1 className={`${colors.subheadingColor} font-semibold text-2xl ${margin} `}>
          Stop Problems as They Happen
        </h1>
        <p>
          Automotive software helps manufacturers in the automotive and
          transportation manufacturing industry solve problems on the floor
          and improve efficiencies.
        </p>
        
      </div>
    </div>
  </div>
  )
}

export default Text2