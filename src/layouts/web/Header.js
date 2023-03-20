import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="w-10/12 flex p-4">
        <div className="w-full flex items-center justify-between mx-auto">
          <div className="flex text-5xl font-raleway">
            <NavLink to="/">
              <img
                src={require("../../assets/images/logo.png")}
                className="w-52 h-auto rounded-xl"
                alt="..."
              />
            </NavLink>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col text-xl mt-4 py-4 md:flex-row md:space-x-4 md:mt-0">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 pr-4 pl-3 text-pickled-bluewood-600 hover:text-cerise-red"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="how-it-works"
                  className="block py-2 pr-4 pl-3 hover:text-cerise-red"
                >
                  How It Works
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="completed-auctions"
                  className="block py-2 pr-4 pl-3 text- hover:text-cerise-red"
                >
                  Completed Auctions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="my-bids"
                  className="block py-2 pr-4 pl-3 text- hover:text-cerise-red"
                >
                  My Bids
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="faqs"
                  className="block py-2 pr-4 pl-3 text- hover:text-cerise-red"
                >
                  FAQs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact-us"
                  className="block py-2 pr-4 pl-3 hover:text-cerise-red"
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="login"
                  className="block text-base font-extrabold py-2 pr-4 pl-3 border-2 rounded-xl border-cerise-red-600 hover:text-cerise-red"
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
