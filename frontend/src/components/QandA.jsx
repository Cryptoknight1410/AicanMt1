import React,{useState,useEffect} from "react";
import { motion,useAnimation } from "framer-motion";
import Colors from "../constants/colors";
import VisibilitySensor from "react-visibility-sensor";

function QandA() {
  const colors = new Colors();

  const cardVariants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    
  };
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
    <div className="flex flex-col justify-center items-center mt-5 md:mb-[120px]">
      <div className="flex flex-col justify-center items-center  md:my-[100px]">
        <h3 className={`${colors.headingColor}  text-xl text-center font-semibold`}>
          YOUR CHALLENGES,OUR SOLUTION
        </h3>
        <h1
          className={`sm:text-lg ${colors.subheadingColor} lg:text-5xl font-bold text-center mb-2 w-[60%] md:w-[60%]`}
        >
          Looking for answers to these questions?
        </h1>
      </div>
      <div className="w-[92%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 my-10 items-center mx-auto justify-center">
          <VisibilitySensor partialVisibility onChange={handleVisibilityChange}>
          {({ isVisible }) => (
          <motion.div
            initial="initial"
            animate="animate"
            variants={cardVariants}
            translate={{duration:5}}
            className="bg-[#F5E3F7] flex flex-col md:flex-row items-center rounded-3xl md:h-[170px]"
          >
            <div className="w-full md:w-64">
              <img
                src="./src/assets/sphere1.svg"
                alt="Card"
                className="object-contain mx-auto md:mx-0"
              />
            </div>
            <div className="flex items-center  lg:mx-7 text-lg font-semibold relative left-5">
              <p className={`text-center md:text-left ${colors.subheadingColor} mr-5`}>
                Struggling with frequent unplanned downtime and lacking visibility into machine issues?
              </p>
            </div>
          </motion.div>
            )}
            </VisibilitySensor>
          
          <motion.div
            initial="initial"
            animate="animate"
            variants={cardVariants}
            translate={{duration:5}}
            className="bg-[#F5E3F7] flex flex-col md:flex-row items-center rounded-3xl md:h-[170px]"
          >
            <div className="w-full md:w-64">
              <img
                src="./src/assets/cube.svg"
                alt="Card"
                className="object-contain mx-auto md:mx-0"
              />
            </div>
            <div className="flex items-center lg:mx-7 text-lg font-semibold">
              <p className={`text-center md:text-left ${colors.subheadingColor}`}>
                Losing money due to poorly tracked cycle times and high scrap rates?
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            translate={{duration:5}}
            variants={cardVariants}
            className="bg-[#F5E3F7] flex flex-col md:flex-row items-center rounded-3xl md:h-[170px]"
          >
            <div className="w-full md:w-64">
              <img
                src="./src/assets/stack.svg"
                alt="Card"
                className="object-contain mx-auto md:mx-0"
              />
            </div>
            <div className="flex items-center lg:mx-7 text-lg font-semibold">
              <p className={`text-center md:text-left ${colors.subheadingColor}`}>
                Spending too much time generating reports instead of problem-solving?
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            translate={{duration:5}}
            variants={cardVariants}
            className="bg-[#F5E3F7] flex flex-col md:flex-row items-center rounded-3xl md:h-[170px]"
          >
            <div className="w-full md:w-64">
              <img
                src="./src/assets/sphere2.svg"
                alt="Card"
                className="object-contain mx-auto md:mx-0"
              />
            </div>
            <div className="flex items-center lg:mx-7 text-lg font-semibold">
              <p className={`text-center md:text-left ${colors.subheadingColor}`}>
                Failing to meet production goals and facing customer dissatisfaction?
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default QandA;




