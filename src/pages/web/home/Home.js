import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { create, getAll } from "../../../services/WebAPIService";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Home() {
  const [showRegisterModal, setRegisterModal] = useState(false);
  const [showBidModal, setBidModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();
  const [bidAmount, setBidAmount] = useState();
  const [bidPhoneNumber, setBidPhoneNumber] = useState();
  const [error, setError] = useState(true);
  const [message, setMessage] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState();
  const [auctionProducts, setAuctionProducts] = useState([]);
  const [productId, setProductId] = useState([]);
  const [auctionYear, setAuctionYear] = useState([]);

  const registerModal = async () => {
    setRegisterModal(true);
  };

  const bidModal = async (id) => {
    setProductId(id);
    setBidModal(true);
  };

  useEffect(() => {
    getAll("payment_methods")
      .then((res) => {
        console.log(res);
        setPaymentMethods(res);
      })
      .catch(() => {
        setError(true);
      });
    getAll("products/auction")
      .then((res) => {
        setAuctionProducts(res);
        console.log(res);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const register = async () => {
    let data = { phone_number: phoneNumber };
    let res = await create("bidders/", data).then(
      setMessage(
        "Congratulations, you have successfully registered with Tradeline"
      )
    );
    setRegisterModal(false);
  };

  const bid = async () => {
    let data = {
      phone_number: bidPhoneNumber,
      amount: bidAmount,
      payment_method_id: paymentMethod,
      product_id: productId,
    };
    await create("bids/", data).then((res) => {
      console.log(res);
    });
    setBidModal(false);
  };

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    // console.log("This is our year", new Date());
    const difference = +new Date(`2023-10-14T23:54:19`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

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
          {message ? <p className="text-center">{message}</p> : null}
          <p className="justify-center text-center text-"></p>
          <div className="flex justify-center">
            <button
              onClick={() => registerModal()}
              className="rounded-xl p-3 px-6 text-2xl text-port-gore-500 border-2 border-cerise-red-600 hover:bg-gradient-to-r from-cerise to-amaranth"
            >
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
            {auctionProducts.map((auction_product) => (
              <div
                key={auction_product.Product.id}
                className="flex flex-col space-y-2 sm:w-6/12 md:w-3/12 w-full p-4 rounded-xl text-center bg-selago-50"
              >
                <div></div>
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
                    {auction_product.Product.product}
                  </NavLink>
                  <div className="flex justify-center space-x-8 font-thin text-cod-gray-50">
                    <span>{auction_product.Product.base_price}</span>
                  </div>
                  <div className="text-center flex justify-center space-x-2 text-sm">
                    <p className="font-bold">Actual price:</p>
                    <p className="font-extrabold text-cerise-red-600">
                      MWK {auction_product.Product.base_price}
                    </p>
                  </div>
                  <div className="text-center flex justify-center space-x-2 text-sm">
                    <p className="font-bold">Entry fee:</p>
                    <p className="font-extrabold text-cerise-red-600">
                      MWK {auction_product.Product.bid_fee}
                    </p>
                  </div>
                  <div className="flex justify-center text-center text-sm">
                    <div className="drop-shadow-sm px-4 p-1 bg-selago-500 rounded-xl">
                      {timerComponents.length ? (
                        timerComponents
                      ) : (
                        <span>Time's up!</span>
                      )}

                      {/* <div className="flex flex-row font-thin space-x-4">
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
                      </div> */}
                    </div>
                  </div>
                  {/* <div className="text-center flex flex-row justify-center space-x-2 text-sm">
                    <p className="font-extrabold text-cod-gray-50">
                      Bid again in:
                    </p>
                    <p className="font-extrabold text-cerise-red-600">08</p>
                  </div> */}
                </div>
                <div className="flex w-full justify-center">
                  <button
                    onClick={() => bidModal(auction_product.Product.id)}
                    className="flex flex-row items-center p-2 px-4 font-raleway-base rounded-xl cursor-pointer drop-shadow-sm hover:drop-shadow-xl text-concrete-400 bg-port-gore-500"
                  >
                    Submit a bid
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-full justify-center pb-6">
            <NavLink
              to="auction-items"
              className="rounded-xl p-2 px-4 text-xl font-bold text-port-gore-500 border-2 border-cerise-red-600 hover:bg-gradient-to-r from-cerise to-amaranth"
            >
              View all items &#8250;
            </NavLink>
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
                You can instantly buy or place a bid on a desired product right
                after registration.
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
                approximately 30 seconds.
              </span>
            </div>
            <div className="flex flex-col space-y-4 sm:w-6/12 md:w-3/12 w-full p-4 rounded-xl text-center bg-selago-50">
              <span className="flex justify-center">
                <h1 className="flex justify-center items-center font-raleway-base text-5xl rounded-full h-28 w-28 p-4 border border-cerise-red-600 text-port-gore-500 hover:bg-gradient-to-r from-cerise to-amaranth">
                  <p>04</p>
                </h1>
              </span>
              <span className="">
                Easily win at our auction and enjoy owning the product you dream
                of.
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
                  "I have never experienced such an easy procedure of placing a
                  bid and selling products on your auction site. It’s very
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

      {showRegisterModal ? (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className="fixed inset-0 w-full h-full bg-black opacity-40"
            onClick={() => setRegisterModal(false)}
          ></div>
          <div className="flex items-center min-h-screen">
            <div className="relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
              <h4 className="text-lg rounded-t-md px-8 py-4 font-medium bg-pickled-bluewood-600 text-pickled-bluewood-50">
                Phone number
              </h4>
              <form className="w-full p-8">
                <div className="mb-6">
                  <label
                    htmlFor="base_price"
                    className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Phone number
                  </label>
                  {/* <PhoneInput
                    country={"us"}
                    value={this.state.phone}
                    onChange={(phone) => this.setState({ phone })}
                  /> */}

                  <PhoneInput
                    country="mw"
                    inputProps={{
                      required: true,
                      autoFocus: true,
                    }}
                    onlyCountries={["mw"]}
                    onChange={(phone) => setPhoneNumber(phone)}
                  />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}

                <div className="items-center gap-2 mt-3 sm:flex">
                  <button
                    type="button"
                    onClick={(event) => register(event)}
                    className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                  >
                    Save
                  </button>
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                    onClick={() => setRegisterModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}

      {showBidModal ? (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className="fixed inset-0 w-full h-full bg-black opacity-40"
            onClick={() => setBidModal(false)}
          ></div>
          <div className="flex items-center min-h-screen">
            <div className="relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
              <h4 className="text-lg rounded-t-md px-8 py-4 font-medium bg-cerise-red-600 text-white">
                Bid
              </h4>
              <form className="w-full p-8">
                <div className="mb-4">
                  <label
                    htmlFor="base_price"
                    className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Payment method
                  </label>
                  <select
                    className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-2 dark:text-white"
                    placeholder="Product"
                    required
                    id="payment_method"
                    name="payment_method"
                    onChange={(event) => setPaymentMethod(event.target.value)}
                  >
                    <option></option>
                    {paymentMethods.map((payment_method) => (
                      <option key={payment_method.id} value={payment_method.id}>
                        {payment_method.payment_method}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="base_price"
                    className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Phone number
                  </label>
                  <input
                    id="number"
                    name="number"
                    type="text"
                    onChange={(event) => setBidPhoneNumber(event.target.value)}
                    className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-2 dark:text-white"
                    placeholder="Phone number"
                    required
                  />
                </div>

                {error && <p style={{ color: "red" }}>{error}</p>}

                <div className="mb-4">
                  <label
                    htmlFor="base_price"
                    className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Amount
                  </label>
                  <input
                    id="number"
                    name="number"
                    type="text"
                    onChange={(event) => setBidAmount(event.target.value)}
                    className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-2 dark:text-white"
                    placeholder="Bid amount"
                    required
                  />
                </div>

                <div className="items-center gap-2 mt-3 sm:flex">
                  <button
                    type="button"
                    onClick={(event) => bid(event)}
                    className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                  >
                    Submit bid
                  </button>
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                    onClick={() => setBidModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Home;
