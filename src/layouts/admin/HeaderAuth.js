import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class HeaderAuth extends Component {
  render() {
    return (
      <NavLink to="/" className="flex justify-between w-10/12 text-center">
        <div className="text-3xl font-bold bg-concrete-50 p-4 rounded-xl">
          <img
            src={require("../../assets/images/logo.png")}
            className="w-28 h-auto rounded-xl"
            alt="..."
          />
        </div>
        <div className="text-2xl font-raleway p-4 rounded-xl text-port-gore-400">
          Inc
        </div>
      </NavLink>
    );
  }
}
export default HeaderAuth;
