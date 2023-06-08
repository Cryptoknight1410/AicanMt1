import React from "react";
import TopHeader from "../components/common/TopHeader";
import NavBar from "../components/common/NavBar";
import Hero from "../components/Hero";
import Seehowitworks from "../components/common/seehowitworks";
import Technology from "../components/technology";
import QandA from "../components/QandA";
import Card1 from "../components/card1";
import Card2 from "../components/card2";
import Features from "../components/Features";
import Blogs from "../components/Blogs";
import Footer from "../components/common/footer";
import Forms from "../components/common/Forms";
import HomePageImage from "../components/HomePageImage";
import TechnoWriting from "../components/TechnoWriting";
import { animateScroll as scroll } from "react-scroll";

function HomePage() {
  const handleScrollToForms = () => {
   
    const formsSection = document.getElementById("forms-section");
    formsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    
  };

  return (
    <div className="lg:snap-y lg:h-screen lg:w-screen  lg:overflow-y-scroll lg:overflow-x-hidden lg:snap-mandatory">
      <div className="lg:w-screen lg:h-screen lg:snap-center">
        <TopHeader  onKnowMoreClick={handleScrollToForms}/>
        <NavBar />
        <Hero />
      </div>

      <div className="lg:w-screen lg:h-screen lg:snap-center ">
        <HomePageImage></HomePageImage>
      </div>

      <div className="lg:w-screen lg:h-screen lg:snap-center flex-col ">
        <div >

        <Seehowitworks
          text={
            "Optimize your factory floor operations with AICAN's SaaS platform. Gain real-time visibility into worker performance, work timings, and analyze productivity. Trace errors for root cause analysis and monitor cycle times and micro  stops for all machines."
          }
          button={"See how it works"} route="/Application/WorkerAnalytics"
          ></Seehowitworks>
          </div>
          <div>

        <TechnoWriting></TechnoWriting>
          </div>
      </div>

      <div className="lg:w-screen  lg:snap-center my-5  ">
        <Technology startTransform={handleScrollToForms}></Technology>
      </div>

      <div className="w-screen lg:h-screen snap-center  lg:relative lg:top-5">
        <QandA></QandA>
      </div>
      <div className="lg:w-screen lg:h-screen lg:snap-center flex lg:items-center justify-center">
        <Seehowitworks
          text={
            "By tracking and analyzing real-time data related to machine performance and worker activities, we empower you to quickly pinpoint the sources of errors, take immediate corrective actions, and continuously improve your manufacturing processes. Discover the power of our platform to unlock new levels of efficiency and profitability for your business."
          }
          button={"Learn More"} route="/Application/ErrorTracing"
        ></Seehowitworks>
      </div>

      <div className="w-screen lg:h-screen lg:snap-center ">
        <Card1></Card1>
      </div>
      <div className="lg:w-screen  lg:snap-center ">
        <Features></Features>
      </div>

      <div className="lg:w-screen lg:h-screen lg:snap-center 0 relative top-[100px] ">
        <Card2 margin="mt-[430px] " startTransform={handleScrollToForms}></Card2>
      </div>

      <div className="lg:w-screen g:h-screen lg:snap-center lg:relative " id="forms-section">
        <Forms></Forms>
      </div>
      <div className="lg:w-screen lg:h-screen lg:snap-start lg:relative lg:top-[200px]">
        <Blogs></Blogs>
      </div>

      <div className="lg:w-screen h-[90px] lg:snap-start lg:relative top-[670px]" >
        <Footer></Footer>
      </div>
    </div>
  );
}

export default HomePage;
