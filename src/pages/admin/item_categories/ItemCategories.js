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
  EyeIcon,
} from "@heroicons/react/24/solid";

function ItemCategories() {
  const navigate = useNavigate();
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [deleteSuccessful, setDeleteSuccessful] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  const [item_categories, setItemCategories] = useState([]);
  const [itemCategoryId, setItemCategoryId] = useState();

  const handleCloseDialog = (id) => {
    setItemCategoryId(id);
    setIsShowDialog(!isShowDialog);
  };

  useEffect(() => {
    setLoading(true);
    getAllData("categories", currentPage)
      .then((res) => {
        setItemCategories(res.data);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const viewItemCategory = async (id) => {
    console.log(id);
  };

  const updateItemCategory = async (id) => {
    console.log(id);
  };

  const handleDelete = async (id) => {
    setLoading(true);
    deleteData("categories/" + id)
      .then((res) => {
        const newItemCategories = item_categories.filter(
          (item_category) => item_category.id !== id
        );
        setItemCategories(newItemCategories);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsShowDialog(!isShowDialog);
  };

  const handleSearch = async (searchData) => {
    setLoading(true);
    getAllData("categories", currentPage, searchData)
      .then((res) => {
        setItemCategories(res.data);
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
        Item Categories
      </h3>
      <div className="flex justify-between items-center w-full p-4">
        <NavLink
          to="/add-item-category"
          className="flex items-center space-x-2"
        >
          <PlusCircleIcon className="h-12 w-12 text-cerise-500"></PlusCircleIcon>
          <p className="font-extrabold text-sm">Add item categories</p>
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
                    Item Category
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {item_categories.map((item_categories) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={item_categories.id}
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item_categories.category}
                    </th>
                    <td className="py-4 px-6 flex flex-start space-x-2">
                      <EyeIcon
                        className="h-7 w-7 text-blue-500 cursor-pointer"
                        onClick={() => viewItemCategory(item_categories.id)}
                      ></EyeIcon>
                      <PencilSquareIcon
                        className="h-6 w-6 text-green-600 cursor-pointer"
                        onClick={() => updateItemCategory(item_categories.id)}
                      ></PencilSquareIcon>
                      <TrashIcon
                        className="h-6 w-6 text-red-600 cursor-pointer"
                        onClick={() => handleCloseDialog(item_categories.id)}
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
          itemId={itemCategoryId}
          size={"w-2/7"}
          color={"bg-green"}
        >
          Dialog Content goes here...
        </DeleteConfirmation>
      )}
    </div>
  );
}

export default ItemCategories;
