import React from "react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";

const AdminPagination = ({ currentPage, totalPages, onPageChange }) => {
  // const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-start space-x-3 p-4">
      <button
        className="flex items-center p-1 px-3 rounded-xl hover:text-cerise-500 border border-concrete-600"
        onClick={() => onPageChange((page) => Math.max(page - 1, 1))}
        disabled={currentPage === 1}
      >
        <ArrowLongLeftIcon className="h-6 w-6"></ArrowLongLeftIcon>
        <span>Prev</span>
      </button>

      {/* {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          disabled={page === currentPage}
        >
          {page}
        </button>
      ))} */}

      <div className="flex items-center p-1 px-3 rounded-xl hover:text-cerise-500 border border-concrete-600">
        <span>{currentPage}</span>
      </div>
      <span className="flex items-center p-1 px-1">of</span>
      <div className="flex items-center p-1 px-3 rounded-xl hover:text-cerise-500 border border-concrete-600">
        <span>{totalPages}</span>
      </div>

      <button
        className="flex items-center p-1 px-3 rounded-xl hover:text-cerise-500 border border-concrete-600"
        onClick={() => onPageChange((page) => Math.min(page + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        <span>Next</span>
        <ArrowLongRightIcon className="h-6 w-6"></ArrowLongRightIcon>
      </button>
    </div>
  );
};

export default AdminPagination;
