import React from "react";

function Technology() {
  return (
    <div className="flex flex-col justify-center items-center">
    <h3 className="text-blue-700 space-x-1 text-3xl text-center font-semibold">
      TECHNOLOGY ARCHITECTURE
    </h3>
    <h1 className="sm:text-lg lg:text-5xl font-bold text-black text-center mb-2 w-[60%] md:w-[40%]">
      Everything about your factory - all on a single screen
    </h1>
    <div className="bg-gray-200 flex-col flex mb-9 mt-9 rounded-3xl w-4/5 box-border">
      <div className="p-8 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 md:text-center mb-6 md:mb-0">
          <img
            src="./src/assets/tronics.svg"
            alt="Example Image"
            className="mx-auto object-contain"
          />
        </div>
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <div className="px-6 py-4">
            <h2 className="text-3xl sm:text-5xl font-bold mb-2">
              Accelerate your Digital Transformation
            </h2>
            <p className="text-gray-700 text-sm sm:text-base">
              Embark on your digital transformation journey with AICAN's game-changing SaaS platform.
            </p>
            <div className="h-5"></div>
            <p className="text-sm sm:text-base">
              Designed by manufacturing experts, it empowers you to embrace the future of manufacturing. Seamlessly access the platform via web and mobile apps, leverage cutting-edge modular sensor technology, and unlock new opportunities for growth and efficiency.
            </p>
            <div className="h-5"></div>
            <p className="text-sm sm:text-base">
              Let AICAN be your partner on the path to digital transformation and drive your business forward.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <h3 className="text-center text-sm sm:text-base">Start your transformation now</h3>
    </div>
  </div>
  );
}

export default Technology;
