import React, { Component } from "react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

class AdminPagination extends Component {
  render() {
    return (
      <div className="flex items-start space-x-3 p-4">
        <NavLink className="flex items-center p-1 px-3 rounded-xl hover:text-cerise-500 border border-concrete-600">
          <ArrowLongLeftIcon className="h-6 w-6"></ArrowLongLeftIcon>
          <span>Previous</span>
        </NavLink>
        <NavLink className="flex items-center p-1 px-3 rounded-xl hover:text-cerise-500 border border-concrete-600">
          <span>1</span>
        </NavLink>
        <NavLink className="flex items-center p-1 px-3 rounded-xl hover:text-cerise-500 border border-concrete-600">
          <span>2</span>
        </NavLink>
        <NavLink className="flex items-center p-1 px-3 rounded-xl hover:text-cerise-500 border border-concrete-600">
          <span>Next</span>
          <ArrowLongRightIcon className="h-6 w-6"></ArrowLongRightIcon>
        </NavLink>
      </div>
    );
  }
}

export default AdminPagination;
