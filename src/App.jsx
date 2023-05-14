import React, { useEffect } from 'react'
import TopHeader from './components/TopHeader'
import WebFont from "webfontloader";
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Footer from './components/footer';
import Seehowitworks from './components/seehowitworks';
import Technology from './components/technology';
import QandA from './components/QandA';
import Forms from './components/Forms';
import Card1 from './components/card1';
import Card2 from './components/card2';
import Features from './components/Features';
import Blogs from './components/Blogs';
function App() {
  useEffect(()=>{
    WebFont.load({google:{
      families:['Poppins:300, 400, 500, 600, 700'],
    }})
  },[]);
  return (
    <div className='font-poppins'>
      <TopHeader/>
      <NavBar/>
      <Hero/>
       <Seehowitworks text={"Optimize your factory floor operations with AICAN's SaaS platform. Gain real-time visibility into worker performance, work timings, and analyze productivity. Trace errors for root cause analysis and monitor cycle times and micro  stops for all machines." }></Seehowitworks>
      <Technology></Technology>
      <QandA></QandA>
      <Seehowitworks text={"With AICAN, make data-driven decisions, drive efficiency, and unlock your manufacturing business's full potential. Seamlessly integrate with existing systems and scale as your business grows. Experience the power of complete tracking, real-time visibility, and actionable insights for enhanced operational efficiency." }></Seehowitworks>
      
      <Card1></Card1> 
      <Features></Features>
      <Card2></Card2> 
      <Forms></Forms>
      <Blogs></Blogs>

     



    <Footer></Footer> 
 
      

    </div>
  )
}

export default App