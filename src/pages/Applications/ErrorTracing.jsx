import React from 'react'
import Freedemo from '../../components/application/Freedemo'
import RectangleComponent from '../../components/application/Hero'
import LeftCard from '../../components/application/LeftCard'
import LeftCard2 from '../../components/application/LeftCard2'
import RightCard from '../../components/application/RIghtCard'
import RightCard2 from '../../components/application/RightCard2'
import UnderstandYourData from '../../components/application/understandYourData'
import Card2 from '../../components/card2'
import Footer from '../../components/common/footer'
import NavBar from '../../components/common/NavBar'
import Seehowitworks from '../../components/common/seehowitworks'
import TopHeader from '../../components/common/TopHeader'
import Partners from '../../components/common/Partners'
import Colors from '../../constants/colors'
const colors=new Colors()

function ErrorTracing() {
  return (
    <div>
        <TopHeader></TopHeader>
        <NavBar></NavBar>
        <RectangleComponent header="Error Tracing"
        content="With our advanced tracking capabilities, we provide comprehensive data-driven insights that enable you to locate the exact source of errors, minimize downtime, and optimize your manufacturingprocesses for improved efficiency."
        image=" /assets/Applications/ErrorTracing.svg"
        ></RectangleComponent>
        <UnderstandYourData title="Understand Your Data" subheading ="Visual Management"></UnderstandYourData>
        <h3
        className={`${colors.headingColor}  text-sm w-[92%] mx-auto mt-16 font-bold `}
        >
        THREE STEP DEPLOYMENT
      </h3>
        <RightCard image=" /assets/Applications/hammer.svg"></RightCard>
        <div className="h-20"></div>
        <LeftCard image=" /assets/Applications/errortracingsecond.svg"></LeftCard>
        <div className="h-20"></div>
        <Freedemo></Freedemo>
        <div className='md:h-32'></div>
        <RightCard2 image=" /assets/Applications/errortracingthird.svg" heading="Optimized Production Processes and Reduced Downtime" subheading="Leverage the insights gained through Error Tracing to make informed decisions and optimize your production processes. Fine-tune machine settings, provide additional training to workers, or implement preventive maintenance measures based on the identified root causes. Our platform helps you take proactive steps to minimize errors, reduce downtime, and improve overall productivity, leading to increased profitability."></RightCard2>
        <div className="h-20"></div>
        <LeftCard2 image=" /assets/Applications/errortracingfourth.svg"  heading="Continuous Improvement and Performance Tracking" subheading="Our Error Tracing feature supports your continuous improvement initiatives by providing long-term performance tracking and analysis. Identify recurring errors or patterns, evaluate the effectiveness of implemented solutions, and measure the impact of process changes over time. Stay ahead of the competition by driving ongoing enhancements and refining your operations based on data-driven insights.
"></LeftCard2>
<div className="h-20"></div>
        <Card2></Card2>
        <div className="h-20"></div>
        <Seehowitworks text={"With AICAN, make data-driven decisions, drive efficiency, and unlock your manufacturing business's full potential. Seamlessly integrate with existing systems and scale as your business grows. Experience the power of complete tracking, real-time visibility, and actionable insights for enhanced operational efficiency."} button="See how it works"></Seehowitworks>
        
        <div className='h-20'></div>
        <Footer></Footer>
    </div>
  )
}

export default ErrorTracing