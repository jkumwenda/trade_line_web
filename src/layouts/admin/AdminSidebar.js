import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  ShoppingBagIcon,
  Squares2X2Icon,
  QuestionMarkCircleIcon,
  Cog6ToothIcon,
  ChartBarSquareIcon,
  UsersIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";

class AdminSidebar extends Component {
  render() {
    return (
      <div className="flex flex-col space-y-6 w-full grow">
        <div className="p-1">
          <NavLink to="/">
            <img
              src={require("../../assets/images/logo.png")}
              className="w-52 h-auto rounded-xl"
              alt="..."
            />
          </NavLink>
        </div>
        <ul className="flex flex-col space-y-2">
          <li className="hover:bg-concrete-500 p-1 rounded-xl">
            <NavLink to="/dashboard" className="flex items-center space-x-2">
              <Squares2X2Icon className="h-6 w-6"></Squares2X2Icon>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="hover:bg-concrete-500 p-1 rounded-xl">
            <NavLink to="/auctions" className="flex items-center space-x-2">
              <ShoppingBagIcon className="h-6 w-6 text-cerise"></ShoppingBagIcon>
              <span>Auctions</span>
            </NavLink>
          </li>
          <li className="hover:bg-concrete-500 p-1 rounded-xl">
            <NavLink to="/reports" className="flex items-center space-x-2">
              <ChartBarSquareIcon className="h-6 w-6 text-pickled-bluewood-300"></ChartBarSquareIcon>
              <span>Reports</span>
            </NavLink>
          </li>
        </ul>
        <ul className="flex flex-col space-y-2 border-t border-concrete-500">
          <h2 className="uppercase py-4 text-sm">System Manage</h2>
          <li className="hover:bg-concrete-500 p-1 rounded-xl">
            <NavLink to="/users" className="flex items-center space-x-2">
              <UsersIcon className="h-6 w-6 text-pickled-bluewood-300"></UsersIcon>
              <span>Users</span>
            </NavLink>
          </li>
          <li className="hover:bg-concrete-500 p-1 rounded-xl">
            <NavLink to="/roles" className="flex items-center space-x-2">
              <UserGroupIcon className="h-6 w-6 text-pickled-bluewood-300"></UserGroupIcon>
              <span>Roles</span>
            </NavLink>
          </li>
          <li className="hover:bg-concrete-500 p-1 rounded-xl">
            <NavLink to="/traders" className="flex items-center space-x-2">
              <BanknotesIcon className="h-6 w-6 text-pickled-bluewood-300"></BanknotesIcon>
              <span>Traders</span>
            </NavLink>
          </li>
          <li className="hover:bg-concrete-500 p-1 rounded-xl">
            <NavLink
              to="/item_categories"
              className="flex items-center space-x-2"
            >
              <ShoppingCartIcon className="h-6 w-6 text-pickled-bluewood-300"></ShoppingCartIcon>
              <span>Item Categories</span>
            </NavLink>
          </li>
          <li className="hover:bg-concrete-500 p-1 rounded-xl">
            <NavLink to="/dashboard" className="flex items-center space-x-2">
              <Cog6ToothIcon className="h-6 w-6 text-pickled-bluewood-300"></Cog6ToothIcon>
              <span>System settings</span>
            </NavLink>
          </li>
          <li className="hover:bg-concrete-500 p-1 rounded-xl">
            <NavLink to="/dashboard" className="flex items-center space-x-2">
              <QuestionMarkCircleIcon className="h-6 w-6 text-pickled-bluewood-300"></QuestionMarkCircleIcon>
              <span>Help</span>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
export default AdminSidebar;
