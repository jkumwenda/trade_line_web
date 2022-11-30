import React, { Component } from "react";
import { Outlet, NavLink } from "react-router-dom";
import HeaderAuth from "./admin/HeaderAuth";

class Auth extends Component {
  render() {
    return (
      <div className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-cerise to-amaranth">
        <div className="w-full flex justify-center sm:p-4">
          <HeaderAuth />
        </div>
        <div className="flex grow justify-center items-center sm:p-4">
          <div className="w-4/12">
            <Outlet />
          </div>
        </div>
        <div className="w-full flex justify-center bg-pickled-bluewood-600 text-pickled-bluewood-50">
          <div className="flex sm:flex-row flex-col w-10/12 sm:px-4 justify-between p-6">
            <span className="text-sm text-gray-500 sm:text-center mt-3 space-x-4 dark:text-gray-400">
              © 2022{" "}
              <NavLink to="https://tradeline.mw/" className="hover:underline">
                Trade Line Inc™
              </NavLink>
              . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 space-x-4 sm:mt-0">
              <li>
                <NavLink to="#" className="mr-4 hover:underline md:mr-6 ">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="mr-4 hover:underline md:mr-6">
                  Licensing
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="hover:underline">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
