import React, { useState, useEffect } from "react";
import AdminPagination from "../../../components/AdminPagination";
import AdminPageSearch from "../../../components/AdminPageSearch";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { getAllData, deleteData } from "../../../services/APIService";
import DeleteConfirmation from "../../../components/DeleteConfirmation";

import {
  PlusCircleIcon,
  TrashIcon,
  PencilSquareIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";

function Roles() {
  let navigate = useNavigate();
  let [roles, setRoles] = useState([]);
  let [error, setError] = useState([]);
  let [loading, setLoading] = useState(false);
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [roleId, setRoleId] = useState();
  const [deleteSuccessful, setDeleteSuccessful] = useState(false);

  const handleCloseDialog = (id) => {
    setRoleId(id);
    setIsShowDialog(!isShowDialog);
  };

  useEffect(() => {
    setLoading(true);
    getAllData("roles")
      .then((res) => {
        setRoles(res);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [deleteSuccessful]);

  const viewRole = async (id) => {
    console.log(id);
  };

  const updateRole = async (id) => {
    return navigate("/edit-role", {
      state: { roleId: id },
      replace: true,
    });
  };

  const handleDelete = async (id) => {
    setLoading(true);
    deleteData("roles/" + id)
      .then((res) => {
        // const newRoles = roles.filter((role) => role.id !== id);
        setDeleteSuccessful(!deleteSuccessful);
        // setRoles(newRoles);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsShowDialog(!isShowDialog);
  };

  return (
    <div className="flex flex-col bg-concrete-50 shadow-sm rounded-xl">
      <h3 className="p-4 font-raleway rounded-t-xl font-extrabold border-b border-concrete-500 text-pickled-bluewood-400">
        Roles
      </h3>
      <div className="flex justify-between items-center w-full p-4">
        <NavLink to="/add-role" className="flex items-center space-x-2">
          <PlusCircleIcon className="h-12 w-12 text-cerise-500"></PlusCircleIcon>
          <p className="font-extrabold text-sm">Add role</p>
        </NavLink>
        <AdminPageSearch></AdminPageSearch>
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
                    Role
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Description
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {roles.map((role) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={role.id}
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {role.role}
                    </th>
                    <td className="py-4 px-6">{role.description}</td>
                    <td className="py-4 px-6 flex flex-start space-x-2">
                      <EyeIcon
                        className="h-7 w-7 text-blue-500 cursor-pointer"
                        onClick={() => viewRole(role.id)}
                      ></EyeIcon>
                      <PencilSquareIcon
                        className="h-6 w-6 text-green-600 cursor-pointer"
                        onClick={() => updateRole(role.id)}
                      ></PencilSquareIcon>
                      <TrashIcon
                        className="h-6 w-6 text-red-600 cursor-pointer"
                        onClick={() => handleCloseDialog(role.id)}
                      ></TrashIcon>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <AdminPagination></AdminPagination>
      {isShowDialog && (
        <DeleteConfirmation
          title={"Delete Auction"}
          handleCloseDialog={handleCloseDialog}
          handleDelete={handleDelete}
          itemId={roleId}
          size={"w-2/7"}
          color={"bg-green"}
        >
          Dialog Content goes here...
        </DeleteConfirmation>
      )}
    </div>
  );
}

export default Roles;
