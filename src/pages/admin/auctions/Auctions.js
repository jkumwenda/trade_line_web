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
import DeleteConfirmation from "../../../components/DeleteConfirmation";

const api = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    Authorization: localStorage.getItem("access_token"), //the token is a variable which holds the token
  },
});

function Auctions() {
  const navigate = useNavigate();
  const [auctions, setAuctions] = useState([]);
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [auctionId, setAuctionId] = useState();

  const handleCloseDialog = (id) => {
    setAuctionId(id);
    setIsShowDialog(!isShowDialog);
  };

  useEffect(() => {
    api
      .get("auctions/")
      .then((res) => {
        setAuctions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [auctions]);

  const viewAuction = async (id) => {
    return navigate("/auction", {
      state: { auctionId: id },
      replace: true,
    });
  };

  const updateAuction = async (id) => {
    console.log(id);
  };

  const handleDelete = async (id) => {
    await api
      .delete("auctions/" + id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setIsShowDialog(!isShowDialog);
  };
  return (
    <div className="flex flex-col bg-concrete-50 shadow-sm rounded-xl">
      <h3 className="p-4 font-raleway rounded-t-xl font-extrabold border-b border-concrete-500 text-pickled-bluewood-400">
        Auctions
      </h3>
      <div className="flex justify-between items-center w-full p-4">
        <NavLink to="/add-auction" className="flex items-center space-x-2">
          <PlusCircleIcon className="h-12 w-12 text-cerise-500"></PlusCircleIcon>
          <p className="font-extrabold text-sm">Add auction</p>
        </NavLink>
        <AdminPageSearch></AdminPageSearch>
      </div>
      <div className="p-4">
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs bg-gray-100 text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Auction
                </th>
                <th scope="col" className="py-3 px-6">
                  Start date
                </th>
                <th scope="col" className="py-3 px-6">
                  End date
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
                    {auction.auction}
                  </th>
                  <td className="py-4 px-6">{auction.bid_start_time}</td>
                  <td className="py-4 px-6">{auction.bid_end_time}</td>
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
                      onClick={() => handleCloseDialog(auction.id)}
                    ></TrashIcon>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AdminPagination></AdminPagination>
      {isShowDialog && (
        <DeleteConfirmation
          title={"Delete Auction"}
          handleCloseDialog={handleCloseDialog}
          handleDelete={handleDelete}
          itemId={auctionId}
          size={"w-2/7"}
          color={"bg-green"}
        >
          Dialog Content goes here...
        </DeleteConfirmation>
      )}
    </div>
  );
}
export default Auctions;
