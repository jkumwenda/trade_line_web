import React, { useState, useEffect } from "react";
import { QueueListIcon } from "@heroicons/react/24/solid";
import CategorySidebar from "../../../components/CategorySidebar";
import { getAll } from "../../../services/WebAPIService";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function FinishedAuctions() {
  const [auctionProducts, setAuctionProducts] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState();

  const [error, setError] = useState(true);
  useEffect(() => {
    getAll("products/auction")
      .then((res) => {
        setAuctionProducts(res);
        console.log(res);
      })
      .catch(() => {
        setError(true);
      });
  }, []);
  const myBids = async () => {
    console.log(phoneNumber);
    // let data = { phone_number: phoneNumber };
    // let res = await create("bidders/", data).then(
    //   setMessage(
    //     "Congratulations, you have successfully registered with Tradeline"
    //   )
    // );
    // setRegisterModal(false);
  };
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
                  <form className="flex flex-row gap-4">
                    <PhoneInput
                      country="mw"
                      inputProps={{
                        required: true,
                        autoFocus: true,
                      }}
                      onlyCountries={["mw"]}
                      onChange={(phone) => setPhoneNumber(phone)}
                    />
                    <button
                      type="button"
                      onClick={(event) => myBids(event)}
                      className="w-full px-3 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                    >
                      Check
                    </button>
                  </form>
                </div>
                <div className="flex  items-center space-x-4"></div>
              </div>
              {auctionProducts.map((auction_product) => (
                <div className="flex sm:flex-row flex-col w-full bg-concrete-50 rounded-xl shadow-sm"></div>
              ))}
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

export default FinishedAuctions;
