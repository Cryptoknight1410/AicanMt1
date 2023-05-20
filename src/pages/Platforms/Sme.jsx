import React from 'react'
import TopHeader from '../../components/common/TopHeader'
import NavBar from '../../components/common/NavBar'
import Hero from '../../components/platform/Hero'
import LeftCards from '../../components/platform/LeftCards'
import RightCards from '../../components/platform/RightCards'
import Cards from '../../components/platform/Cards'
import Features from '../../components/platform/Features'
import Data from '../../components/platform/Data'
import Footer from '../../components/common/footer'
import Seehowitworks from '../../components/common/seehowitworks'

function Sme() {
  return (
    <div>

    <TopHeader></TopHeader>
    <NavBar></NavBar>
    <Hero></Hero>
    <LeftCards></LeftCards>
    <RightCards></RightCards>
    <LeftCards></LeftCards>
    <RightCards></RightCards>
    <LeftCards></LeftCards>
    <Features></Features>
    <LeftCards></LeftCards>
    <Cards></Cards>
    <Data></Data>
    <Seehowitworks text={"With AICAN, make data-driven decisions, drive efficiency, and unlock your manufacturing business's full potential. Seamlessly integrate with existing systems and scale as your business grows. Experience the power of complete tracking, real-time visibility, and actionable insights for enhanced operational efficiency."}></Seehowitworks>
    <Footer></Footer>
    </div>
  )
}

export default Sme