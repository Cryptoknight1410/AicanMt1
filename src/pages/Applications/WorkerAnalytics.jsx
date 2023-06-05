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
        header="Worker Analytics"
        content="With advanced data analysis and interactive dashboards backed by RFID-based tags, our Worker Analytics feature offers valuable insights into worker performance, efficiency, suitability for processes, and defect tracking. Discover how Worker Analytics can optimize your workforce and improve operational efficiency."
        image="../src/assets/Applications/WorkerAnalytics.svg"
      ></RectangleComponent>
      <UnderstandYourData
        title="DATA THAT MATTERS"
        subheading="EVERYTHING YOU NEED, NOTHING YOU DONT"
      ></UnderstandYourData>
      <RightCard2
        image="../src/assets/Applications/workanalytics1.svg"
        heading="Performance-Based Insights for Process Suitability"
        subheading="Track worker efficiency in each process with our Worker Analytics. By monitoring key performance indicators like production output, cycle time, and error rates, we generate accurate efficiency scores for individual workers. Identify top performers, track improvements, and address performance gaps to enhance overall productivity.

"
      ></RightCard2>
      <LeftCard2
        image="../src/assets/Applications/workanalytics2.svg"
        heading="Efficiency Tracking for Each Worker in Every Process"
        subheading="Optimize your workforce by leveraging performance-based insights from our Worker Analytics feature. Our platform analyzes worker data, including skills, experience, and historical performance, to determine the most suitable worker for each process. Make informed decisions to maximize efficiency and achieve optimal outcomes.
"
      ></LeftCard2>
      <Freedemo></Freedemo>
      <RightCard2
        image="../src/assets/Applications/workanalytics3.svg"
        heading="Comprehensive Time Tracking: Worked Time and Time Wasted"
        subheading="Gain valuable insights into worked time and time wasted with our comprehensive time tracking capabilities. Our Worker Analytics feature accurately captures worker time on tasks, breaks, and non-productive activities. Identify opportunities to minimize time wastage, optimize schedules, and increase operational efficiency.

"
      ></RightCard2>
      <LeftCard2
        image="../src/assets/Applications/workanalytics4.svg"
        heading="Defect Tracking and Analysis for Each Worker's Shift"
        subheading="Track and analyze defects that occur during each worker's shift. Associate defects with worker IDs to identify patterns and evaluate individual worker impact on quality control. Implement targeted training and corrective measures to reduce defects, enhance product quality, and improve customer satisfaction.
        .

"
      ></LeftCard2>
      <RightCard2
        image="../src/assets/Applications/workanalytics5.svg"
        heading="Interactive Dashboard with RFID-Based Tags for Unique Worker IDs"
        subheading="Access worker analytics effortlessly through our user-friendly interactive dashboard. Our RFID-based tags provide unique worker IDs for easy data capture and analysis. Navigate comprehensive data visualizations and reports to monitor worker performance, efficiency trends, and key metrics. Make data-driven decisions and optimize workforce allocation and productivity.

"
      ></RightCard2>
      <LeftCard2
        image="../src/assets/Applications/workanalytics6.svg"
        heading="Optimize Workforce Allocation for Improved Productivity"
        subheading="Optimize workforce allocation and maximize productivity using insights from Worker Analytics. Assign workers to tasks aligned with their skills and strengths, leverage top performers for critical processes, and identify training opportunities. Improve efficiency, reduce bottlenecks, and achieve higher productivity across your factory.

"
      ></LeftCard2>
      <RightCard2
        image="../src/assets/Applications/workanalytics7.svg"
        heading="Continuous Performance Improvement and Decision-Making"
        subheading="GDrive continuous improvement with Worker Analytics. Continuously track and analyze worker performance, identify areas for improvement, and implement targeted training programs. Utilize insights to inform strategic decision-making, resource allocation, and process optimization for long-term success.
"
      ></RightCard2>
      <Card2></Card2>
      <Seehowitworks
        text={
          "With AICAN, make data-driven decisions, drive efficiency, and unlock your manufacturing business's full potential. Seamlessly integrate with existing systems and scale as your business grows. Experience the power of complete tracking, real-time visibility, and actionable insights for enhanced operational efficiency."
        }
        button="See how it works"
      ></Seehowitworks>

      <Footer></Footer>
    </div>
  );
}

export default WorkerAnalytics;
