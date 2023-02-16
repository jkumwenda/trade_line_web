import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createData } from "../../../services/APIService";
import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";
import Moment from "moment";

export default function AddAuction() {
  let navigate = useNavigate();
  const [auction, setAuction] = useState("");
  const [date_range, setDateRange] = useState([new Date(), new Date()]);

  const handleSubmit = async (event) => {
    let data = {
      user_id: localStorage.getItem("userId"),
      auction: auction,
      bid_start_time: Moment(date_range[0]).format("YYYY-MM-DDTHH:mm:ss"),
      bid_end_time: Moment(date_range[1]).format("YYYY-MM-DDTHH:mm:ss"),
    };

    await createData("auctions/", data).then((res) => console.log(res));
    // return navigate("/auctions", { state: { auctionId: id }, replace: true });
    return navigate("/auctions", { replace: true });
  };

  return (
    <div className="flex flex-col bg-concrete-50 shadow-sm rounded-xl">
      <h3 className="p-4 font-raleway rounded-t-xl font-extrabold border-b border-concrete-500 text-pickled-bluewood-400">
        Add Auction
      </h3>
      <div className="p-4">
        <form className="sm:w-7/12 w-full">
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Auction
            </label>
            <input
              type="auction"
              id="auction"
              name="auction"
              value={auction}
              className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-3 dark:text-white"
              placeholder="Auction"
              required
              onChange={(event) => setAuction(event.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Auction duration
            </label>
            <div className="border border-gray-400 text-gray-600 text-sm rounded-xl p-3 dark:text-white">
              <DateTimeRangePicker onChange={setDateRange} value={date_range} />
            </div>
          </div>

          {/* 
          <div className="grid grid-cols-2 space-x-4 mb-6">
            <div className="">
              <label
                htmlFor="start_date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Start Date Time
              </label>
              <input
                type="text"
                id="start_date"
                name="start_date"
                className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-3 dark:text-white"
                placeholder="Start date time"
                required
                onChange={(event) => setStartDate(event.target.value)}
              />
            </div>
            <div className="">
              <label
                htmlFor="lastname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                End Date Time
              </label>
              <input
                type="text"
                id="end_date"
                name="end_date"
                className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-3 dark:text-white"
                placeholder="End date time"
                required
                onChange={(event) => setEndDate(event.target.value)}
              />
            </div>
          </div> */}
          <div className="flex justify-start space-x-4">
            <button
              type="button"
              onClick={() => handleSubmit()}
              className="text-concrete-50 font-extrabold rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center  bg-gradient-to-r from-cerise to-amaranth"
            >
              Save auction
            </button>
            <button
              type="button"
              className="hover:text-concrete-50 font-extrabold rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center border-2 border-cerise-500 text-concrete-900 hover:bg-gradient-to-r from-cerise to-amaranth"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
