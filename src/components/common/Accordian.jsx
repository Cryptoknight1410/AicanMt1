import React, { useState } from 'react';
import {AiOutlineDown} from 'react-icons/all'
const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded-md mb-4">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
       <AiOutlineDown></AiOutlineDown>
      </div>
      {isOpen && (
        <div className="p-4">
          <p className="text-gray-600">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;