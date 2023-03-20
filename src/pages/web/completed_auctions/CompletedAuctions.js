import React, { useState, useEffect } from "react";
import { QueueListIcon } from "@heroicons/react/24/solid";
import CategorySidebar from "../../../components/CategorySidebar";
import { getAll } from "../../../services/WebAPIService";
import PhoneInput from "react-phone-input-2";
import ClipLoader from "react-spinners/ClipLoader";
import "react-phone-input-2/lib/style.css";

function CompletedAuctions() {
  const [completedAuctions, setCompletedAuctions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);

  useEffect(() => {
    getAll("auctions/completed")
      .then((res) => {
        setCompletedAuctions(res.auctions);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  return (
    <div className="w-full flex flex-col space-y-8 bg-selago-500">
      <div className="flex justify-center p-6">
        <div className="flex flex-col w-10/12 p-4 py-6">
          <h1 className="text-4xl pb-6">
            <span className="font-extrabold font-raleway-base">Completed </span>
            <span className="font-raleway-thin"> Bids</span>
          </h1>

          <div className="flex sm:flex-col flex-row gap-4">
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
                    // onChange={(event) => setProduct(event.target.value)}
                  >
                    <option defaultValue="default">Default sorting</option>
                    <option value="US">Sort by latest</option>
                    <option value="CA">Sort by status: active</option>
                    <option value="CA">Sort by status: closed</option>
                    <option value="CA">Sort by price: lowest</option>
                    <option value="CA">Sort by price: highest</option>
                  </select>
                </form>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center sm:space-y-0 space-y-4 bg-concrete-50 p-4 rounded-xl">
              {loading ? (
                <div className="p-4 m-4 grid justify-items-center">
                  <ClipLoader color={"#DB2F30"} loading={loading} size={50} />
                </div>
              ) : (
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
                        Successful Bid
                      </th>
                      <th scope="col" className="py-3 px-6">
                        End Time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {completedAuctions.map((auction) => (
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        key={auction.id}
                      >
                        <td className="py-4 px-6 flex flex-row items-center gap-4">
                          {auction.product.map((product) => (
                            <p key={product.id}>
                              {product.product_files.map((product_file) =>
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
                            </p>
                          ))}
                          {auction.product.map((product) => (
                            <div key={product.id} className="w-40">
                              <div className="font-semibold">
                                {product.product}
                              </div>
                              <div>{product.product_detail}</div>
                            </div>
                          ))}
                        </td>
                        <td className="py-4 px-6">
                          {auction.product.map((product) => (
                            <p key={product.id}>
                              {product.bid.map((bid) => (
                                <p>
                                  {bid.bidder.map((bidder) => (
                                    <p>{bidder.phone_number}</p>
                                  ))}
                                </p>
                              ))}
                            </p>
                          ))}
                        </td>

                        <td className="py-4 px-6">
                          {auction.product.map((product) => (
                            <div
                              key={product.id}
                              className="p-1.5 rounded-2xl bg-teal-100 w-auto inline-block text-xs"
                            >
                              MWK {product.actual_price}
                            </div>
                          ))}
                        </td>

                        <td className="py-4 px-6">
                          {auction.product.map((product) => (
                            <div
                              key={product.id}
                              className="p-1.5 rounded-2xl bg-orange-200 w-auto inline-block text-xs"
                            >
                              {product.bid.map((bid) => (
                                <p key={bid.id}>MWK {bid.amount}</p>
                              ))}
                            </div>
                          ))}
                        </td>

                        <td className="py-4 px-6">
                          <div className="p-1.5 rounded-2xl bg-red-200 w-auto inline-block text-xs">
                            {auction.end_time}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            {/* <div className="grid grid-flow-col auto-cols-auto gap-4 py-2 place-content-start">
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
        </div>
      </div>
    </div>
  );
}

export default CompletedAuctions;
