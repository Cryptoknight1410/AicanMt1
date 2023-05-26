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


function WorkerAnalytics() {
  return (
    <div>
        <TopHeader></TopHeader>
        <NavBar></NavBar>
        <RectangleComponent></RectangleComponent>
        <UnderstandYourData></UnderstandYourData>
        <RightCard></RightCard>
        <LeftCard></LeftCard>
        <Freedemo></Freedemo>
        <RightCard2></RightCard2>
        <LeftCard2></LeftCard2>
        <Card2></Card2>
        <Partners></Partners>
        <Seehowitworks text={"With AICAN, make data-driven decisions, drive efficiency, and unlock your manufacturing business's full potential. Seamlessly integrate with existing systems and scale as your business grows. Experience the power of complete tracking, real-time visibility, and actionable insights for enhanced operational efficiency."}></Seehowitworks>
        
        <Footer></Footer>
    </div>
  )
}

export default WorkerAnalytics