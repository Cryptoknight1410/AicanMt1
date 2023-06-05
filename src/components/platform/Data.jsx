import React from "react";
import Colors from "../../constants/colors";
import Partners from "../common/Partners";
const color = new Colors();

function Data() {
  return (
    <div className={`flex flex-col`}>
      <h1 className={`w-full text-center font-bold text-xl`}>
        Integrate Your Data
      </h1>
      <p className={`w-[45%] text-center mx-auto mb-5`}>
        There’s no need to get rid of the tools you love. Mingo integrates with
        many other software tools and supports 100+ different protocols. Connect
        to historians, process controllers, ERPS, MES systems, or PLCs.
        <span className={`${color.textGreenColor}`}>
          Explore all integrations »
        </span>
      </p>

     <Partners></Partners>

      <h1 className={`w-full text-center font-bold text-xl`}>
        Implementation Process
      </h1>
      <p className={`w-[65%] text-center mx-auto my-5`}>
        Step by step, we’ll walk you through the implementation process so
        you’re up and running in no time. Our methodology has been developed and
        improved over time to ensure you’re given the best support possible. The
        implementation team coaches and helps you along to ensure your goals are
        achieved.
        <span className={`${color.textGreenColor}`}>
          See how you can achieve success with Mingo »
        </span>
      </p>
    </div>
  );
}

export default Data;
