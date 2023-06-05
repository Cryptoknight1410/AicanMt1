import React,{useState,useEffect}from "react";
import Colors from "../constants/colors";
import { AiOutlineArrowRight } from "react-icons/all";
import { motion, useAnimation } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
function Technology() {
  const [isVisible, setIsVisible] = useState(false);
  const colors = new Colors();
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
    <div className="flex flex-col justify-center items-center ">

      <div className="my-[80px] flex flex-col justify-center items-center">


      <h3
        className={`${colors.headingColor}  text-xl text-center font-semibold `}
        >
        TECHNOLOGY ARCHITECTURE
      </h3>
      <h1
        className={`sm:text-lg ${colors.subheadingColor} lg:text-5xl font-bold text-center  w-[60%] md:w-[60%]`}
        >
        Everything about your factory - all on a single screen
      </h1>
      <div className="h-0 md:h-10"></div>
        </div>
      <div
        className={`${colors.lightbluish} flex-col flex my-9  rounded-3xl w-[92%]  box-border p-5`}
      >
        <div className=" px-8 flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 md:text-center mb-6 md:mb-0">
            <img
              src="assets/Group_80_1.png"
              alt="Example Image"
              className="mx-auto object-contain min-h-[50%]" 
            />
          </div>
          <div className="max-w-2xl mx-auto text-center md:text-left ">
            <div className="sm:px-10 sm:py-4">
              <div
                className={`text-lg lg:text-4xl ${colors.subheadingColor} text-center md:text-left sm:text-lg font-bold mb-16 mt-[40px] w-full`}
              >
               <p className=""> Accelerate your <br></br> Digital Transformation</p>
              </div>
              <p className=" text-center sm:text-base  sm:text-justify ">
                Embark on your digital transformation journey with AICAN's
                game-changing SaaS platform.
              </p>
              <div className="h-5"></div>
              
              <p className=" sm:text-base  texte-center sm:text-justify">
                Designed by manufacturing experts, it empowers you to embrace
                the future of manufacturing. Seamlessly access the platform via
                web and mobile apps, leverage cutting-edge modular sensor
                technology, and unlock new opportunities for growth and
                efficiency.
              </p>
              <div className="h-5"></div>
              <p className="text-center sm:text-base mb-[40px] sm:text-justify">
                Let AICAN be your partner on the path to digital transformation
                and drive your business forward.
              </p>
            </div>
          </div>
        </div>

        <div className=" items-center flex flex-col ">
          <hr className={`${colors.borderBlueColor} w-full my-6`} />
          <div className="flex items-baseline justify-center ">
            <h3
              className={`text-sm my-3 sm:text-base lg:text-lg ${colors.headingColor} font-semibold text-center cursor-pointer tracking-[0.5em]`}
            >
              START YOUR TRANSFORMATION NOW
            </h3>
            <AiOutlineArrowRight
              className={`hidden xsm:block cursor-pointer ${colors.textPrimary} font-semibold`}
            />
          </div>
        </div>
      </div>
    </div>
       </motion.div>
       )}
     </VisibilitySensor>
  );
}

export default Technology;
