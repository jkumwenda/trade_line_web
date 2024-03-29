import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Faqs extends Component {
  render() {
    return (
      <div className="w-full flex flex-col space-y-8 bg-selago-500">
        <div className="flex justify-center p-6">
          <div className="flex flex-col w-10/12 p-4 py-6">
            <h1 className="text-4xl pb-6 font-raleway">
              <span className="font-extrabold font-raleway-base">
                Frequently{" "}
              </span>
              <span className="font-raleway-thin"> Asked Questions</span>
            </h1>

            <div className="flex sm:flex-row flex-col">
              <div className="w-9/12 p-4 bg-concrete-50 rounded-xl">
                <div id="accordion-open" data-accordion="open">
                  <h2 id="accordion-open-heading-1">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-concrete-600 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                      data-accordion-target="#accordion-open-body-1"
                      aria-expanded="true"
                      aria-controls="accordion-open-body-1"
                    >
                      <span className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"
                          ></path>
                        </svg>{" "}
                        What is Flowbite?
                      </span>
                      <svg
                        data-accordion-icon=""
                        className="w-6 h-6 rotate-180 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-open-body-1"
                    className=""
                    aria-labelledby="accordion-open-heading-1"
                  >
                    <div className="p-5 font-light border border-b-0 border-concrete-600 dark:border-gray-700 dark:bg-gray-900">
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is an open-source library of interactive
                        components built on top of Tailwind CSS including
                        buttons, dropdowns, modals, navbars, and more.
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Check out this guide to learn how to{" "}
                        <a
                          href="/docs/getting-started/introduction/"
                          className="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          get started
                        </a>{" "}
                        and start developing websites even faster with
                        components on top of Tailwind CSS.
                      </p>
                    </div>
                  </div>
                  <h2 id="accordion-open-heading-2">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-concrete-600 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                      data-accordion-target="#accordion-open-body-2"
                      aria-expanded="false"
                      aria-controls="accordion-open-body-2"
                    >
                      <span className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Is there a Figma file available?
                      </span>
                      <svg
                        data-accordion-icon=""
                        className="w-6 h-6 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-open-body-2"
                    className="hidden"
                    aria-labelledby="accordion-open-heading-2"
                  >
                    <div className="p-5 font-light border border-b-0 border-concrete-600 dark:border-gray-700">
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is first conceptualized and designed using the
                        Figma software so everything you see in the library has
                        a design equivalent in our Figma file.
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Check out the{" "}
                        <a
                          href="https://flowbite.com/figma/"
                          className="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Figma design system
                        </a>{" "}
                        based on the utility classes from Tailwind CSS and
                        components from Flowbite.
                      </p>
                    </div>
                  </div>
                  <h2 id="accordion-open-heading-3">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-concrete-600 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                      data-accordion-target="#accordion-open-body-3"
                      aria-expanded="false"
                      aria-controls="accordion-open-body-3"
                    >
                      <span className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"
                          ></path>
                        </svg>{" "}
                        What are the differencfillRulees between Flowbite and
                        Tailwind UI?
                      </span>
                      <svg
                        data-accordion-icon=""
                        className="w-6 h-6 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-open-body-3"
                    className="hidden"
                    aria-labelledby="accordion-open-heading-3"
                  >
                    <div className="p-5 font-light border border-t-0 border-concrete-600 dark:border-gray-700">
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        The main difference is that the core components from
                        Flowbite are open source under the MIT license, whereas
                        Tailwind UI is a paid product. Another difference is
                        that Flowbite relies on smaller and standalone
                        components, whereas Tailwind UI offers sections of
                        pages.
                      </p>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        However, we actually recommend using both Flowbite,
                        Flowbite Pro, and even Tailwind UI as there is no
                        technical reason stopping you from using the best of two
                        worlds.
                      </p>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Learn more about these technologies:
                      </p>
                      <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                        <li>
                          <a
                            href="https://flowbite.com/pro/"
                            className="text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Flowbite Pro
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tailwindui.com/"
                            rel="nofollow"
                            className="text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Tailwind UI
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col pl-8 space-y-4 sm:w-3/12 w-full">
                <h1 className="text-2xl font-bold font-raleway-base">
                  Categories
                </h1>
                <div className="flex flex-col space-y-2 text-cerise-red">
                  <NavLink to="">
                    <span className="text-cod-gray-400 font-bold pr-2">
                      &#8250;
                    </span>
                    Electronics
                  </NavLink>
                  <NavLink to="">
                    <span className="text-cod-gray-400 font-bold pr-2">
                      &#8250;
                    </span>
                    Motor Vehicles
                  </NavLink>
                  <NavLink to="">
                    <span className="text-cod-gray-400 font-bold pr-2">
                      &#8250;
                    </span>
                    Jewerly
                  </NavLink>
                  <NavLink to="">
                    <span className="text-cod-gray-400 font-bold pr-2">
                      &#8250;
                    </span>
                    Accessories
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Faqs;
