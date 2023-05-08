import React from 'react'

function QandA() {
  return (

    <div className='flex flex-col justify-center items-center'>
        <h3 className="text-blue-700 space-x-1 text-3xl text-center font-semibold">
      YOUR CHALLENGES, OUR SOLUTION
    </h3>
    <h1 className="sm:text-lg lg:text-5xl font-bold text-black text-center mb-2 w-[60%] md:w-[40%]">
      Looking for answers to these questions?
    </h1>
    <div className=' w-3/4'>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 my-10 items-center mx-auto justify-center">
  <div className="bg-gray-100 flex flex-col md:flex-row items-center rounded-lg overflow-hidden">
    <div className="">
      <img src="./src/assets/sphere1.svg" alt="Card" className="object-contain  md:mx-0" />
    </div>
    <div className=" flex items-center md:ml-4">
      <p className="text-gray-600 text-center md:text-left">Struggling with frequent unplanned downtime and lacking visibility into machine issues?</p>
    </div>
  </div>
  <div className="bg-gray-100 flex flex-col md:flex-row items-center rounded-lg overflow-hidden">
    <div className="w-full md:w-64">
      <img src="./src/assets/sphere1.svg" alt="Card" className="object-contain mx-auto md:mx-0" />
    </div>
    <div className="flex items-center md:ml-4">
      <p className="text-gray-600 text-center md:text-left">Struggling with frequent unplanned downtime and lacking visibility into machine issues?</p>
    </div>
  </div>
  <div className="bg-gray-100 flex flex-col md:flex-row items-center rounded-lg overflow-hidden">
    <div className="w-full md:w-64">
      <img src="./src/assets/sphere1.svg" alt="Card" className="object-contain mx-auto md:mx-0" />
    </div>
    <div className=" flex items-center md:ml-4">
      <p className="text-gray-600 text-center md:text-left">Struggling with frequent unplanned downtime and lacking visibility into machine issues?</p>
    </div>
  </div>
  <div className="bg-gray-100 flex flex-col md:flex-row items-center rounded-lg overflow-hidden">
    <div className="w-full md:w-64">
      <img src="./src/assets/sphere1.svg" alt="Card" className="object-contain mx-auto md:mx-0" />
    </div>
    <div className=" flex items-center md:ml-4">
      <p className="text-gray-600 text-center md:text-left">Struggling with frequent unplanned downtime and lacking visibility into machine issues?</p>
    </div>
  </div>
</div>
    </div>


    </div>
  )
}

export default QandA