import React, { Component } from "react";
import AdminPagination from "../../../components/AdminPagination";
import AdminPageSearch from "../../../components/AdminPageSearch";
import ClipLoader from "react-spinners/ClipLoader";
import {
  PlusCircleIcon,
  TrashIcon,
  PencilSquareIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { getAllData, deleteData } from "../../../services/APIService";

export default function Users() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [auctionId, setAuctionId] = useState();

  useEffect(() => {
    setLoading(true);
    getAllData("users")
      .then((res) => {
        setAuctions(res);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const viewUser = async (id) => {
    return navigate("/user", {
      state: { userId: id },
      replace: true,
    });
  };

  const updateUser = async (id) => {
    console.log(id);
  };

  const deleteUser = async (id) => {
    // await api
    //   .delete("auctions/" + id)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // setIsShowDialog(!isShowDialog);
  };

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
                    Firstname
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Lastname
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Phone
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Email
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={user.id}
                  >
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
                        className="h-7 w-7 text-blue-500 cursor-pointer"
                        onClick={() => this.viewUser(user.id)}
                      ></EyeIcon>
                      <PencilSquareIcon
                        className="h-6 w-6 text-green-600 cursor-pointer"
                        onClick={() => this.updateUser(user.id)}
                      ></PencilSquareIcon>
                      <TrashIcon
                        className="h-6 w-6 text-red-600 cursor-pointer"
                        onClick={() => this.deleteUser(user.id)}
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
    </div>
  );
}
