import React from 'react'

function Partners() {
  return (
    <div className={`flex flex-row justify-around md:mt-16 flex-wrap w-4/5 mx-auto`}>
    <div className=" mb-7">
      <img
        classname="w-full object-contain"
        src="=assets/companyA.svg"
      ></img>
    </div>
    <div className=" mb-7">
      <img
        classname="w-full object-contain"
        src="assets/companyB.svg"
      ></img>
    </div>
    <div className="mb-7 ">
      <img
        classname="w-full h-5 object-cover"
        src="assets/companyC.svg"
      ></img>
    </div>
    <div className=" mb-7">
      <img
        classname="w-full object-contain"
        src="assets/companyD.svg"
      ></img>
    </div>
    <div className="mb-7">
      <img
        classname="w-full object-contain"
        src="assets/companyE.svg"
      ></img>
    </div>
    <div className=" mb-16">
      <img
        classname="w-full object-contain"
        src="assets/companyF.svg"
      ></img>
    </div>
  </div>
  )
}

export default Partners