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
import Footer2 from "../components/common/footer2";
function HomePage() {
  return (
    <>
      <TopHeader />
      <NavBar />
      <Hero />
      <Seehowitworks
        text={
          "Optimize your factory floor operations with AICAN's SaaS platform. Gain real-time visibility into worker performance, work timings, and analyze productivity. Trace errors for root cause analysis and monitor cycle times and micro  stops for all machines."
        } button={"See how it works"}
      ></Seehowitworks>
      <Technology></Technology>
      <QandA></QandA>
      <Seehowitworks
        text={
          "By tracking and analyzing real-time data related to machine performance and worker activities, we empower you to quickly pinpoint the sources of errors, take immediate corrective actions, and continuously improve your manufacturing processes. Discover the power of our platform to unlock new levels of efficiency and profitability for your business."
        } button={"Learn More"}
      ></Seehowitworks>

      <Card1></Card1>
      <Features></Features>
      <Card2></Card2>
      <Forms></Forms>
      <Blogs></Blogs>
     
  
      <Footer></Footer>

      

    
    </>
  );
}

export default HomePage;
