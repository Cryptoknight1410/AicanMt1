import React from "react";
import Colors from "../constants/colors";
let colors=new Colors();
function Forms() {
  return (
    
     <div className={`${colors.primary} max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-lg my-10 px-4 lg:px-10 py-8 lg:py-12 `}>
  <div className={`${colors.primary} box-border p-4 lg:p-8`}>
    <h2 className="text-2xl font-bold text-white mb-2">
      YOUR FACTORY, OUR EXPERTISE
    </h2>
    <p className="text-white mb-4 ">
      Looking to jump start your digital transformation journey?{" "}
    </p>
    <div className="h-5"></div>
    <p className="text-white">
      Our team of experts are ready to guide you through the process of
      implementing AICAN's cutting-edge solutions into your manufacturing
      processes. With a personalized approach and a focus on your specific
      needs, we'll help you streamline operations and achieve new levels of
      efficiency.
    </p>
    <div className="flex flex-col lg:flex-row justify-between items-center mt-8">
      <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
        <img
          src="https://via.placeholder.com/100x100"
          alt="Image 1"
          className="h-16 w-16 lg:h-24 lg:w-24 rounded-full object-cover"
        />
        <p className="text-white mt-2">Vedant Awasthi</p>
        <p className="text-white ">Co-Founder of Aican</p>
      </div>
      <div className="w-full lg:w-1/2">
        <img
          src="https://via.placeholder.com/100x100"
          alt="Image 2"
          className="h-16 w-16 lg:h-24 lg:w-24 rounded-full object-cover"
        />
        <p className="text-white mt-2">Ritwik Dhar</p>
        <p className="text-white">Co-Founder of Aican</p>
      </div>
    </div>
  </div>
</div>
  );
}

export default Forms;
