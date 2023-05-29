import React from "react";
import Colors from "../../constants/colors";
let colors = new Colors();
function Forms() {
  return (
    <div class={`flex   rounded-3xl md:my-28 my-5 `}>
      <div
        className={`hidden md:block ${colors.BgColor} md:w-[60%] md:rounded-3xl md:ml-[60px] lg:pl-20 lg:pr-32 py-20`}
      >
        <div className={`flex-col flex`}>
          <h1
            className={`w-[65%]
            ${colors.textSecondary} text-4xl  font-semibold`}
          >
            YOUR FACTORY, OUR EXPERTISE
          </h1>
          <div className="h-5"></div>
          <p className={`${colors.textSecondary} text-base`}>
            Looking to jump start your digital transformation journey?
          </p>
          <div className="h-7"></div>
          <p className={`${colors.textSecondary} text-base w-full`}>
            Our team of experts are ready to guide you through the process of
            implementing AICAN's cutting-edge solutions into your manufacturing
            processes. With a personalized approach and a focus on your specific
            needs, we'll help you streamline operations and achieve new levels
            of efficiency.
          </p>
          <div className="h-20"></div>
          <div className={`flex`}>
            <div className={`flex flex-col`}>
              <img
                src="https://via.placeholder.com/100x100"
                alt="Image 1"
                class="h-16 w-16 lg:h-24 lg:w-24 rounded-full object-cover"
              />
              <p className={`mt-2 ${colors.textSecondary}`}>Vedant Awasthi</p>
              <p className={` ${colors.textSecondary}`}>Co-Founder of Aican</p>
            </div>
            <div className="w-5"></div>
            <div className={`flex flex-col`}>
              <img
                src="https://via.placeholder.com/100x100"
                alt="Image 1"
                class="h-16 w-16 lg:h-24 lg:w-24 rounded-full object-cover"
              />
              <p className={`mt-2 ${colors.textSecondary}`}>Ritwik Dhar</p>
              <p className={` ${colors.textSecondary}`}>Co-Founder of Aican</p>
            </div>
            <img className="relative top-[-80px] " src="../src/assets/Hi.svg"></img>
          </div>
        </div>
      </div>


      
      <div
        className={`${colors.card1} w-4/5  md:w-2/5 my-10 h-[50%] relative md:right-[60px] rounded-3xl md:px-32 py-10 px-5`}
      >
        <h2 class="text-xl md:text-5xl font-bold mb-4 text-center lg:text-left">
          Talk to our <span class="text-green-700">Experts</span>
        </h2>
        <p class="text-gray-600 mb-6 font-medium text-center lg:text-left">
          Contact us today to learn more and start your journey towards a
          smarter future.
        </p>

        <form>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="name">
              Name
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
              Email
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="contact">
              Contact
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contact"
              type="text"
              placeholder="Enter your phone number"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="company">
              Company
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="company"
              type="text"
              placeholder="Enter your company name"
            />
          </div>
          <div className="h-5"></div>
          <button
            className={` ${colors.textSecondary} font-bold py-2 px-4 rounded-xl block  focus:outline-none focus:shadow-outline w-full text-center ${colors.buttonColor}`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Forms;
