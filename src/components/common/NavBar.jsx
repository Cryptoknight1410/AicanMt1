import React, { useState, useRef, useEffect } from "react";
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
    console.log(isSidebarOpen);
  };
  const seeChanges = useRef("");

  const handleClickOutside = (event) => {
    if (seeChanges.current && !seeChanges.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };
  useEffect(() => {
    seeChanges.current && window.addEventListener("click", handleClickOutside);

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
        {
          Platforms:
            "AICAN platforms bring the latest technology to fulfill the needs of production supervisors. ",
        },
        {
          "AICAN SME":
            "AICAN platforms bring the latest technology to fulfill the needs of production supervisors.  ",
        },
        {
          "AICAN Micro":
            "AICAN platforms bring the latest technology to fulfill the needs of production supervisors. ",
        },
        {
          "AICAN Sensing":
            "AICAN platforms bring the latest technology to fulfill the needs of production supervisors. ",
        },
        {
          "AICAN IoT":
            "AICAN platforms bring the latest technology to fulfill the needs of production supervisors. ",
        },
        {
          "India's Rise in Manufacturing: How it will Dominate...":
          "assets/blogs/Blog1.jpg"
        }
      ],
    },
    {
      Industries: [
        {
          Industries:
            "AICAN platforms bring the latest technology to fulfill the needs of production supervisors. ",
        },
        {
          Automobile:
            "AICAN platforms bring the latest technology to fulfill the needs of production supervisors. ",
        },
        {
          Electronics:
            "AICAN platforms bring the latest technology to fulfill the needs of production supervisors. ",
        },
        {
          Packaging:
            "AICAN platforms bring the latest technology to fulfill the needs of production supervisors. ",
        },
        {
          Pharmaeuticals:
            "AICAN platforms bring the latest technology to fulfill the needs of production supervisors. ",
        },
        {
          "Predictive Maintenance and Real-Time Monitoring":
          "assets/blogs/Blog4.jpg"
        }
      ],
    },
    {
      Applications: [
        {
          Application:
            "AICAN platforms bring the latest technology to fulfill the needs of production supervisors. ",
        },
        {
          "Worker Analytics":
            "AICAN platforms bring the latest technology to fulfill the needs of production supervisors. ",
        },
        {
          "Machine Health":
            "AICAN platforms bring the latest technology to fulfill the needs of production supervisors. ",
        },
        {
          Inventory:
            "AICAN platforms bring the latest technology to fulfill the needs of production supervisors. ",
        },
        {
          "Error Tracing":
            "AICAN platforms bring the latest technology to fulfill the needs of production supervisors. ",
        },
        {
          "The Role of Digitization in Optimizing Industrial Processes":
          "assets/blogs/Blog3.jpg"
        }
      ],
    },
    {
      Resources: [
        {
          OEE: "AICAN platforms bring the latest technology to fulfill the needs of production supervisors. ",
        },
        {
          "Case Studies":
            "AICAN platforms bring the latest technology to fulfill the needs of production supervisors. ",
        },
        {
          Calculators:
            "AICAN platforms bring the latest technology to fulfill the needs of production supervisors. ",
        },
        {
          Blogs:
            "AICAN platforms bring the latest technology to fulfill the needs of production supervisors. ",
        },
        {
          Downtime:
            "AICAN platforms bring the latest technology to fulfill the needs of production supervisors. ",
        },
        {
          "India's Rise in Manufacturing: How it will Dominate...":
          "assets/blogs/Blog1.jpg"
        }
      ],
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
                  <div className="mb-10">
                    <img src="../assets/aicanlogo.svg"></img>
                  </div>
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
                    <ul className="ml-4 text-left">
                      <div>
                        <a href="/platforms/aicansme" className="font-semibold  leading-loose"> AICAN SME</a>
                      </div>
                      <div>
                        <a href="/platforms/aicansensing" className="font-semibold leading-loose">AICAN SENSING</a>
                      </div>
                      <div>
                        <a href="/platforms/aicanmicro" className="font-semibold leading-loose">AICAN MICRO</a>
                      </div>
                      <a href="/platforms/aicaniot"  className="font-semibold leading-loose">AICAN IOT</a>
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
                    <ul className="ml-4 text-left">
                      <div>
                        <a href="/industries/automobile" className="font-semibold  leading-loose">AUTOMOBILE</a>
                      </div>
                      <div>
                        <a href="/industries/packaging" className="font-semibold  leading-loose">PACKAGING</a>
                      </div>
                      <div>
                        <a href="/industries/electronics" className="font-semibold  leading-loose">ELECTRONICS</a>
                      </div>
                      <a href="/industries/pharmaeuticals" className="font-semibold  leading-loose">PHARMAEUTICALS</a>
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
                    <ul className="ml-4 text-left">
                      <div>
                        <a href="/applications/workanalytics" className="font-semibold  leading-loose">
                          WORKER ANALYTICS
                        </a>
                      </div>
                      <div>
                        <a href="/applications/inventory" className="font-semibold  leading-loose">INVENTORY</a>
                      </div>
                      <div>
                        <a href="/applications/machinehealth" className="font-semibold  leading-loose">MACHINE HEALTH</a>
                      </div>
                      <a href="/applications/errortracing" className="font-semibold  leading-loose">ERROR TRACING</a>
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
                    <ul className="ml-4 text-left">
                      <div>
                        <a href="/applications/workanalytics" className="font-semibold  leading-loose">CaseStudies</a>
                      </div>
                      <div>
                        <a href="/applications/inventory" className="font-semibold  leading-loose">Blogs</a>
                      </div>
                      <div>
                        <a href="/applications/machinehealth" className="font-semibold  leading-loose">OEE</a>
                      </div>
                      <a href="/applications/errortracing" className="font-semibold  leading-loose">Calculators</a>
                    </ul>
                  )}
                </div>
              </nav>
            </aside>

            <div className=" xsm:hidden ">
              <AiOutlineMenu onClick={toggleSidebar}></AiOutlineMenu>
            </div>
          </button>
          <div className="w-28">
            <img
              className="md:ml-10 object-contain lg:mr-28  xxsm:flex"
              src="/assets/aicanlogo.svg"
              alt="Aican Logo"
            />
          </div>

          <div className="hidden xsm:flex lg:ml-14  ">
            {items.map((item, i) => {
              return <NavBarExpansion key={i} items={item} />;
            })}
          </div>
        </div>
        <div className="flex justify-around items-center"></div>
      </div>
    </div>
  );
}

export default NavBar;
