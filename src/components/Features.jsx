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
    <div className="bg-black mx-auto sm:w-4/5 w-fit rounded-3xl mt-14 md:mb-[460px] h-[900px]">
      <div className="object-cover w-full mx-auto h-[900px] bg-[url('./src/assets/Features.svg')] flex justify-center text-center">
        <div className={` ${colors.textSecondary} flex flex-col py-16`}>
          <div>FEATURES</div>
          <h1 className={`font-semibold text-xl md:text-5xl w-[60%]  mx-auto`}>
            Powerful Tool to Solve Your Toughest Challenges
          </h1>

          <div className={`flex flex-wrap   h-2/5 w-4/5 justify-between  mt-20 mx-auto`}>
            <div className={`flex flex-col  justify-between  `}>
              
                {items1.map((items) => {
                  return (
                    <div className="flex md:text-lg">
                      <img src="./src/assets/tickMark.svg" className="mr-2 mb-2" />{items}
                    </div>
                  );
                })}
             
            </div>
            <div className={`flex flex-col justify-between  `}>
              
                {items2.map((items) => {
                  return (
                    <div className="flex md:text-lg">
                      <img src="./src/assets/tickMark.svg" className="mr-2 mb-2" />{items}
                    </div>
                  );
                })}
             
            </div>
            <div className={`flex flex-col justify-between  `}>
              
                {items3.map((items) => {
                  return (
                    <div className="flex md:text-lg">
                      <img src="./src/assets/tickMark.svg" className="mr-2 mb-2 " />{items}
                    </div>
                  );
                })}
             
            </div>
          </div>
        </div>
      </div>

      <div className="hidden  relative top-[-300px] md:flex justify-center ">
        <img src="./src/assets/SIngleHero.svg"></img>
      </div>
    </div>
  );
}

export default Features;
