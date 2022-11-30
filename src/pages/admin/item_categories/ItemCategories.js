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
});

function ItemCategories() {
  const navigate = useNavigate();
  const [item_categories, setItemCategories] = useState([]);
  useEffect(() => {
    api
      .get("categories/")
      .then((res) => {
        setItemCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const viewItemCategory = async (id) => {
    console.log(id);
  };

  const updateItemCategory = async (id) => {
    console.log(id);
  };

  const deleteItemCategory = async (id) => {
    await api
      .delete("categories/" + id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
        <AdminPageSearch></AdminPageSearch>
      </div>
      <div className="p-4">
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
                      onClick={() => deleteItemCategory(item_categories.id)}
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

export default ItemCategories;
