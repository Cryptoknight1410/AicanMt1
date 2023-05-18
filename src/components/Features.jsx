import React from "react";
import Colors from "../constants/colors";

function Features() {
  const colors = new Colors();
  const items1 = [
    "Job Profile Management",
    "Work Order Management",
    "Down Time Management",
    "Real Time DashBoard",
    "Smart Worker Delegation",
    "Wroker Effiency Tracker",
  ];
  const items2 = [
    "Custom Dashboard Views",
    "Job Cycle Times",
    "Custom KPIs",
    "Worker Analytics",
    "OEE Analytics ",
    "Custom Reporting",
  ];
  const items3 = [
    "Heirarchy Based Authentication",
    "Modular Sensor Nodes",
    "Error Tracing",
    "Machine Maintenance",
    "Error Management",
    "Ground Level Deployment",
  ];
  return (
    <div className="bg-black mx-auto sm:w-4/5 w-fit rounded-3xl mt-14 md:mb-[350px] h-[900px]">
      <div className="object-cover w-full mx-auto h-[900px] bg-[url('./src/assets/Features.svg')] flex justify-center text-center">
        <div className={` ${colors.textSecondary} flex flex-col py-16`}>
          <div>FEATURES</div>
          <h1 className={`font-semibold text-xl md:text-4xl w-[60%]  mx-auto`}>
            Powerful Tool to Solve Your Toughest Challenges
          </h1>

          <div
            className={`flex xsm:flex-row w-full text-center flex-col  xsm:flex-wrap h-[40%] xxsm:p-5 xsm:justify-between xsm:text-left  mt-20 mx-auto`}
          >
            <div className={`flex flex-col h-full  justify-between  `}>
              {items1.map((items) => {
                return (
                  <div className="flex text-sm  ">
                    <img
                      src="./src/assets/tickMark.svg"
                      className="mr-2 mb-2"
                    />
                    {items}
                  </div>
                );
              })}
            </div>
            <div className={`flex flex-col h-full text-left justify-between  `}>
              {items2.map((items) => {
                return (
                  <div className="flex md:text-sm">
                    <img
                      src="./src/assets/tickMark.svg"
                      className="mr-2 mb-2"
                    />
                    {items}
                  </div>
                );
              })}
            </div>
            <div className={`flex flex-col h-full text-left  justify-between  `}>
              {items3.map((items) => {
                return (
                  <div className="flex md:text-sm">
                    <img
                      src="./src/assets/tickMark.svg"
                      className="mr-2 mb-2 "
                    />
                    {items}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden  mx-auto relative top-[-350px] w-[80%] md:flex justify-center ">
        <img src="./src/assets/SIngleHero.svg" className="object-contain"></img>
      </div>
    </div>
  );
}

export default Features;
