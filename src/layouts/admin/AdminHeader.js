import React, { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AdminHeader() {
  const [show, toggleShow] = useState(false);
  const navigate = useNavigate();
  function logout() {
    if (localStorage.getItem("access_token")) {
      localStorage.removeItem("access_token");
      return navigate("/login");
    }
  }

  return (
    <div className="flex sm:justify-end justify-start w-full z-10">
      <div className="relative inline-block text-left">
        <div onClick={() => toggleShow(!show)}>
          <div
            className="inline-flex w-full items-center justify-center font-medium text-gray-700 space-x-2"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            <UserCircleIcon className="h-10 w-10" />
            {localStorage.getItem("firstname")}
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {show && (
          <div
            className="absolute right-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              <NavLink
                to=""
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                Account settings
              </NavLink>
              <NavLink
                to=""
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
              >
                Support
              </NavLink>
              <NavLink
                to=""
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-2"
              >
                License
              </NavLink>

              <span
                className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-2"
                onClick={() => logout()}
              >
                Logout
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
