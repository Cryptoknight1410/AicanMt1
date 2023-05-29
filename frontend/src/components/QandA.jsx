import React from "react";
import Colors from "../constants/colors";
function QandA() {
  const colors = new Colors();
  return (
    <div className="flex flex-col justify-center items-center  mb-[120px]">
      <div className="flex flex-col justify-center items-center my-16">
        <h3
          className={`${colors.headingColor}  text-xl text-center font-semibold`}
        >
          YOUR CHALLENGES,OUR SOLUTION
        </h3>
        <h1
          className={`sm:text-lg ${colors.subheadingColor} lg:text-4xl font-bold text-center mb-2 w-[60%] md:w-[60%]`}
        >
          Looking for answers to these questions?
        </h1>
      </div>
      <div className=" w-[92%] ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 my-10 items-center mx-auto justify-center">
         
          <div className="bg-[#F5E3F7] flex flex-col md:flex-row items-center rounded-3xl h-[170px]">
            <div className="w-full md:w-64 ">
              <img
                src="./src/assets/sphere1.svg"
                alt="Card"
                className="object-contain mx-auto md:mx-0 "
              />
            </div>
            <div className="flex items-center  lg:mx-7 text-lg font-semibold relative left-5">
            <p className={`text-center md:text-left ${colors.subheadingColor} mr-5`}  >
            Struggling with frequent unplanned downtime  and lacking
                visibility into machine issues?
              </p>
            </div>
          </div>
          <div className="bg-[#F5E3F7] flex flex-col md:flex-row items-center rounded-3xl  h-[170px]">
            <div className="w-full md:w-64">
              <img
                src="./src/assets/cube.svg"
                alt="Card"
                className="object-contain mx-auto md:mx-0 "
              />
            </div>
            <div className="flex items-center lg:mx-7 text-lg font-semibold ">
            <p className={`text-center md:text-left ${colors.subheadingColor}`}  >
                Losing money due to poorly tracked cycle times and high scrap
                rates?
              </p>
            </div>
          </div>
          <div className="bg-[#F5E3F7] flex flex-col md:flex-row items-center rounded-3xl  h-[170px]">
            <div className="w-full md:w-64">
              <img
                src="./src/assets/stack.svg"
                alt="Card"
                className="object-contain mx-auto md:mx-0"
              />
            </div>
            <div className="flex items-center lg:mx-7 text-lg font-semibold">
            <p className={`text-center md:text-left ${colors.subheadingColor}`}  >
                Spending too much time generating reports instead of
                problem-solving?
              </p>
            </div>
          </div>
          <div className="bg-[#F5E3F7] flex flex-col md:flex-row items-center rounded-3xl  h-[170px]">
            <div className="w-full md:w-64">
              <img
                src="./src/assets/sphere2.svg"
                alt="Card"
                className="object-contain mx-auto md:mx-0"
              />
            </div>
            <div className="flex items-center lg:mx-7 text-lg font-semibold">
            <p className={`text-center md:text-left ${colors.subheadingColor}`}  >
                Failing to meet production goals and facing customer
                dissatisfaction?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QandA;
