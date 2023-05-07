import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/all";
import DropDown from "./DropDown";
import Button from "./Button";

function NavBar() {
  const items = [
    { Platform: ["Khushi", "2", "3"] },
    { Industries: ["1", "2", "3"] },
    { Applications: ["1", "2", "3"] },
    { Resources: ["1"] },
  ];
  const [isOpen, setOpen] = useState(false);
  // State for controlling the mobile menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-wrap justify-between sm:p-14  p-5 ">
      {/* Logo and menu for desktop screens */}
      <div className="hidden md:flex items-center justify-around display:inline-block">
        <img className="mr-16" src="./src/assets/aicanlogo.svg" alt="Error" />
        <div className="flex ">
          {items.map((item, i) => {
            return <DropDown key={i} items={item} />;
          })}
        </div>
      </div>

      {/* Mobile menu toggle button */}
      <button
        className="md:hidden text-3xl text-gray-500 focus:outline-none"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        <AiOutlineMenu />
      </button>

      {/* Drawer for mobile screens */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-white">
          <div className="flex justify-between items-center px-4 py-3 border-b-2 border-gray-300">
            <img src="./src/assets/aicanlogo.svg" alt="Error"   />
            <button className="text-2xl text-gray-500 focus:outline-none" onClick={() => setMobileMenuOpen(false)}>
              &times;
            </button>
          </div>
          <ul className="py-4 px-2">
            {items.map((item, i) => {
              
              return (
                <li key={i} className="mb-2">
                  <DropDown items={item} isOpen={isOpen} setOpen={setOpen} />
                  {isOpen && (
                    <ul className="pl-4">
                      {Object.values(item)[0].map((value, index) => (
                        <li key={index} className="py-2">
                          {value}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Search and demo button */}
      <div className="flex justify-around items-center">
        <span className=" " style={{ fontSize: "24px" }}>
          <AiOutlineSearch className="stroke-[15px] " />
        </span>
        <Button success rounded className="h-10 p-7 text-lg">
          Schedule a Demo
        </Button>
      </div>
    </div>
  );
}

export default NavBar;