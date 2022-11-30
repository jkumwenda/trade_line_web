import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

class BidSidebar extends Component {
  render() {
    return (
      <div className="flex flex-col pl-4 space-y-8 w-full">
        <h1 className="text-2xl font-bold font-raleway-base">Ready to bid?</h1>
        <div className="flex flex-col space-y-2 text-concrete-200">
          <NavLink
            to=""
            className="flex flex-row space-x-4 bg-cerise-red-500 rounded-xl p-3 px-6"
          >
            <ShoppingBagIcon className="h-6 w-6" />
            <span>Check items</span>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default BidSidebar;
