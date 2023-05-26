import React from "react";
import Colors from "../../constants/colors";
import Button from "../../components/common/Button";
const colors = new Colors();
const RectangleComponent = () => {
  return (
    <>
      <div className={`${colors.BgColor} pt-16 px-0 xsm:px-16 xl:h-[355px] `}>
        <div
          className={`flex flex-row xl:flex-nowrap flex-wrap justify-center xsm:justify-between`}
        >
          <div className={`flex-col flex xsm:w-1/2 items-center xsm:items-start `}>
            <div className={`  ${colors.textSecondary} font-semibold text-4xl`}>
              Error Tracing
            </div>
            <p className={`${colors.textSecondary} w-[65%] pt-20`}>
              With our advanced tracking capabilities, we provide comprehensive
              data-driven insights that enable you to locate the exact source of
              errors, minimize downtime, and optimize your manufacturing
              processes for improved efficiency.
            </p>
            <div className="flex pt-5 z-10  w-1/2 mb-5 xl:mb-0">
              <Button
                className={`${colors.textSecondary} ${colors.buttonColor} ${colors.borderGreenColor} xsm:px-5 xsm:py-2 py-1 mr-3 rounded-lg`}
              >
                Watch Demo
              </Button>
              <Button className={`${colors.textSecondary}`}>
                Talk to an Expert
              </Button>
            </div>
          </div>

          <img
            className={`h-[400px] xl:h-[450px] ${colors.card2} w-full xsm:w-[45%] m-5 z-40`}
          ></img>
        </div>
      </div>
      <img
        src="../../src/assets/halfrectangle.svg"
        className={`hidden  w-full xl:block absolute top-[350px]  `}
      ></img>
    </>
  );
};

export default RectangleComponent;
