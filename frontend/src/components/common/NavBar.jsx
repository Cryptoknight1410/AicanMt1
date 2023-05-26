import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/all";
import Button from "./Button";
import Colors from "../../constants/colors";
import NavBarExpansion from "./NavBarExpansion";


function NavBar() {
  const colors = new Colors();
  const items = [
   
    {
      Platform: [
        {'Platforms':'AICAN platforms bring the latest technology to fulfill the needs of production supervisors. '},
        {
          'AICAN SME':'AICAN platforms bring the latest technology to fulfill the needs of production supervisors.  '
        },
        {
          'AICAN Micro':'AICAN platforms bring the latest technology to fulfill the needs of production supervisors. '
        },
        {
          'AICAN Sensing':'AICAN platforms bring the latest technology to fulfill the needs of production supervisors. '
        },
        {
          'AICAN IoT':'AICAN platforms bring the latest technology to fulfill the needs of production supervisors. '
        }
      ] ,

     
     },
    {
      Industries: [
        {'Industries':'AICAN platforms bring the latest technology to fulfill the needs of production supervisors. '},
        {
          'Automobile':'AICAN platforms bring the latest technology to fulfill the needs of production supervisors. '
        },
        {
          'Electronics':'AICAN platforms bring the latest technology to fulfill the needs of production supervisors. '
        },
        {
          'Packaging':'AICAN platforms bring the latest technology to fulfill the needs of production supervisors. '
        },
        {
          'Pharmaeuticals':'AICAN platforms bring the latest technology to fulfill the needs of production supervisors. '
        }
      ] ,

     
     },
    {
      Applications: [
        {
          'Application':'AICAN platforms bring the latest technology to fulfill the needs of production supervisors. '
        },
        {
          'Worker Analytics':'AICAN platforms bring the latest technology to fulfill the needs of production supervisors. '
        },
        {
          'Machine Health':'AICAN platforms bring the latest technology to fulfill the needs of production supervisors. '
        },
        {
          'Inventory':'AICAN platforms bring the latest technology to fulfill the needs of production supervisors. '
        },
        {'Error Tracing':'AICAN platforms bring the latest technology to fulfill the needs of production supervisors. '},
      ] ,

     
     },
    {
      Resources: [
        {
          'OEE':'AICAN platforms bring the latest technology to fulfill the needs of production supervisors. '
        },
        {
          'Case Studies':'AICAN platforms bring the latest technology to fulfill the needs of production supervisors. '
        },
        {
          'Calculators':'AICAN platforms bring the latest technology to fulfill the needs of production supervisors. '
        },
        {'Blogs':'AICAN platforms bring the latest technology to fulfill the needs of production supervisors. '},
        {
          'Downtime':'AICAN platforms bring the latest technology to fulfill the needs of production supervisors. '
        }
      ] ,

     
     },
   
  ];
  
  // State for controlling the mobile menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-36 flex items-center">
      <div className="flex justify-between p-5 w-full  items-center">
        <div className="flex items-center justify-center">
          <button
            onClick={() => {
              setMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            <div className=" xsm:hidden">
              <AiOutlineMenu></AiOutlineMenu>
            </div>
          </button>
          <div className="w-28 ">
  <img
    className="md:ml-10 object-contain lg:mr-28  xxsm:flex"
    src="../src/assets/aicanlogo.svg"
    alt="Aican Logo"
  />
</div>

          
          <div className="hidden xsm:flex lg:ml-14 ">
            {items.map((item, i) => {
              return <NavBarExpansion  key={i} items={item} />;
            })}
          </div>
        </div>
        <div className="flex justify-around items-center">
          <Button
            
            rounded
            className={`hidden lg:block md:mr-10 xsm:p-2 sm:p-3  md:text-sm sm:text-xs items-center px-3 py-1.5 border ${colors.buttonColor} ${colors.borderGreenColor} ${colors.textSecondary} rounded-lg`}
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;