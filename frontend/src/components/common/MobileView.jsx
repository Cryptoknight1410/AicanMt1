import React from 'react'
import Colors from "../../constants/colors";
const colors = new Colors();
function MobileView() {
  return (
    <div className={`flex flex-col m-3 mb-5`}>
       <img className={` ${colors.card2}  h-80 `}></img>
        <p className={`text-sm w-full`}>
          An automobile spare parts software is a type of computer program or
          application that is designed to help manage various aspects of the
          spare parts inventory and distribution process in the automobile
          industry. This software can help auto parts manufacturers,
          distributors, and retailers manage their inventory, orders, pricing,
          and other important aspects of their business.<br></br> Automobile
          spare parts software can be used to track inventory levels, reorder
          parts as needed, manage pricing and promotions, and track sales and
          revenue. It can also help businesses manage their supply chain and
          distribution network, ensuring that the right parts are delivered to
          the right locations at the right time.
        </p>
    </div>
  )
}

export default MobileView