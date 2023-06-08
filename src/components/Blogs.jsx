import React from "react";
import Colors from "../constants/colors";
const colors = new Colors();
function Blogs() {
  const Card = ({ image, title, subtitle ,h,imagemargin}) => (
    <div className="p-4 flex flex-col w-[90%]">
      <div >

      <img className={` ${h} w-[80%] rounded-lg" ${imagemargin} `} src={image} />
      </div>

      <div className="pt-1">
        <h4 className={`text-xl font-bold w-[80%] ${colors.subheadingColor}`}>{title}</h4>
        <div className="flex flex-row justify-between w-48">
          <h1 className="text-xs text-[#4C4C4C]">AICAN Team</h1>
          <h1 className="text-xs text-[#4C4C4C]">3 min Read</h1>
        </div>

        <p className={`mt-1 w-[80%] text-xs ${colors.subheadingColor} font-medium`}>{subtitle}</p>
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
        <h3
        className={`${colors.headingColor}  text-xl text-center font-semibold `}
        >
        BLOGS
      </h3>
          <p className={`mt-4 text-lg md:text-4xl ${colors.subheadingColor } font-semibold text-[px]`}>
            Stay ahead of the Game with AICAN
          </p>
        </div>
        <div className="mt-10 ">
          <div className="flex flex-row justify-around items-start">
            <div className="w-[50%]">
              <Card
              imagemargin=""
               h="h-full"
                image="/assets/blogs/Blog4.jpg"
                subtitle=""
                title="Predictive Maintenance and Real-Time Monitoring"
              />
              <Card
              imagemargin=""
               h="h-full"
                image="/assets/blogs/Blog2.jpg"
                title="The Role of Digitization in Optimizing Industrial Processes
                "
                subtitle=""
              />
            </div>

            <div className="w-[50%] flex items-center  justify-center">
              <Card
                imagemargin="mb-[50px]"
                h="h-[300px]"
                image="/assets/blogs/Blog1.jpg"
                title="India's Rise in Manufacturing: How it will Dominate the Global Manufacturing Sector in the upcoming years

                "
                subtitle="With over 1.4 billion citizens, India is the second-most populated nation in the world and is expected to surpass China by 2027. India is also the world’s fastest-growing major economy, with an annual growth rate of 7.5% in 2016. In some ways, India is already a manufacturing powerhouse. It is the world’s second-largest producer of steel, and it has the world’s third-largest automotive industry.
                But India’s manufacturing sector..
                "
              />
            </div>

            <img className={`h-[700px]  bg-gray-400 w-[700px] align-middle`}></img>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="mb-28">

      <h3 className={` space-x-1 text-xl sm:text-4xl mt-8 mb-10 text-center font-semibold ${colors.subheadingColor}`}>
        Modular Platform for Your Unique Needs
      </h3>
      <h1 className="text-sm sm:text-lg lg:text-xl  text-black  mx-auto md:w-[80%] flex  justify-center items-center text-center">
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
