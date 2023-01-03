import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createData } from "../../../services/APIService";

export default function AddTrader() {
  let navigate = useNavigate();
  const [trader, setTrader] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (event) => {
    let data = { trader: trader, address: address };
    await createData("traders/", data).then((res) => res);
    return navigate("/traders", { replace: true });
  };

  return (
    <div className="flex flex-col bg-concrete-50 shadow-sm rounded-xl">
      <h3 className="p-4 font-raleway rounded-t-xl font-extrabold border-b border-concrete-500 text-pickled-bluewood-400">
        Add Trader
      </h3>
      <div className="p-4">
        <form className="sm:w-7/12 w-full">
          <div className="mb-6">
            <label
              htmlFor="trader"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Trader
            </label>
            <input
              type="trader"
              id="trader"
              name="trader"
              value={trader}
              className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-3 dark:text-white"
              placeholder="trader"
              required
              onChange={(event) => setTrader(event.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Address
            </label>
            <textarea
              type="address"
              id="address"
              name="address"
              value={address}
              className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-3 dark:text-white"
              placeholder="address"
              required
              onChange={(event) => setAddress(event.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-start space-x-4">
            <button
              type="button"
              onClick={() => handleSubmit()}
              className="text-concrete-50 font-extrabold rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center  bg-gradient-to-r from-cerise to-amaranth"
            >
              Save trader
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
