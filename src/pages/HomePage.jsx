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
    <div className="lg:snap-y lg:h-screen lg:w-screen  lg:overflow-y-scroll lg:overflow-x-hidden ">
      <TopHeader onKnowMoreClick={handleScrollToForms} />
      <NavBar />
      <Hero />
      <div className="lg:mb-[60px]">

      </div>

      <HomePageImage></HomePageImage>

      <div className="lg:mb-[30px]">

      </div>

      <Seehowitworks
        text={
          "Optimize your factory floor operations with AICAN's SaaS platform. Gain real-time visibility into worker performance, work timings, and analyze productivity. Trace errors for root cause analysis and monitor cycle times and micro  stops for all machines."
        }
        button={"See how it works"}
        route="/Application/WorkerAnalytics"
      ></Seehowitworks>

      <TechnoWriting></TechnoWriting>

      <Technology startTransform={handleScrollToForms}></Technology>

      <QandA></QandA>


        <div></div>
      <Seehowitworks
        text={
          "By tracking and analyzing real-time data related to machine performance and worker activities, we empower you to quickly pinpoint the sources of errors, take immediate corrective actions, and continuously improve your manufacturing processes. Discover the power of our platform to unlock new levels of efficiency and profitability for your business."
        }
        button={"Learn More"}
        route="/Application/ErrorTracing"
      ></Seehowitworks>

      <Card1></Card1>

      <Features></Features>

      <Card2 margin="mt-[430px] " startTransform={handleScrollToForms}></Card2>


      <div id="forms-section">
      <Forms></Forms>
        </div>  

      <Blogs></Blogs>

      <Footer></Footer>
    </div>
  );
}

export default HomePage;
