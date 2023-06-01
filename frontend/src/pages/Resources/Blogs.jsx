import React, { useEffect ,useState} from "react";

import Footer from "../../components/common/footer";
import NavBar from "../../components/common/NavBar";
import Seehowitworks from "../../components/common/seehowitworks";
import TopHeader from "../../components/common/TopHeader";
import Hero from "../../components/resources/Hero";
import Pagination from "../../components/resources/Pagination";
import axios from "axios";

function Blogs() {
  const [blogs,setblogs]=useState("null");
  useEffect(
        ()=>{
          console.log("Use State Statred");
            const fetchData=async()=>{
              try{
                const response=await axios.get("http://localhost:5000/blogsDB");
                const data=response.data;
                setblogs(data)
                console.log(data);
              }
              catch(err){
                console.log("Err is "+err);
              }
                
            };

            fetchData();
        },[]
    );
  
    return (
    <div>
      <TopHeader></TopHeader>
      <NavBar></NavBar>
      <Hero></Hero>
      <Pagination data={blogs}></Pagination>
      <Seehowitworks
        text={
          "Built by people who know manufacturing, Mingo Smart Factory provides the 21st century “Smart Factory” experience that manufacturers need to grow in a modern environment. See how it can help you drive revenue."
        }
      ></Seehowitworks>
      <Footer></Footer>
    </div>
  );
}

export default Blogs;
