import React from 'react'
import Colors from "../constants/colors";
function QandA() {
  const colors= new Colors();
  return (
    <div className="flex flex-col justify-center items-center mt-16">
    <h3 className={`${colors.headingColor}  text-2xl text-center font-semibold`}>
      YOUR CHALLENGES,OUR SOLUTION
    </h3>
    <h1 className={`sm:text-lg ${colors.subheadingColor} lg:text-5xl font-bold text-center mb-2 w-[60%] md:w-[40%]`}>
     Looking for answers to these questions?
    </h1>
    <div className=' w-3/4'>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 my-10 items-center mx-auto justify-center">
 
  <div className="bg-[#F5E3F7] flex flex-col md:flex-row items-center rounded-lg ">
    <div className="w-full md:w-64">
      <img src="./src/assets/sphere1.svg" alt="Card" className="object-contain mx-auto md:mx-0" />
    </div>
    <div className="flex items-center :mx-7 text-lg">
      <p className=" text-center md:text-left ">Struggling with frequent unplanned downtime and lacking visibility into machine issues?</p>
    </div>
  </div>
  <div className="bg-[#F5E3F7] flex flex-col md:flex-row items-center rounded-lg ">
    <div className="w-full md:w-64">
      <img src="./src/assets/cube.svg" alt="Card" className="object-contain mx-auto md:mx-0" />
    </div>
    <div className="flex items-center :mx-7 text-lg">
      <p className=" text-center md:text-left ">Losing money due to poorly tracked cycle times and high scrap rates?</p>
    </div>
  </div>
  <div className="bg-[#F5E3F7] flex flex-col md:flex-row items-center rounded-lg ">
    <div className="w-full md:w-64">
      <img src="./src/assets/stack.svg" alt="Card" className="object-contain mx-auto md:mx-0" />
    </div>
    <div className="flex items-center :mx-7 text-lg">
      <p className=" text-center md:text-left ">Spending too much time generating reports instead of problem-solving?</p>
    </div>
  </div>
  <div className="bg-[#F5E3F7] flex flex-col md:flex-row items-center rounded-lg ">
    <div className="w-full md:w-64">
      <img src="./src/assets/sphere2.svg" alt="Card" className="object-contain mx-auto md:mx-0" />
    </div>
    <div className="flex items-center :mx-7 text-lg">
      <p className=" text-center md:text-left ">Failing to meet production goals and facing customer dissatisfaction?</p>
    </div>
  </div>
  
 
  
  
</div>
    </div>


    </div>
  )
}

export default QandA