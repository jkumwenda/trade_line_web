import React, { Component } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import CategorySidebar from "../../../components/CategorySidebar";

class Item extends Component {
  render() {
    return (
      <div className="w-full flex flex-col space-y-8 bg-selago-500">
        <div className="flex justify-center p-6">
          <div className="flex flex-col w-10/12 p-4 py-6">
            <h1 className="text-4xl pb-6 font-raleway">
              <span className="font-extrabold font-raleway-base">
                Koenigsegg Jesko
              </span>
            </h1>

            <div className="flex sm:flex-row flex-col">
              <div className="flex flex-row w-9/12 bg-concrete-50 rounded-xl p-4">
                <div className="w-5/12">
                  <img
                    src={require("../../../assets/images/Koenigsegg-Jesko_Absolut-2021-1280-02-1024x738.jpg")}
                    class="w-full object-cover rounded-xl"
                    alt="Koenigsegg Jesko"
                  />
                </div>
                <div className="flex flex-col space-y-4 px-4 w-7/12">
                  <span>
                    The Ragdoll is a cat breed with blue eyes and a distinct
                    colorpoint coat. It is a large and muscular semi-longhair
                    cat with a soft and silky coat. Like all long haired cats,
                    Ragdolls need grooming to ensure their fur does not mat.
                  </span>
                  <div className="font-extrabold">
                    <span>Starting bid: </span>
                    <span className="text-cerise-red">MWK 100,000.00</span>
                  </div>

                  <div className="flex flex-col space-y-3 border-t-2 border-concrete-600">
                    <div>
                      <span>Item condition: </span>
                      <span className="font-extrabold">New</span>
                    </div>
                    <span className="font-thin">Time left:</span>
                    <div className="grid grid-cols-6 gap-2 text-center text-sm border border-concrete-500 text-cod-gray-50 bg-concrete-50 rounded-lg py-1">
                      <span>
                        <p>01</p>
                        <p>Months</p>
                      </span>
                      <span>
                        <p>06</p>
                        <p>Weeks</p>
                      </span>
                      <span>
                        <p>00</p>
                        <p>Days</p>
                      </span>
                      <span>
                        <p>01</p>
                        <p>Hours</p>
                      </span>
                      <span>
                        <p>12</p>
                        <p>Minutes</p>
                      </span>
                      <span>
                        <p>09</p>
                        <p>Seconds</p>
                      </span>
                    </div>
                    <div>
                      <span>Auction ends: </span>
                      <span> December 11, 2022 10:00 am</span>
                    </div>
                    <div className="flex space-x-6">
                      <form className="grid grid-flow-col auto-cols-auto gap-2 text-sm">
                        <input
                          className="rounded-xl text-center bg-concrete-50 border border-pickled-bluewood-200 p-2"
                          value={"100,000.00"}
                          required
                        />
                        <button
                          type="submit"
                          className="rounded-xl border-concrete-600 p-2 bg-cerise-red font-extrabold uppercase"
                        >
                          Bid
                        </button>
                      </form>
                      <div className="grid grid-flow-col auto-cols-auto gap-2">
                        <span className="p-3 rounded-full border border-concrete-800">
                          <EyeIcon className="h-4 w-4 text-cerise-red hover:text-concrete-800" />
                        </span>
                      </div>
                    </div>
                    <div>
                      Categories:
                      <span className="text-bold">Motor vehicle</span>
                    </div>
                  </div>
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
export default Item;
