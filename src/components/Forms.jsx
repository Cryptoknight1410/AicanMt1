import React from "react";
import Colors from "../constants/colors";
import Button from "./Button";
let colors = new Colors();
function Forms() {
  return (
   


    <div class="flex flex-col lg:flex-row justify-center my-16 ">
  <div class="bg-blue-950 max-w-4xl rounded-3xl h-auto lg:h-1/2 overflow-hidden hidden md:block shadow-lg my-10 px-4 lg:px-10 py-8 lg:py-12 bg-primary text-white">
    <div class="hidden lg:block box-border p-4 lg:p-8">
      <h2 class="w-full lg:w-[400px] mb-10 text-5xl font-bold">
        YOUR FACTORY, OUR EXPERTISE
      </h2>
      <p class="mb-4">
        Looking to jump start your digital transformation journey?
      </p>
      <div class="h-5"></div>
      <p class="w-full lg:w-1/2">
        Our team of experts are ready to guide you through the process of implementing AICAN's cutting-edge solutions into your manufacturing processes. With a personalized approach and a focus on your specific needs, we'll help you streamline operations and achieve new levels of efficiency.
      </p>
      <div class="h-16"></div>
      <div class="flex flex-col lg:flex-row items-center mt-8 ">
        <div class="mr-10 mb-4 lg:mb-0">
          <img
            src="https://via.placeholder.com/100x100"
            alt="Image 1"
            class="h-16 w-16 lg:h-24 lg:w-24 rounded-full object-cover"
          />
          <p class="mt-2">Vedant Awasthi</p>
          <p class="">Co-Founder of Aican</p>
        </div>
        <div class="w-full lg:w-1/2">
          <img
            src="https://via.placeholder.com/100x100"
            alt="Image 2"
            class="h-16 w-16 lg:h-24 lg:w-24 rounded-full object-cover"
          />
          <p class="mt-2">Ritwik Dhar</p>
          <p class="">Co-Founder of Aican</p>
        </div>
        <div class="lg:relative right-[160px] bottom-[80px]">
          <img src="./src/assets/Hi.svg" alt="Hi" class="" />
        </div>
      </div>
    </div>
  </div>
  <div class="bg-gray-100 z-40 rounded-3xl shadow-lg w-full lg:w-auto px-6 lg:px-32 py-6 lg:py-32 mt-10 lg:mt-0 lg:relative lg:left-[-200px]">
    <h2 class="text-5xl font-bold mb-4 text-center lg:text-left">
      Talk to our <span class="text-green-700">Experts</span>
    </h2>
    <p class="text-gray-600 mb-6 font-medium text-center lg:text-left">
      Contact us today and start your journey towards a smarter future
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
           <Button success
             className="  text-white font-bold py-2 px-4 rounded-xl block self-center focus:outline-none focus:shadow-outline"
           
           >
             Submit
           </Button>
         </form>
     
     
</div>
</div>
  );
}

export default Forms;
