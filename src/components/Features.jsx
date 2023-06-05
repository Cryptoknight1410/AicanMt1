import React,{useState,useEffect} from "react";
import Colors from "../constants/colors";
import { motion } from 'framer-motion';
import {  useAnimation } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

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
    <div className="bg-black w-[92%] flex mx-auto rounded-3xl mt-14 md:mb-[350px] h-[900px] box-border">
      <div className="w-full">
        <div className="h-[900px] bg-[url('../../assets/Features.svg')] flex mx-auto justify-center bg-cover text-center">
          <div className={`text-center ${colors.textSecondary} flex flex-col py-16`}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-center"
            >
              <motion.span
                whileHover={{ color: 'yellow' }}
                whileTap={{ scale: 0.9 }}
              >
                FEATURES
              </motion.span>
            </motion.div>
            <h1 className={`font-semibold text-xl md:text-4xl w-[60%] mx-auto`}>
              Powerful Tool to Solve Your Toughest Challenges
            </h1>

            <div className={`flex xsm:flex-row w-full text-center flex-col xsm:flex-wrap h-[40%] xxsm:p-5 xsm:justify-between xsm:text-left mt-20 mx-auto`}>
              <div className={`flex flex-col h-full justify-between`}>
                {items1.map((items, index) => (
                  <div key={index} className="flex text-sm">
                    <motion.img
                      whileHover={{ scale: 1.2, filter: 'brightness(1.2)' }}
                      whileTap={{ scale: 0.9 }}
                      src="assets/tickMark.svg"
                      className="mr-2 mb-2"
                      alt="Tick Mark"
                    />
                    <motion.span
                      whileHover={{ color: 'yellow' }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {items}
                    </motion.span>
                  </div>
                ))}
              </div>
              <div className={`flex flex-col h-full text-left justify-between`}>
                {items2.map((items, index) => (
                  <div key={index} className="flex md:text-sm">
                    <motion.img
                      whileHover={{ scale: 1.2, filter: 'brightness(1.2)' }}
                      whileTap={{ scale: 0.9 }}
                      src="assets/tickMark.svg"
                      className="mr-2 mb-2"
                      alt="Tick Mark"
                    />
                    <motion.span
                      whileHover={{ color: 'yellow' }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {items}
                    </motion.span>
                  </div>
                ))}
              </div>
              <div className={`flex flex-col h-full text-left justify-between`}>
                {items3.map((items, index) => (
                  <div key={index} className="flex md:text-sm">
                    <motion.img
                      whileHover={{ scale: 1.2, filter: 'brightness(1.2)' }}
                      whileTap={{ scale: 0.9 }}
                      src="assets/tickMark.svg"
                      className="mr-2 mb-2"
                      alt="Tick Mark"
                    />
                    <motion.span
                      whileHover={{ color: 'yellow' }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {items}
                    </motion.span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden mx-auto relative top-[-350px] w-[80%] md:flex justify-center">
          <img src="assets/SingleHero.svg" className="object-contain" alt="Hero Image" />
        </div>
      </div>
    </div>
  );
    
}

export default Features;
