import React from "react";
import Freedemo from "../../components/application/Freedemo";
import RectangleComponent from "../../components/application/Hero";
import LeftCard from "../../components/application/LeftCard";
import LeftCard2 from "../../components/application/LeftCard2";
import RightCard from "../../components/application/RIghtCard";
import RightCard2 from "../../components/application/RightCard2";
import UnderstandYourData from "../../components/application/understandYourData";
import Card2 from "../../components/card2";
import Footer from "../../components/common/footer";
import NavBar from "../../components/common/NavBar";
import Seehowitworks from "../../components/common/seehowitworks";
import TopHeader from "../../components/common/TopHeader";
import Partners from "../../components/common/Partners";

function WorkerAnalytics() {
  return (
    <div>
      <TopHeader></TopHeader>
      <NavBar></NavBar>
      <RectangleComponent
        header="INVENTORY MANAGEMENT"
        content="With our advanced inventory management capabilities, factory managers can efficiently track stock, manage part numbers, analyze vendor raw materials, and gain valuable insights from product feedback. Discover how our Inventory Management feature helps streamline operations, optimize inventory levels, and drive data-informed decision-making for enhanced efficiency."
        image="/assets/Applications/InventoryManagement.svg"
      ></RectangleComponent>
      <UnderstandYourData
        title="DATA THAT MATTERS"
        subheading="EVERYTHING YOU NEED, NOTHING YOU DONT"
      ></UnderstandYourData>



      <RightCard2
        image=" /assets/Applications/inventory1.svg"
        heading="Efficient Stock Tracking and Management"
        subheading="Our Inventory Management feature provides an efficient solution for tracking and managing stock in your factory. With real-time updates and comprehensive data analysis, you can accurately monitor stock levels, track inventory movements, and streamline replenishment processes. Stay on top of your stock availability, reduce inventory holding costs, and ensure smooth production operations.
"
      ></RightCard2>

<div className="h-20"></div>


      <LeftCard2
        image=" /assets/Applications/inventory2.svg"
        heading="Part Number Management for Easy Identification"
        subheading="Simplify part identification and management with our Inventory Management feature. By assigning unique part numbers to each item, you can easily track and locate specific components within your inventory. Streamline inventory searches, eliminate confusion, and enhance overall inventory organization.

"
      ></LeftCard2>
      <div className="h-20"></div>
        <Freedemo></Freedemo>
        <div className="h-20"></div>
      <RightCard2
        image=" /assets/Applications/inventory3.svg"
        heading="Vendor Raw Material Analysis"
        subheading="Our platform enables you to analyze vendor raw materials within your inventory. By capturing and analyzing data related to vendor performance, material quality, pricing, and delivery timelines, you gain insights into the reliability and effectiveness of your suppliers. Make informed decisions about vendor selection, negotiate better contracts, and ensure a consistent supply of high-quality raw materials.

"
      ></RightCard2>
      <div className="h-20"></div>
      <LeftCard2
        image=" /assets/Applications/inventory4.svg"
        heading="Product Feedback Analysis for Continuous Improvement"
        subheading="Leverage our Inventory Management feature to analyze product feedback and drive continuous improvement. By capturing customer feedback, reviews, and performance data, you can identify opportunities for product enhancement and make informed decisions regarding quality improvements, design changes, or feature additions. Drive customer satisfaction, loyalty, and market competitiveness through data-driven product enhancements.

"
      ></LeftCard2>
      <div className="h-20"></div>
      <RightCard2
        image=" /assets/Applications/inventory5.svg"
        heading="Data-Driven Decision-Making for Inventory Optimization"
        subheading="Our Inventory Management feature enables data-driven decision-making to optimize inventory levels. By analyzing historical inventory data, demand patterns, production cycles, and market trends, you can optimize stock levels to meet customer demand while minimizing excess inventory and associated holding costs. Make informed decisions about order quantities, reorder points, and safety stock levels for improved inventory management.

        .

"
      ></RightCard2>
      <div className="h-20"></div>
      <LeftCard2
        image=" /assets/Applications/inventory6.svg"
        heading="Real-Time Updates and Notifications"
        subheading="Stay informed about inventory status and receive real-time updates and notifications through our platform. Get alerts when stock levels are running low, when reordering is required, or when inventory thresholds are reached. Ensure timely stock replenishment, avoid stockouts, and maintain smooth production operations.
"
      ></LeftCard2>
      <div className="h-20"></div>
      <RightCard2
        image=" /assets/Applications/inventory7.svg"
        heading="Streamlined Collaboration and Communication"
        subheading="Our Inventory Management feature facilitates streamlined collaboration and communication among stakeholders. Enable seamless information sharing between production teams, inventory managers, and suppliers to ensure accurate stock tracking, timely replenishment, and efficient supply chain management. Improve coordination, reduce delays, and optimize inventory processes.


"
      ></RightCard2>
      <div className="h-20"></div>
      
      <Card2></Card2>
      <div className="h-20"></div>
      <Seehowitworks
        text={
          "With AICAN, make data-driven decisions, drive efficiency, and unlock your manufacturing business's full potential. Seamlessly integrate with existing systems and scale as your business grows. Experience the power of complete tracking, real-time visibility, and actionable insights for enhanced operational efficiency."
        }
        button="See how it works"
      ></Seehowitworks>
      <div className="h-20"></div>

      <Footer></Footer>
    </div>
  );
}

export default WorkerAnalytics;
