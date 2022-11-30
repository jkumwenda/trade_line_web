import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

class Footer extends Component {
  render() {
    return (
      <div className="w-full flex flex-col py-6 mt-6 bg-pickled-bluewood-600 text-pickled-bluewood-50">
        <div className="w-full flex justify-center pb-6">
          <div className="flex sm:flex-row flex-col w-10/12 px-4">
            <div className="sm:w-3/12 w-full">
              <h1 className="text-2xl font-raleway-base font-bold pb-4 text-concrete-600">
                Empowering Individuals Through Digital Trade
              </h1>
            </div>
            <div className="sm:w-3/12 w-full">
              <h1 className="text-xl uppercase pb-4 text-concrete-100">
                Information
              </h1>
              <ul>
                <li>
                  <NavLink
                    to=""
                    className="cursor-pointer hover:text-cerise-red"
                  >
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to=""
                    className="cursor-pointer hover:text-cerise-red"
                  >
                    How it works
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to=""
                    className="cursor-pointer hover:text-cerise-red"
                  >
                    How to bid
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to=""
                    className="cursor-pointer hover:text-cerise-red"
                  >
                    Registration
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="sm:w-3/12 w-full">
              <h1 className="text-xl uppercase pb-4 text-concrete-100">
                Help Center
              </h1>
              <ul>
                <li>
                  <NavLink
                    to=""
                    className="cursor-pointer hover:text-cerise-red"
                  >
                    Assistance
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to=""
                    className="cursor-pointer hover:text-cerise-red"
                  >
                    FAQs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to=""
                    className="cursor-pointer hover:text-cerise-red"
                  >
                    Testimonials
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="sm:w-3/12 w-full">
              <h1 className="text-xl uppercase pb-4 text-concrete-100">
                Contact us
              </h1>
              <div>
                <span className="w-full flex flex-row items-center space-x-2 pb-4">
                  <MapPinIcon className="h-6 w-6 text-cerise-red" />
                  <p>#10 Victoria Avenue, 10034</p>
                </span>
                <span className="w-full flex flex-row items-center space-x-2 pb-4">
                  <PhoneIcon className="h-6 w-6 text-cerise-red" />
                  <p>+265 999 371 088</p>
                </span>
                <span className="w-full flex flex-row items-center space-x-2 pb-4">
                  <EnvelopeIcon className="h-6 w-6  text-cerise-red" />
                  <p>mail@tradeline.mw</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center border-t-2 border-pickled-bluewood-400">
          <div className="flex sm:flex-row flex-col w-10/12 sm:px-4 justify-between pt-6">
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
export default Footer;
