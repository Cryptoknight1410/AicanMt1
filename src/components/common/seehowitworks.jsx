import React, { useState ,useEffect } from "react";
import Colors from "../../constants/colors";
import { motion, useAnimation } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
let colors = new Colors();
export default function Seehowitworks({ text, button }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityChange = (isVisible) => {
    setIsVisible(!isVisible);
    if (isVisible) {
      setAnimateCards(true);
    }
  };
  const [animateCards, setAnimateCards] = useState(false);
  const controls = useAnimation();
  useEffect(() => {
    if (animateCards) {
      controls.start({ x: 0 });
    }
  }, [animateCards, controls]);

  return (
    <VisibilitySensor partialVisibility onChange={handleVisibilityChange}>
      {({ isVisible }) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={ isVisible ? {opacity: 1} :{opacity:0} }
          transition={{ duration: 1 }}
        >
          <div className=" flex flex-wrap xxsm:flex-row flex-col items-center justify-center my-5 lg:my-10 ">
            <div
              className={`${colors.BgColor} box-border lg:px-12 lg:py-24 xxsm:py-10 w-[92%] flex rounded-3xl  flex-wrap justify-around`}
            >
              <div className="w-[80px] hidden lg:block">
                <img
                  src="assets/database.svg"
                  className=" relative lg:bottom-9 lg:left-14  "
                ></img>
              </div>

              <div className="flex flex-col relative left-[-6px] xsm:flex-row items-center w-[55%] ">
                <p
                  className={`${colors.textSecondary} lg:text-lg
              sm:text-sm  text-center md:text-justify md:text-base  overflow-hidden my-3 lg:relative lg:left-[-35px] `}
                >
                  {text}
                </p>
              </div>
              <button
                className={` ${colors.buttonColor} ${colors.textSecondary} text-sm rounded-lg
            px-3 py-2  md:px-5 md:py-3 my-5 lg:text-lg self-center border ${colors.borderGreenColor} text-center w-56 `}
              >
                {button}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </VisibilitySensor>
  );
}
