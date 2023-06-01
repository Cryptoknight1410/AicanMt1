import React, { useState,useRef,useEffect } from "react";
import { AiOutlineMenu } from "react-icons/all";
import Button from "./Button";
import Colors from "../../constants/colors";
import NavBarExpansion from "./NavBarExpansion";


function NavBar() {
  const colors = new Colors();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen)

  };
  const seeChanges = useRef("");

  const handleClickOutside = (event) => {
    if (seeChanges.current && !seeChanges.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };
  useEffect(() => {
 
    seeChanges.current &&
      window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  });

  const toggleSubMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

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
  
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-36 flex items-center ">
      <div className="flex justify-between p-5 w-full  items-center">
        <div className="flex items-center justify-center " ref={seeChanges}>
          <button
            onClick={() => {
              setMobileMenuOpen(!isMobileMenuOpen);
            }}
          >

          

<aside
          className={`fixed inset-y-0 left-0 w-64 bg-white border-r z-[400] transition duration-300 ease-in-out transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        
        >
          <nav>
            <div className="p-4">
              <button
                className="font-semibold flex items-center justify-between"
                onClick={() => toggleSubMenu("platform")}
              >
                Platform
                <span className="ml-2">
                  {activeMenu === "platform" ? (
                    <svg
                      className="h-4 w-4 fill-current text-gray-600"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  ) : (
                    <svg
                      className="h-4 w-4 fill-current text-gray-600"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 14l5-5 5 5z" />
                    </svg>
                  )}
                </span>
              </button>
              {activeMenu === "platform" && (
                <ul className="ml-4">
                  <li> AICAN SME</li>
                  <li>AICAN SENSING</li>
                  <li>AICAN MICRO</li>
                  <li>AICAN IOT</li>
                </ul>
              )}
            </div>
            <div className="p-4">
              <button
                className="font-semibold flex items-center justify-between"
                onClick={() => toggleSubMenu("industries")}
              >
                Industries
                <span className="ml-2">
                  {activeMenu === "industries" ? (
                    <svg
                      className="h-4 w-4 fill-current text-gray-600"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  ) : (
                    <svg
                      className="h-4 w-4 fill-current text-gray-600"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 14l5-5 5 5z" />
                    </svg>
                  )}
                </span>
              </button>
              {activeMenu === "industries" && (
                <ul className="ml-4">
                  <li>AUTOMOBILE</li>
                  <li>PACKAGING</li>
                  <li>ELECTRONICS</li>
                  <li>PHARMAEUTICALS</li>
                </ul>
              )}
            </div>
            <div className="p-4">
              <button
                className="font-semibold flex items-center justify-between"
                onClick={() => toggleSubMenu("applications")}
              >
                Applications
                <span className="ml-2">
                  {activeMenu === "applications" ? (
                    <svg
                      className="h-4 w-4 fill-current text-gray-600"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  ) : (
                    <svg
                      className="h-4 w-4 fill-current text-gray-600"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 14l5-5 5 5z" />
                    </svg>
                  )}
                </span>
              </button>
              {activeMenu === "applications" && (
                <ul className="ml-4">
                  <li>WORKER ANALYTICS</li>
                  <li>INVENTORY</li>
                  <li>MACHINE HEALTH</li>
                  <li>ERROR TRACING</li>
                </ul>
              )}
            </div>
            <div className="p-4">
              <button
                className="font-semibold flex items-center justify-between"
                onClick={() => toggleSubMenu("resources")}
              >
                Resources
                <span className="ml-2">
                  {activeMenu === "resources" ? (
                    <svg
                      className="h-4 w-4 fill-current text-gray-600"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  ) : (
                    <svg
                      className="h-4 w-4 fill-current text-gray-600"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 14l5-5 5 5z" />
                    </svg>
                  )}
                </span>
              </button>
              {activeMenu === "resources" && (
                <ul className="ml-4">
                  <li>CASE STUDDIES</li>
                  <li>BLOGS</li>
                  <li>CALCULATORS</li>
                  <li>DOWNTIME</li>
                </ul>
              )}
            </div>
          </nav>
        </aside>


            <div className=" xsm:hidden " >
              <AiOutlineMenu onClick={toggleSidebar}></AiOutlineMenu>
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
         
        </div>
      </div>
    </div>
  );
}

export default NavBar;
