import React, { Component } from "react";
import AdminPagination from "../../../components/AdminPagination";
import AdminPageSearch from "../../../components/AdminPageSearch";
import {
  PlusCircleIcon,
  TrashIcon,
  PencilSquareIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { getAllData } from "../../../services/APIService";

class Users extends Component {
  state = { users: [] };

  constructor() {
    super();
    this.getUsers();
  }

  getUsers = async () => {
    let data = await getAllData("users/").then(({ data }) => data);
    this.setState({ users: data });
  };

  render() {
    return (
      <div className="flex flex-col bg-concrete-50 shadow-sm rounded-xl">
        <h3 className="p-4 font-raleway rounded-t-xl font-extrabold border-b border-concrete-500 text-pickled-bluewood-400">
          Users
        </h3>
        <div className="flex justify-between items-center w-full p-4">
          <NavLink to="/add-user" className="flex items-center space-x-2">
            <PlusCircleIcon className="h-12 w-12 text-cerise-500"></PlusCircleIcon>
            <p className="font-extrabold text-sm">Add user</p>
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
                    Color
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Category
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Price
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {user.firstname}
                    </th>
                    <td className="py-4 px-6">{user.lastname}</td>
                    <td className="py-4 px-6">{user.phone}</td>
                    <td className="py-4 px-6">{user.email}</td>
                    <td className="py-4 px-6 flex flex-start space-x-2">
                      <EyeIcon
                        className="h-7 w-7 text-blue-500"
                        key={user.id}
                      ></EyeIcon>
                      <PencilSquareIcon className="h-6 w-6 text-green-600"></PencilSquareIcon>
                      <TrashIcon className="h-6 w-6 text-red-600"></TrashIcon>
                    </td>
                  </tr>
                ))}
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Microsoft Surface Pro
                  </th>
                  <td className="py-4 px-6">White</td>
                  <td className="py-4 px-6">Laptop PC</td>
                  <td className="py-4 px-6">$1999</td>
                  <td className="py-4 px-6 flex flex-start space-x-2">
                    <EyeIcon className="h-7 w-7 text-blue-500"></EyeIcon>
                    <PencilSquareIcon className="h-6 w-6 text-green-600"></PencilSquareIcon>
                    <TrashIcon className="h-6 w-6 text-red-600"></TrashIcon>
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Magic Mouse 2
                  </th>
                  <td className="py-4 px-6">Black</td>
                  <td className="py-4 px-6">Accessories</td>
                  <td className="py-4 px-6">$99</td>
                  <td className="py-4 px-6 flex flex-start space-x-2">
                    <EyeIcon className="h-7 w-7 text-blue-500"></EyeIcon>
                    <PencilSquareIcon className="h-6 w-6 text-green-600"></PencilSquareIcon>
                    <TrashIcon className="h-6 w-6 text-red-600"></TrashIcon>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <AdminPagination></AdminPagination>
      </div>
    );
  }
}

export default Users;
