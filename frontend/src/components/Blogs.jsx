import React from "react";
import Colors from "../constants/colors";
const colors = new Colors();
function Blogs() {
  const Card = ({ image, title, subtitle }) => (
    <div className="p-4 flex flex-col w-[90%]">
      <img className="h-48 w-60 rounded-lg" src={image} />

      <div className="pt-1">
        <h4 className="text-xl font-semibold w-[60%] ">{title}</h4>
        <div className="flex flex-row justify-between w-48">
          <h1 className="text-xs">Aican Team</h1>
          <h1 className="text-xs">3 min Read</h1>
        </div>

        <p className="mt-1 w-full text-sm">{subtitle}</p>
        <a
          href="#"
          className={` ${colors.textGreenColor2} text-xs inline-block`}
        >
          Read more &gt;&gt;
        </a>
      </div>
    </div>
  );

  const Blog = () => (
    <div className="w-full mx-auto px-4  sm:px-6 lg:px-8 bg-slate-100  z-[-1]">
      <div className="py-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Blog
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Stay ahead of the Game with Aican
          </p>
        </div>
        <div className="mt-10 ">
          <div className="flex flex-row justify-around">
            <div className="w-[50%]">
              <Card
                image="https://tailwindui.com/img/placeholder-images"
                subtitle=""
                title="How to Calculate OEE in Excel Video"
              />
              <Card
                image="https://tailwindui.com/img/placeholder-images/"
                title="How to Calculate OEE in Excel Video"
                subtitle=""
              />
            </div>

            <div className="w-[60%] flex items-center  justify-center">
              <Card
                image="https://tailwindui.com/img/placeholder-images/"
                title="How to Calculate OEE in Excel Video"
                subtitle="Calculating OEE in Excel is a quick and easy way to understand how your machines or manufacturing processes are performing. OEE is one of the KPIs every manufacturing company should track. OEE stands for Overall Equipment Effectiveness; it measures.."
              />
            </div>

            <img className={`h-[500px] bg-gray-400 w-1/2 align-middle`}></img>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="mb-28">

      <h3 className="text-blue-950 space-x-1 text-4xl mt-8 mb-10 text-center font-semibold">
        Modular Platform for Your Unique Needs
      </h3>
      <h1 className="sm:text-lg lg:text-xl  text-black  mx-auto md:w-[80%] flex  justify-center items-center text-center">
        We understand that every factory has unique requirements and challenges.
        Our platform is designed to be highly customizable to meet those needs,
        both in terms of hardware and software. With AICAN, you don't need to
        make any changes to your existing factory setup.
      </h1>
      </div>

      <div className="hidden md:block mt-6">
        <Blog ></Blog>

      </div>
      


    </div>
  );
}

export default Blogs;
