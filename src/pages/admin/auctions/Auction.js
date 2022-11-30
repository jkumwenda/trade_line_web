import React, { useState, useEffect } from "react";
import AdminPagination from "../../../components/AdminPagination";
import AdminPageSearch from "../../../components/AdminPageSearch";
import {
  PlusCircleIcon,
  TrashIcon,
  PencilSquareIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const api = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("access_token"), //the token is a variable which holds the token
  },
});

function Auctions() {
  const navigate = useNavigate();
  const [auctions, setAuctions] = useState([]);
  useEffect(() => {
    api
      .get("auctions/")
      .then((res) => {
        setAuctions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const viewAuction = async (id) => {
    navigate("auction/");
  };

  const updateAuction = async (id) => {
    console.log(id);
  };

  const deleteAuction = async (id) => {
    await api
      .delete("auctions/" + id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col bg-concrete-50 shadow-sm rounded-xl">
      <div className="rounded-xl bg-cerise m-4">
        <h3 className="p-4 text-2xl  font-raleway font-extrabold border-b border-cerise-300 text-concrete-200">
          Auction details
        </h3>
        <div className="p-4 text-cerise-100">
          <div className="">
            <span className="font-raleway">Auction name : </span>
            <span className="text-concrete-50">
              Household items clearance sale
            </span>
          </div>
          <div className="">
            <span className="font-raleway">Start date : </span>
            <span className="text-concrete-50">
              13, November 2022. 06:30 AM
            </span>
          </div>
          <div className="">
            <span className="font-raleway">End date : </span>
            <span className="text-concrete-50">
              13, December 2022. 06:30 PM
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-full p-4">
        <NavLink to="/add-auction-item" className="flex items-center space-x-2">
          <PlusCircleIcon className="h-12 w-12 text-cerise-500"></PlusCircleIcon>
          <p className="font-extrabold text-sm">Add auction product</p>
        </NavLink>
        <AdminPageSearch></AdminPageSearch>
      </div>
      <div className="p-4">
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs bg-gray-100 text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Product name
                </th>
                <th scope="col" className="py-3 px-6">
                  Starting price
                </th>
                <th scope="col" className="py-3 px-6">
                  Bidding fee
                </th>
                <th scope="col" className="py-3 px-6">
                  Condition
                </th>
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {auctions.map((auction) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={auction.id}
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Deep freezer
                  </th>
                  <td className="py-4 px-6">MK 180,000.00</td>
                  <td className="py-4 px-6">MK 200.00</td>
                  <td className="py-4 px-6">Used</td>
                  <td className="py-4 px-6 flex flex-start space-x-2">
                    <EyeIcon
                      className="h-7 w-7 text-blue-500 cursor-pointer"
                      onClick={() => viewAuction(auction.id)}
                    ></EyeIcon>
                    <PencilSquareIcon
                      className="h-6 w-6 text-green-600 cursor-pointer"
                      onClick={() => updateAuction(auction.id)}
                    ></PencilSquareIcon>
                    <TrashIcon
                      className="h-6 w-6 text-red-600 cursor-pointer"
                      onClick={() => deleteAuction(auction.id)}
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

export default Auctions;
