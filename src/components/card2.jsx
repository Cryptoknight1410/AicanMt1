import React,{useState,useEffect} from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import { useMediaQuery } from 'react-responsive';
import VisibilitySensor from "react-visibility-sensor";
import Colors from "../constants/colors";
let colors = new Colors();
function Card2({margin,startTransform}) {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const [isVisible, setIsVisible] = useState(false);

  const [animateCards, setAnimateCards] = useState(false);
  const controls = useAnimation();
  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      
      setAnimateCards(true);
    }
  };
 
  return (
      <div className={`flex flex-col items-center md:${margin} overflow-hidden  w-[92%] mx-auto` }>
   

   
      <div className={`flex-col flex mb-9 mt-9 rounded-3xl w-full box-border p-5 ${colors.card2}` }>
        <div className="p-8 flex flex-col md:flex-row items-center justify-center">
          <div className="max-w-3xl mx-auto text-center md:text-left">
            <div className="px-6 py-4 text-center">
              <h3 className={`${colors.headingColor} text-lg font-bold`}>
                THREE STEP DEPLOYMENT
              </h3>
              <div className="h-4"></div>

              <p className={`text-lg lg:text-5xl ${colors.subheadingColor} sm:text-lg font-bold leading-9 `}>
                Going digital has never been easier!
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center flex-wrap">
        <div className="flex flex-col flex-wrap md:mt-0 mt-5">
            <div className={`text-center ${colors.textTomotoColor} font-extrabold sm:text-5xl text-2xl lg:text-8xl`}>
              1
            </div>
            <div className="w-52 md:w-80  text-sm text-center font-medium">
            Schedule a quick consultation session to lead your company towards a seamless digital transformation.
            </div>
          </div>

          <div className="flex flex-col flex-wrap md:mt-0 mt-5">
            <div className={`text-center ${colors.textTomotoColor} font-extrabold sm:text-5xl text-2xl lg:text-8xl`}>
              2
            </div>
            <div className="w-52 md:w-80  text-sm text-center font-medium">
            Our experts work closely with you to analyze your manufacturing processes and provide tailored solutions for optimizing production goals. 
            </div>
          </div>

        
        {/*  */}
        <div className="flex flex-col flex-wrap md:mt-0 mt-5">
            <div className={`text-center ${colors.textTomotoColor} font-extrabold sm:text-5xl text-2xl lg:text-8xl  `}>
              3
            </div>
            <div className="w-52 md:w-96  text-sm text-center font-medium">
            Revamp your factory floor with AICAN's cutting-edge sensor nodes seamlessly integrated with your machines and control units to provide real-time worker analytics.
            </div>
          </div>
        </div>

        <div className=" items-center flex flex-col ">
          <hr className={`${colors.borderTomotoColor} w-full my-6 mt-20`} />
          <div className="flex items-baseline justify-center ">
            <h3
              className={`text-sm my-3 sm:text-base lg:text-base ${colors.textTomotoColor} font-semibold text-center cursor-pointer tracking-[0.5em] `} onClick={startTransform}
            >
              START YOUR TRANSFORMATION NOW
            </h3>
            <AiOutlineArrowRight
              className={`hidden xsm:block cursor-pointer ${colors.textTomotoColor} font-semibold`}
            />
          </div>
        </div>
      </div>
  

      </div>
  );
}

export default Card2;
