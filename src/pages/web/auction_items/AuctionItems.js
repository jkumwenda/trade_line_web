import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { EyeIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/solid";
import { QueueListIcon } from "@heroicons/react/24/solid";
import CategorySidebar from "../../../components/CategorySidebar";

class FinishedAuctions extends Component {
  render() {
    return (
      <div className="w-full flex flex-col space-y-8 bg-selago-500">
        <div className="flex justify-center p-6">
          <div className="flex flex-col w-10/12 p-4 py-6">
            <h1 className="text-4xl pb-6">
              <span className="font-extrabold font-raleway-base">Aution </span>
              <span className="font-raleway-thin"> Items</span>
            </h1>

            <div className="flex sm:flex-row flex-col">
              <div className="flex flex-col space-y-4 sm:w-9/12 w-full">
                <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center sm:space-y-0 space-y-4 bg-concrete-50 p-4 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <span className="p-2 rounded-xl border border-concrete-600">
                      <QueueListIcon className="h-4 w-4 text-cerise-red hover:text-concrete-800" />
                    </span>
                    <span>Showing all 5 results</span>
                  </div>
                  <div className="flex  items-center space-x-4">
                    <form className="w-full">
                      <select
                        id="countries"
                        className="w-full p-2.5 border rounded-xl text-sm border-pickled-bluewood-200"
                      >
                        <option selected>Default sorting</option>
                        <option value="US">Sort by latest</option>
                        <option value="CA">Sort by status: active</option>
                        <option value="CA">Sort by status: closed</option>
                        <option value="CA">Sort by price: lowest</option>
                        <option value="CA">Sort by price: highest</option>
                      </select>
                    </form>
                  </div>
                </div>
                <div className="flex sm:flex-row flex-col w-full bg-concrete-50 rounded-xl shadow-sm">
                  <div className="sm:w-4/12 w-full">
                    <img
                      src={require("../../../assets/images/Koenigsegg-Jesko_Absolut-2021-1280-02-1024x738.jpg")}
                      className="w-full object-cover sm:h-76 rounded-tl-xl sm:rounded-bl-xl rounded-bl-none sm:rounded-tr-none rounded-tr-xl"
                      alt="Koenigsegg Jesko"
                    />
                  </div>
                  <div className="flex flex-col space-y-2 p-4 sm:w-7/12 w-full">
                    <NavLink
                      to="/item"
                      className="font-thin font-raleway-base text-3xl"
                    >
                      Koenigsegg Jesko
                    </NavLink>
                    <div className="font-extrabold text-base">
                      <span>Starting bid: </span>
                      <span className="text-cerise-red font-thin">
                        MWK 100,000.00
                      </span>
                    </div>

                    <div className="flex flex-col space-y-2 w-full">
                      <div className="flex flex-col">
                        <div className="text-base">
                          <span className="">Auction ends: </span>
                          <span className="">December 11, 2022 10:00 am</span>
                        </div>
                      </div>
                      <div className="flex py-2 border-t border-concrete-400 space-x-6 w-full">
                        <div className="grid grid-flow-col auto-cols-auto gap-2">
                          <span className="p-3 rounded-full border border-concrete-600">
                            <EyeIcon className="h-4 w-4 text-cerise-red hover:text-concrete-800" />
                          </span>
                          <span className="p-3 rounded-full border border-concrete-600">
                            <StarIcon className="h-4 w-4 text-cerise-red hover:text-concrete-800" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex sm:flex-row flex-col w-full bg-concrete-50 rounded-xl shadow-sm">
                  <div className="sm:w-4/12 w-full">
                    <img
                      src={require("../../../assets/images/awhite_200121_3873_0021_2.jpg")}
                      className="w-full object-cover sm:h-76 rounded-tl-xl sm:rounded-bl-xl rounded-bl-none sm:rounded-tr-none rounded-tr-xl"
                      alt="Koenigsegg Jesko"
                    />
                  </div>
                  <div className="flex flex-col space-y-2 p-4 sm:w-7/12 w-full">
                    <NavLink
                      to="/item"
                      className="font-thin font-raleway-base text-3xl"
                    >
                      MacBook Pro
                    </NavLink>
                    <div className="font-extrabold text-base">
                      <span>Starting bid: </span>
                      <span className="text-cerise-red font-thin">
                        MWK 900,000.00
                      </span>
                    </div>

                    <div className="flex flex-col space-y-2 w-full">
                      <div className="flex flex-col">
                        <div className="text-base">
                          <span className="">Auction ends: </span>
                          <span className="">December 10, 2023 06:00 am</span>
                        </div>
                      </div>
                      <div className="flex py-2 border-t border-concrete-400 space-x-6 w-full">
                        <div className="grid grid-flow-col auto-cols-auto gap-2">
                          <span className="p-3 rounded-full border border-concrete-600">
                            <EyeIcon className="h-4 w-4 text-cerise-red hover:text-concrete-800" />
                          </span>
                          <span className="p-3 rounded-full border border-concrete-600">
                            <StarIcon className="h-4 w-4 text-cerise-red hover:text-concrete-800" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-row flex-col w-full bg-concrete-50 rounded-xl shadow-sm">
                  <div className="sm:w-4/12 w-full">
                    <img
                      src={require("../../../assets/images/bike.jpg")}
                      className="w-full object-cover sm:h-76 rounded-tl-xl sm:rounded-bl-xl rounded-bl-none sm:rounded-tr-none rounded-tr-xl"
                      alt="Kawasaki"
                    />
                  </div>
                  <div className="flex flex-col space-y-2 p-4 sm:w-7/12 w-full">
                    <NavLink
                      to="/item"
                      className="font-thin font-raleway-base text-3xl"
                    >
                      Kawasaki
                    </NavLink>
                    <div className="font-extrabold text-base">
                      <span>Starting bid: </span>
                      <span className="text-cerise-red font-thin">
                        MWK 4,025,000.00
                      </span>
                    </div>

                    <div className="flex flex-col space-y-2 w-full">
                      <div className="flex flex-col">
                        <div className="text-base">
                          <span className="">Auction ends: </span>
                          <span className="">December 04, 2020 12:00 am</span>
                        </div>
                      </div>
                      <div className="flex py-2 border-t border-concrete-400 space-x-6 w-full">
                        <div className="grid grid-flow-col auto-cols-auto gap-2">
                          <span className="p-3 rounded-full border border-concrete-600">
                            <EyeIcon className="h-4 w-4 text-cerise-red hover:text-concrete-800" />
                          </span>
                          <span className="p-3 rounded-full border border-concrete-600">
                            <StarIcon className="h-4 w-4 text-cerise-red hover:text-concrete-800" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-row flex-col w-full bg-concrete-50 rounded-xl shadow-sm">
                  <div className="sm:w-4/12 w-full">
                    <img
                      src={require("../../../assets/images/awhite_200121_3873_0021_2.jpg")}
                      className="w-full object-cover sm:h-76 rounded-tl-xl sm:rounded-bl-xl rounded-bl-none sm:rounded-tr-none rounded-tr-xl"
                      alt="Koenigsegg Jesko"
                    />
                  </div>
                  <div className="flex flex-col space-y-2 p-4 sm:w-7/12 w-full">
                    <NavLink
                      to="/item"
                      className="font-thin font-raleway-base text-3xl"
                    >
                      MacBook Pro
                    </NavLink>
                    <div className="font-extrabold text-base">
                      <span>Starting bid: </span>
                      <span className="text-cerise-red font-thin">
                        MWK 900,000.00
                      </span>
                    </div>

                    <div className="flex flex-col space-y-2 w-full">
                      <div className="flex flex-col">
                        <div className="text-base">
                          <span className="">Auction ends: </span>
                          <span className="">December 10, 2023 06:00 am</span>
                        </div>
                      </div>
                      <div className="flex py-2 border-t border-concrete-400 space-x-6 w-full">
                        <div className="grid grid-flow-col auto-cols-auto gap-2">
                          <span className="p-3 rounded-full border border-concrete-600">
                            <EyeIcon className="h-4 w-4 text-cerise-red hover:text-concrete-800" />
                          </span>
                          <span className="p-3 rounded-full border border-concrete-600">
                            <StarIcon className="h-4 w-4 text-cerise-red hover:text-concrete-800" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-flow-col auto-cols-auto gap-4 py-8 place-content-start">
                  <span className="p-1 px-3 rounded-lg border border-cerise-red-500">
                    1
                  </span>
                  <span className="p-1 px-3 rounded-lg border border-cerise-red-500 bg-cerise-red-500">
                    2
                  </span>
                  <span className="p-1 px-3 rounded-lg border border-cerise-red-500 bg-cerise-red-500">
                    3
                  </span>
                  <span className="p-1 px-3 rounded-lg border border-cerise-red-500 bg-cerise-red-500">
                    4
                  </span>
                  <span className="p-1 px-3 rounded-lg border border-cerise-red-500 bg-cerise-red-500">
                    5
                  </span>
                </div>
              </div>

              <div className="sm:w-3/12 w-full">
                <CategorySidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FinishedAuctions;
