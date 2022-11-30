import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="w-full flex flex-col space-y-8">
        <div className="flex justify-center">
          <div className="flex flex-col w-9/12 p-4 py-6 space-y-8">
            <div className="flex flex-col text-7xl text-center space-y-6 text-port-gore-500 font-raleway">
              <h1 className="w-full text-cerise-red-600 font-raleway-thin">
                Be the lowest unique bidder
              </h1>
              <h1 className="w-full">The best place to buy and sell</h1>
            </div>
            <div className="flex justify-center">
              <button className="rounded-xl p-3 px-6 text-2xl text-port-gore-500 border-2 border-cerise-red-600 hover:bg-gradient-to-r from-cerise to-amaranth">
                Register now
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-selago-500">
          <div className="flex flex-col space-y-6 w-10/12 p-4">
            <h1 className="text-4xl">
              <span className="font-extrabold font-raleway-base">Current </span>
              <span className="font-raleway-thin">Auction</span>
            </h1>

            <div className="flex sm:flex-row flex-col w-full sm:space-x-6 space-x-0 space-y-6 sm:space-y-0">
              <div className="flex flex-col space-y-2 sm:w-6/12 md:w-3/12 w-full p-4 rounded-xl text-center bg-selago-50">
                <div className="flex flex-col space-y-2 w-full grow">
                  <img
                    src={require("../../../assets/images/bike.jpg")}
                    className="w-full h-auto rounded-xl"
                    alt="..."
                  />
                  <NavLink
                    to="#"
                    className="text-center text-raleway text-2xl font-bold cursor-pointer"
                  >
                    Kawasaki
                  </NavLink>
                  <div className="flex justify-center space-x-8 font-thin text-cod-gray-50">
                    <span>Bike</span>
                    <span>4 bids</span>
                  </div>
                  <div className="text-center flex justify-center space-x-2 text-sm">
                    <p className="font-bold">Starting Bid:</p>
                    <p className="font-extrabold text-cerise-red-600">
                      MWK 25,000.00
                    </p>
                  </div>
                  <div className="flex justify-center text-center text-sm">
                    <div className="drop-shadow-sm px-4 p-1 bg-selago-500 rounded-xl">
                      <div className="flex flex-row font-thin space-x-4">
                        <span className="flex flex-col">
                          <p className="font-bold">25</p>
                          <p className="font-thin text-sm">Days</p>
                        </span>
                        <span className="flex flex-col">
                          <p className="font-bold">2</p>
                          <p className="font-thin text-sm">Hours</p>
                        </span>
                        <span className="flex flex-col">
                          <p className="font-bold">28</p>
                          <p className="font-thin text-sm">Mins</p>
                        </span>
                        <span className="flex flex-col">
                          <p className="font-bold">38</p>
                          <p className="font-thin text-sm">Secs</p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center flex flex-row justify-center space-x-2 text-sm">
                    <p className="font-extrabold text-cod-gray-50">
                      Bid again in:
                    </p>
                    <p className="font-extrabold text-cerise-red-600">08</p>
                  </div>
                </div>
                <div className="flex w-full justify-center">
                  <button className="flex flex-row items-center p-2 px-4 font-raleway-base rounded-xl cursor-pointer drop-shadow-sm hover:drop-shadow-xl text-concrete-400 bg-port-gore-500">
                    Submit a bid
                  </button>
                </div>
              </div>

              <div className="flex flex-col space-y-2 sm:w-6/12 md:w-3/12 w-full p-4 rounded-xl text-center bg-selago-50">
                <div className="flex flex-col space-y-2 w-full grow">
                  <img
                    src={require("../../../assets/images/Koenigsegg-Jesko_Absolut-2021-1280-02-1024x738.jpg")}
                    className="w-full h-auto rounded-xl"
                    alt="..."
                  />
                  <NavLink
                    to="#"
                    className="text-center text-raleway text-2xl font-bold cursor-pointer"
                  >
                    Koenigsegg Jesko
                  </NavLink>
                  <div className="flex justify-center space-x-8 font-thin text-cod-gray-50">
                    <span>Bike</span>
                    <span>4 bids</span>
                  </div>
                  <div className="text-center flex justify-center space-x-2 text-sm">
                    <p className="font-bold">Starting Bid:</p>
                    <p className="font-extrabold text-cerise-red-600">
                      MWK 100,000.00
                    </p>
                  </div>
                  <div className="flex justify-center text-center text-sm">
                    <div className="drop-shadow-sm px-4 p-1 bg-selago-500 rounded-xl">
                      <div className="flex flex-row font-thin space-x-4">
                        <span className="flex flex-col">
                          <p className="font-bold">25</p>
                          <p className="font-thin text-sm">Days</p>
                        </span>
                        <span className="flex flex-col">
                          <p className="font-bold">2</p>
                          <p className="font-thin text-sm">Hours</p>
                        </span>
                        <span className="flex flex-col">
                          <p className="font-bold">28</p>
                          <p className="font-thin text-sm">Mins</p>
                        </span>
                        <span className="flex flex-col">
                          <p className="font-bold">38</p>
                          <p className="font-thin text-sm">Secs</p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center flex flex-row justify-center space-x-2 text-sm">
                    <p className="font-extrabold text-cod-gray-50">
                      Bid again in:
                    </p>
                    <p className="font-extrabold text-cerise-red-600">08</p>
                  </div>
                </div>
                <div className="flex w-full justify-center">
                  <button className="flex flex-row items-center p-2 px-4 font-raleway-base rounded-xl cursor-pointer drop-shadow-sm hover:drop-shadow-xl text-concrete-400 bg-port-gore-500">
                    Submit a bid
                  </button>
                </div>
              </div>

              <div className="flex flex-col space-y-2 sm:w-6/12 md:w-3/12 w-full p-4 rounded-xl text-center bg-selago-50">
                <div className="flex flex-col space-y-2 w-full grow">
                  <img
                    src={require("../../../assets/images/awhite_200121_3873_0021_2.jpg")}
                    className="w-full h-auto rounded-xl"
                    alt="..."
                  />
                  <NavLink
                    to="#"
                    className="text-center text-raleway text-2xl font-bold cursor-pointer"
                  >
                    MacBook Pro
                  </NavLink>
                  <div className="flex justify-center space-x-8 font-thin text-cod-gray-50">
                    <span>Bike</span>
                    <span>4 bids</span>
                  </div>
                  <div className="text-center flex justify-center space-x-2 text-sm">
                    <p className="font-bold">Starting Bid:</p>
                    <p className="font-extrabold text-cerise-red-600">
                      MWK 900,000.00
                    </p>
                  </div>
                  <div className="flex justify-center text-center text-sm">
                    <div className="drop-shadow-sm px-4 p-1 bg-selago-500 rounded-xl">
                      <div className="flex flex-row font-thin space-x-4">
                        <span className="flex flex-col">
                          <p className="font-bold">25</p>
                          <p className="font-thin text-sm">Days</p>
                        </span>
                        <span className="flex flex-col">
                          <p className="font-bold">2</p>
                          <p className="font-thin text-sm">Hours</p>
                        </span>
                        <span className="flex flex-col">
                          <p className="font-bold">28</p>
                          <p className="font-thin text-sm">Mins</p>
                        </span>
                        <span className="flex flex-col">
                          <p className="font-bold">38</p>
                          <p className="font-thin text-sm">Secs</p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center flex flex-row justify-center space-x-2 text-sm">
                    <p className="font-extrabold text-cod-gray-50">
                      Bid again in:
                    </p>
                    <p className="font-extrabold text-cerise-red-600">08</p>
                  </div>
                </div>
                <div className="flex w-full justify-center">
                  <button className="flex flex-row items-center p-2 px-4 font-raleway-base rounded-xl cursor-pointer drop-shadow-sm hover:drop-shadow-xl text-concrete-400 bg-port-gore-500">
                    Submit a bid
                  </button>
                </div>
              </div>

              <div className="flex flex-col space-y-2 sm:w-6/12 md:w-3/12 w-full p-4 rounded-xl text-center bg-selago-50">
                <div className="flex flex-col space-y-2 w-full grow">
                  <img
                    src={require("../../../assets/images/51zDfRUUhHL.jpg")}
                    className="w-full h-auto rounded-xl"
                    alt="..."
                  />
                  <NavLink
                    to="#"
                    className="text-center text-raleway text-2xl font-bold cursor-pointer"
                  >
                    Huwawei p30 pro
                  </NavLink>
                  <div className="flex justify-center space-x-8 font-thin text-cod-gray-50">
                    <span>Bike</span>
                    <span>2 bids</span>
                  </div>
                  <div className="text-center flex justify-center space-x-2 text-sm">
                    <p className="font-bold">Starting Bid:</p>
                    <p className="font-extrabold text-cerise-red-600">
                      MWK 150,000.00
                    </p>
                  </div>
                  <div className="flex justify-center text-center text-sm">
                    <div className="drop-shadow-sm px-4 p-1 bg-selago-500 rounded-xl">
                      <div className="flex flex-row font-thin space-x-4">
                        <span className="flex flex-col">
                          <p className="font-bold">25</p>
                          <p className="font-thin text-sm">Days</p>
                        </span>
                        <span className="flex flex-col">
                          <p className="font-bold">2</p>
                          <p className="font-thin text-sm">Hours</p>
                        </span>
                        <span className="flex flex-col">
                          <p className="font-bold">28</p>
                          <p className="font-thin text-sm">Mins</p>
                        </span>
                        <span className="flex flex-col">
                          <p className="font-bold">38</p>
                          <p className="font-thin text-sm">Secs</p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center flex flex-row justify-center space-x-2 text-sm">
                    <p className="font-extrabold text-cod-gray-50">
                      Bid again in:
                    </p>
                    <p className="font-extrabold text-cerise-red-600">08</p>
                  </div>
                </div>
                <div className="flex w-full justify-center">
                  <button className="flex flex-row items-center p-2 px-4 font-raleway-base rounded-xl cursor-pointer drop-shadow-sm hover:drop-shadow-xl text-concrete-400 bg-port-gore-500">
                    Submit a bid
                  </button>
                </div>
              </div>
            </div>

            <div className="flex w-full justify-center pb-6">
              <button className="rounded-xl p-2 px-4 text-xl font-bold text-port-gore-500 border-2 border-cerise-red-600 hover:bg-gradient-to-r from-cerise to-amaranth">
                View all items &#8250;
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-6">
          <div className="flex flex-col w-10/12 p-4">
            <h1 className="text-raleway text-4xl ">
              <span className="font-extrabold font-raleway-base">How </span>
              <span className="font-raleway-thin"> it works</span>
            </h1>
            <div className="flex sm:flex-row flex-col w-full sm:space-x-6 space-x-0 space-y-6 sm:space-y-0">
              <div className="flex flex-col space-y-4 sm:w-6/12 md:w-3/12 w-full p-4 rounded-xl text-center bg-selago-50">
                <span className="flex justify-center">
                  <h1 className="flex justify-center items-center font-raleway-base text-5xl rounded-full h-28 w-28 p-4 border border-cerise-red-600 text-port-gore-500 hover:bg-gradient-to-r from-cerise to-amaranth">
                    <p>01</p>
                  </h1>
                </span>
                <span className="">
                  To start using our auction, you’ll need to register. It’s
                  completely free!
                </span>
              </div>
              <div className="flex flex-col space-y-4 sm:w-6/12 md:w-3/12 w-full p-4 rounded-xl text-center bg-selago-50">
                <span className="flex justify-center">
                  <h1 className="flex justify-center items-center font-raleway-base text-5xl rounded-full h-28 w-28 p-4 border border-cerise-red-600 text-port-gore-500 hover:bg-gradient-to-r from-cerise to-amaranth">
                    <p>02</p>
                  </h1>
                </span>
                <span className="">
                  You can instantly buy or place a bid on a desired product
                  right after registration.
                </span>
              </div>
              <div className="flex flex-col space-y-4 sm:w-6/12 md:w-3/12 w-full p-4 rounded-xl text-center bg-selago-50">
                <span className="flex justify-center">
                  <h1 className="flex justify-center items-center font-raleway-base text-5xl rounded-full h-28 w-28 p-4 border border-cerise-red-600 text-port-gore-500 hover:bg-gradient-to-r from-cerise to-amaranth">
                    <p>03</p>
                  </h1>
                </span>
                <span className="">
                  Submitting a bid is fast and easy. The process takes
                  approximately 5 minutes.
                </span>
              </div>
              <div className="flex flex-col space-y-4 sm:w-6/12 md:w-3/12 w-full p-4 rounded-xl text-center bg-selago-50">
                <span className="flex justify-center">
                  <h1 className="flex justify-center items-center font-raleway-base text-5xl rounded-full h-28 w-28 p-4 border border-cerise-red-600 text-port-gore-500 hover:bg-gradient-to-r from-cerise to-amaranth">
                    <p>04</p>
                  </h1>
                </span>
                <span className="">
                  Easily win at our auction and enjoy owning the product you
                  dream of.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-6 bg-selago-500">
          <div className="flex flex-col sm:w-8/12 w-10/12 p-4 space-y-6">
            <h1 className="text-raleway text-4xl ">
              <span className="font-extrabold font-raleway-base">The Big</span>{" "}
              <span className="font-raleway-thin">winners</span>
            </h1>
            <div className="flex sm:flex-row flex-col space-x-6 ">
              <img
                src={require("../../../assets/images/bike.jpg")}
                className="sm:w-3/12 w-full h-auto rounded-xl"
                alt="..."
              />
              <div className="sm:w-9/12 w-full flex items-center">
                <div className="flex flex-col space-y-4">
                  <p className="text-xl">
                    "I have never experienced such an easy procedure of placing
                    a bid and selling products on your auction site. It’s very
                    simple and at the same time very secure, and that’s what I
                    like most about Online Auction. I recommend this website to
                    everyone who is looking for a reliable and safe website to
                    place a bid or sell almost anything"
                  </p>
                  <span className="flex flex-col">
                    <h5 className="font-bold font-raleway-base text-xl text-cerise-red-600">
                      Joel Kumwenda
                    </h5>
                    <p className="font-raleway-thin">Regular customer</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col w-8/12 p-4 py-6">
            <div className="flex sm:flex-row flex-col items-center">
              <h1 className="text-xl w-5/12 font-extrabold">
                Keep up with our always upcoming auctions:
              </h1>
              <div className="w-7/12">
                <form className="flex sm:flex-row flex-col space-x-4">
                  <input
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-port-gore text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email"
                    required
                  />
                  <button className="p-3 px-6 font-raleway-base text-lg rounded-xl text-raleway cursor-pointer drop-shadow-sm hover:drop-shadow-xl text-cerise-red bg-port-gore-500 hover:text-port-gore-500 hover:bg-cerise-red">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
