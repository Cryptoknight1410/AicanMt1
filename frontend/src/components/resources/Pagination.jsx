import React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import Colors from '../../constants/colors';
const colors=new Colors();

const Pagination = () => {
  const itemsPerPage = 9;
  const totalItems = 27;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const items = [];

    for (let i = startIndex; i < endIndex && i < totalItems; i++) {
      items.push(
        <div key={i} className="w-1/3 p-4">
         
          <img className={`h-64 bg-white  w-3/4 align-middle rounded-ee-3xl rounded-lg  `  }></img>
          <div className='text-white'>

          <h3 className="text-lg font-bold">How to Calculate OEE in Excel Video {i + 1}</h3>

          <p className="text-sm">By AICAN Team // April 29, 2023 {i + 1}</p>
          <p className="text-sm">Calculating OEE in Excel is a quick and easy way to understand how your machines or manufacturing processes are performing. OEE is one of the KPIs every manufacturing company should track. OEE stands for Overall Equipment Effectiveness; it measures {i + 1}</p>
          <p className={`${colors.textGreenColor}`}>Read More »</p>
        </div>
          </div>
      );
    }

    return items;
  };

  const renderPagination = () => {
    const pagination = [];

    for (let i = 1; i <= totalPages; i++) {
      const pageClass = classNames('px-3 py-1 mx-1 rounded cursor-pointer', {
        'bg-green-500 text-white': i === currentPage,
        'bg-gray-200': i !== currentPage,
      });

      pagination.push(
        <div key={i} className={pageClass} onClick={() => handlePageChange(i)}>
          {i}
        </div>
      );
    }

    return pagination;
  };

  return (
    <div className={` ${colors.BgColor} `}>

    <div className={`pagination w-3/4 mx-auto `}>
      <div className="flex flex-wrap ">
        {renderItems()}
      </div>
      <div className="flex justify-center mt-4 pb-5 ">
        {renderPagination()}
      </div>
    </div>
    </div>
  );
};

export default Pagination;
