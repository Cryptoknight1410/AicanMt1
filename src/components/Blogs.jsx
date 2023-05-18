import React from 'react'

function Blogs() {
    const Card = ({ image, title, subtitle }) => (
        <div className="p-4 flex">
          <div className="flex-shrink-0">
            <img className="h-48 w-48 rounded-lg" src={image} alt={title} />
          </div>
          <div className="ml-6 pt-1">
            <h4 className="text-xl font-semibold">{title}</h4>
            <p className="mt-1">{subtitle}</p>
            <a href="#" className="mt-2 text-blue-500 inline-block">
              Read more
            </a>
          </div>
        </div>
      );
      
      const Blog = () => (
        <div className="w-3/4 mx-auto px-4 sm:px-6 lg:px-8 bg-slate-100 mb-20">
          <div className="py-12">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Blog
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-500">
                Stay ahead of the Game with Aican
              </p>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <Card
                  image="https://tailwindui.com/img/placeholder-images/gray-600/indoor-soccer-600x600-1.jpg"
                  title="Indoor Soccer"
                  subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra libero vel ex gravida."
                />
                <Card
                  image="https://tailwindui.com/img/placeholder-images/gray-600/basketball-600x600-1.jpg"
                  title="Basketball"
                  subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra libero vel ex gravida."
                />
                <Card
                  image="https://tailwindui.com/img/placeholder-images/gray-600/tennis-600x600-1.jpg"
                  title="Tennis"
                  subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra libero vel ex gravida."
                />
                <Card
                  image="https://tailwindui.com/img/placeholder-images/gray-600/football-600x600-1.jpg"
                  title="Football"
                  subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra libero vel ex gravida."
                />
                <Card
                  image="https://tailwindui.com/img/placeholder-images/gray-600/volleyball-600x600-1.jpg"
                  title="Volleyball"
                  subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra libero vel ex gravida."
                />
                <Card
                  image="https://tailwindui.com/img/placeholder-images/gray-600/hockey-600x600-1.jpg"
                  title="Hockey"
                  subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra libero vel ex gravida."
                />
              </div>
            </div>
          </div>
        </div>
      );
      

      
      
      
      
      
      
      
  return (
    <div className="flex flex-col justify-center items-center mt-16">
    <h3 className="text-blue-950 space-x-1 text-4xl mb-8 text-center font-semibold">
      Modular Platform for Your Unique Needs
    </h3>
    <h1 className="sm:text-lg lg:text-xl  text-black text-center mb-2 w-[60%] md:w-[60%]">
    We understand that every factory has unique requirements and challenges. Our platform is designed to be highly customizable to meet those needs, both in terms of hardware and software. With AICAN, you don't need to make any changes to your existing factory setup.
    </h1>

    <div className='hidden md:block mt-6'>
        <Blog></Blog>
    </div>
    </div>
  )
}

export default Blogs