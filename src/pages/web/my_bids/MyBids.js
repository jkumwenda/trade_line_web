import React, { useState, useEffect } from "react";
import { QueueListIcon } from "@heroicons/react/24/solid";
import CategorySidebar from "../../../components/CategorySidebar";
import { getAll } from "../../../services/WebAPIService";
import PhoneInput from "react-phone-input-2";
import ClipLoader from "react-spinners/ClipLoader";
import "react-phone-input-2/lib/style.css";

function MyBids() {
  const [bids, setBids] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);

  const myBids = async () => {
    console.log(phoneNumber);

    getAll("bids/my_bids", phoneNumber)
      .then((res) => {
        setBids(res);
      })
      .catch(() => {
        setError(true);
      });
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
                      className="w-full px-3 flex-1 text-white bg-cerise-red-500 rounded-xl outline-none ring-offset-2 ring-red-600 focus:ring-2"
                    >
                      Check
                    </button>
                  </form>
                </div>
                <div className="flex  items-center space-x-4"></div>
              </div>
              <div className="flex flex-col gap-4">
                {loading ? (
                  <div className="p-4 m-4 grid justify-items-center">
                    <ClipLoader color={"#DB2F30"} loading={loading} size={50} />
                  </div>
                ) : (
                  <div className="flex sm:flex-row flex-col w-full bg-concrete-50 rounded-xl shadow-sm">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs bg-gray-100 text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className="py-3 px-6">
                            Auction
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Bidder
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Actual Price
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Bid Price
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {bids.map((bid) => (
                          <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            key={bid.Bid.id}
                          >
                            <td className="py-4 px-6 flex flex-row items-center gap-4">
                              {/* <div className="sm:w-4/12 w-full">JOEL</div> */}
                              {bid.Product.product_files.map((product_file) =>
                                product_file.is_featured ? (
                                  <img
                                    key={product_file.id}
                                    src={
                                      "http://localhost:8000/api/products/file/" +
                                      product_file.id
                                    }
                                    className="object-cover sm:w-32 rounded-xl"
                                    alt="..."
                                  />
                                ) : null
                              )}
                              <div className="w-40">
                                <div className="font-semibold">
                                  {bid.Product.product}
                                </div>
                                <div>{bid.Product.product_detail}</div>
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              {bid.Bidder.phone_number}
                            </td>
                            <td className="py-4 px-6">
                              <div className="p-1.5 rounded-2xl bg-teal-100 w-auto inline-block text-xs">
                                MWK {bid.Product.base_price}
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              <div className="p-1.5 rounded-2xl bg-orange-100 w-auto inline-block text-xs">
                                MWK {bid.Bid.amount}
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              <div className="p-1.5 rounded-2xl bg-green-200 w-auto inline-block text-xs">
                                Open
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
              {/* <div className="grid grid-flow-col auto-cols-auto gap-4 py-8 place-content-start">
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
              </div> */}
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

export default MyBids;
