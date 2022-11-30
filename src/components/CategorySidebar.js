import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class CategorySidebar extends Component {
  render() {
    return (
      <div className="flex flex-col pl-4 space-y-8 w-full">
        <h1 className="text-2xl font-bold font-raleway-base">Categories</h1>
        <div className="flex flex-col space-y-2 text-cerise-red">
          <NavLink to="">
            <span className="text-cod-gray-400 font-bold pr-2">&#8250;</span>
            Electronics
          </NavLink>
          <NavLink to="">
            <span className="text-cod-gray-400 font-bold pr-2">&#8250;</span>
            Motor Vehicles
          </NavLink>
          <NavLink to="">
            <span className="text-cod-gray-400 font-bold pr-2">&#8250;</span>
            Jewerly
          </NavLink>
          <NavLink to="">
            <span className="text-cod-gray-400 font-bold pr-2">&#8250;</span>
            Accessories
          </NavLink>
        </div>
      </div>
    );
  }
}

export default CategorySidebar;
