import React, { useState, useEffect } from "react";
import AdminPageSearch from "src/components/AdminPageSearch";
import AdminPagination from "src/components/AdminPagination";
import { getAllData, deleteData } from "src/services/APIService";
import DeleteConfirmation from "src/components/DeleteConfirmation";
import { NavLink, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import {
  PlusCircleIcon,
  TrashIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";

function Bidders() {
  const navigate = useNavigate();
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [deleteSuccessful, setDeleteSuccessful] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bidders, setBidders] = useState([]);
  const [bidderId, setBidderId] = useState();

  const handleCloseDialog = (id) => {
    setBidderId(id);
    setIsShowDialog(!isShowDialog);
  };

  useEffect(() => {
    setLoading(true);
    getAllData("bidders", currentPage)
      .then((res) => {
        setBidders(res.data);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [deleteSuccessful]);

  const updateRole = async (id) => {
    return navigate("/edit-bidder", {
      state: { roleId: id },
      replace: true,
    });
  };

  const handleDelete = async (id) => {
    setLoading(true);
    deleteData("bidders/" + id)
      .then((res) => {
        setDeleteSuccessful(!deleteSuccessful);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsShowDialog(!isShowDialog);
  };

  const handleSearch = async (searchData) => {
    setLoading(true);
    getAllData("bidders", currentPage, searchData)
      .then((res) => {
        setBidders(res.data);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <div className="flex flex-col bg-concrete-50 shadow-sm rounded-xl">
      <h3 className="p-4 font-raleway rounded-t-xl font-extrabold border-b border-concrete-500 text-pickled-bluewood-400">
        Bidders
      </h3>
      <div className="flex justify-between items-center w-full p-4">
        <NavLink to="/add-bidder" className="flex items-center space-x-2">
          <PlusCircleIcon className="h-12 w-12 text-cerise-500"></PlusCircleIcon>
          <p className="font-extrabold text-sm">Add bidder</p>
        </NavLink>
        <AdminPageSearch onSearch={handleSearch} />
      </div>

      <div className="p-4">
        {loading ? (
          <div className="p-4 m-4 grid justify-items-center">
            <ClipLoader color={"#DB2F30"} loading={loading} size={50} />
          </div>
        ) : (
          <div className="overflow-x-auto relative">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs bg-gray-100 text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Phone Number
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Status
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {bidders.map((bidder) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={bidder.id}
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {bidder.phone_number}
                    </th>
                    <td className="py-4 px-6">{bidder.is_active}</td>
                    <td className="py-4 px-6 flex flex-start space-x-2">
                      <PencilSquareIcon
                        className="h-6 w-6 text-green-600 cursor-pointer"
                        onClick={() => updateRole(bidder.id)}
                      ></PencilSquareIcon>
                      <TrashIcon
                        className="h-6 w-6 text-red-600 cursor-pointer"
                        onClick={() => handleCloseDialog(bidder.id)}
                      ></TrashIcon>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <AdminPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      {isShowDialog && (
        <DeleteConfirmation
          title={"Delete Auction"}
          handleCloseDialog={handleCloseDialog}
          handleDelete={handleDelete}
          itemId={bidderId}
          size={"w-2/7"}
          color={"bg-green"}
        >
          Dialog Content goes here...
        </DeleteConfirmation>
      )}
    </div>
  );
}

export default Bidders;
