import React from 'react'
import Colors from "../../constants/colors";
const colors = new Colors();
function MobileView({text,img}) {
  return (
    <div className={`flex flex-col m-3 mb-5`}>
       <img src={img}></img>
        <p className={`text-sm w-full`}>
          {text}
        </p>
    </div>
  )
}

export default MobileView