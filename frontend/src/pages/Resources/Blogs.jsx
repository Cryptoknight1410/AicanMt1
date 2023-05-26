import React from 'react'
import Footer from '../../components/common/footer'
import NavBar from '../../components/common/NavBar'
import Seehowitworks from '../../components/common/seehowitworks'
import TopHeader from '../../components/common/TopHeader'
import Hero from '../../components/resources/Hero'
import Pagination from '../../components/resources/Pagination'
function Blogs() {
  return (
    <div>
        <TopHeader></TopHeader>
        <NavBar></NavBar>
        <Hero></Hero>
        <Pagination></Pagination>
        <Seehowitworks text={'Built by people who know manufacturing, Mingo Smart Factory provides the 21st century “Smart Factory” experience that manufacturers need to grow in a modern environment. See how it can help you drive revenue.'}></Seehowitworks>
        <Footer></Footer>

    </div>
  )
}

export default Blogs