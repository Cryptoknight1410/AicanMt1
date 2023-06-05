import React from 'react'
import Faqs from '../../components/industries/AutoMobiles/Faqs'
import LeftTextRightImage from '../../components/common/LeftTextRightImage'
import NavBar from '../../components/common/NavBar'
import RightTextLeftImage from '../../components/common/RightTextLeftImage'
import Seehowitworks from '../../components/common/seehowitworks'
import TopHeader from '../../components/common/TopHeader'
import AutomotiveSoftware from '../../components/industries/AutoMobiles/AutomotiveSoftware'
import Hero from '../../components/industries/AutoMobiles/Hero'
import Issues from '../../components/industries/AutoMobiles/issues'
import Forms from '../../components/common/Forms'
import Footer from '../../components/common/footer'
function Electronics() {
  return (
    <div>
        <TopHeader></TopHeader>
        <NavBar></NavBar>
        <Hero></Hero>
        <AutomotiveSoftware></AutomotiveSoftware>
        <LeftTextRightImage text={"Khsuhi" } img={"Image"} width={"w-4/5"}></LeftTextRightImage>
        <RightTextLeftImage text={"Khsuhi" } img={"Image"}  width={"w-4/5"}></RightTextLeftImage>
        <LeftTextRightImage text={"Khsuhi" } img={"Image"}  width={"w-4/5"}></LeftTextRightImage>

        <Seehowitworks text={"With AICAN, make data-driven decisions, drive efficiency, and unlock your manufacturing business's full potential. Seamlessly integrate with existing systems and scale as your business grows. Experience the power of complete tracking, real-time visibility, and actionable insights for enhanced operational efficiency."}></Seehowitworks>
        <Issues></Issues>
        <Seehowitworks text={"With AICAN, make data-driven decisions, drive efficiency, and unlock your manufacturing business's full potential. Seamlessly integrate with existing systems and scale as your business grows. Experience the power of complete tracking, real-time visibility, and actionable insights for enhanced operational efficiency."}></Seehowitworks>
        <Faqs></Faqs>
        <Forms></Forms>
        <Footer></Footer>
    </div>
  )
}

export default Electronics