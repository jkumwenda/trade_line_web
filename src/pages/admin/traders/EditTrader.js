import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getData, updateData } from "src/services/APIService";
import { useLocation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

export default function EditTrader() {
  const navigate = useNavigate();
  const [trader, setTrader] = useState("");
  const [address, setAddress] = useState("");
  const { state } = useLocation();
  const { traderId } = state;
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData("traders", traderId)
      .then((res) => {
        setTrader(res.trader);
        setAddress(res.address);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const handleSubmit = async () => {
    let data = { trader: trader, address: address };
    await updateData("traders", traderId, data).then((res) => console.log(res));
    return navigate("/traders", { replace: true });
  };

  return (
    <div className="flex flex-col bg-concrete-50 shadow-sm rounded-xl">
      <h3 className="p-4 font-raleway rounded-t-xl font-extrabold border-b border-concrete-500 text-pickled-bluewood-400">
        Edit Trader
      </h3>
      <div className="p-4">
        {loading ? (
          <div className="p-4 m-4 grid justify-items-center">
            <ClipLoader color={"#DB2F30"} loading={loading} size={50} />
          </div>
        ) : (
          <form className="sm:w-7/12 w-full">
            <div className="mb-6">
              <label
                htmlFor="username"
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
                type="description"
                id="description"
                name="description"
                value={address}
                className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-3 dark:text-white"
                placeholder="description"
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
        )}
      </div>
    </div>
  );
}
