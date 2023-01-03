import React, { useState, useEffect } from "react";
import AdminPagination from "../../../components/AdminPagination";
import AdminPageSearch from "../../../components/AdminPageSearch";
import { getAllData } from "../../../services/APIService";
import ClipLoader from "react-spinners/ClipLoader";
import DeleteConfirmation from "../../../components/DeleteConfirmation";

import {
  PlusCircleIcon,
  TrashIcon,
  PencilSquareIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

function Traders() {
  const [traders, setTraders] = useState([]);
  const [error, setError] = useState(true);
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllData("traders")
      .then((res) => {
        setTraders(res);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const viewTrader = async (id) => {
    console.log(id);
  };
  const updateTrader = async (id) => {
    console.log(id);
  };

  const deleteTrader = async (id) => {
    // await api
    //   .delete("traders/" + id)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  // if (error) return <p>An error occurred</p>;

  return (
    <div className="flex flex-col bg-concrete-50 shadow-sm rounded-xl">
      <h3 className="p-4 font-raleway rounded-t-xl font-extrabold border-b border-concrete-500 text-pickled-bluewood-400">
        Traders
      </h3>
      <div className="flex justify-between items-center w-full p-4">
        <NavLink to="/add-trader" className="flex items-center space-x-2">
          <PlusCircleIcon className="h-12 w-12 text-cerise-500"></PlusCircleIcon>
          <p className="font-extrabold text-sm">Add trader</p>
        </NavLink>
        <AdminPageSearch></AdminPageSearch>
      </div>
      <div className="p-4">
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs bg-gray-100 text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Trader
                </th>
                <th scope="col" className="py-3 px-6">
                  Address
                </th>
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {traders.map((trader) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={trader.id}
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {trader.trader}
                  </th>
                  <td className="py-4 px-6">{trader.address}</td>
                  <td className="py-4 px-6 flex flex-start space-x-2">
                    <EyeIcon
                      className="h-7 w-7 text-blue-500 cursor-pointer"
                      onClick={() => viewTrader(trader.id)}
                    ></EyeIcon>
                    <PencilSquareIcon
                      className="h-6 w-6 text-green-600 cursor-pointer"
                      onClick={() => updateTrader(trader.id)}
                    ></PencilSquareIcon>
                    <TrashIcon
                      className="h-6 w-6 text-red-600 cursor-pointer"
                      onClick={() => deleteTrader(trader.id)}
                    ></TrashIcon>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AdminPagination></AdminPagination>
    </div>
  );
}

export default Traders;
