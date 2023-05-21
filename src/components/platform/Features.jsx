import React from 'react'
import Colors from '../../constants/colors'
const colors=new Colors();
export default function Features() {
  return (
    <div  className={`w-full text-center ${colors.subheadingColor} font-bold text-3xl py-10 `}>Powerful Features Designed to Help you Succeed</div>
  )
}
