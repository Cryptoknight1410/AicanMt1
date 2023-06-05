import React from "react";
import { useState } from "react";
import classNames from "classnames";
import Colors from "../../constants/colors";
import blogItems from "../../constants/blogsheader";
const colors = new Colors();

const Pagination = ({ data }) => {
 

  const itemsPerPage = 9;
  const totalItems = blogItems.length;
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
      const blogItem = blogItems[i];

      items.push(
        <div key={i} className="w-1/3 p-4">
          <img src={blogItem.image} alt="Error" />

          <div className="text-white">
            <h3 className="text-lg font-bold">{blogItem.heading}</h3>
            <p className="text-sm">By AICAN Team // April 29, 2023</p>
            <p className="text-sm">{blogItem.content}</p>
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
      const pageClass = classNames("px-3 py-1 mx-1 rounded cursor-pointer", {
        "bg-green-500 text-white": i === currentPage,
        "bg-gray-200": i !== currentPage,
      });

      pagination.push(
        <div
          key={i}
          className={pageClass}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </div>
      );
    }

    return pagination;
  };

  return (
    <div className={` ${colors.BgColor} `}>
      <div className={` w-3/4 mx-auto `}>
        <div className="flex flex-wrap ">{renderItems()}</div>
        <div className="flex justify-center mt-4 pb-5 ">
          {renderPagination()}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
