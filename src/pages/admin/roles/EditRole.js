import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../../../services/APIService";

export default function AddUser() {
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");

  // let user_role = async () => {
  //   let data = await getData("roles/", id).then(({ data }) => data);
  //   role: data.role;
  //   description: data.description;
  // };

  const handleSubmit = async (event) => {
    // console.log("Koma ma guy this is nt helping");
    // let data = { role: role, description: description };
    // console.log(data, "Koma ma guy this is nt helping");
    // await createData("roles/", data).then(({ res }) => res);
    // return navigate("/roles", { replace: true });
  };

  return (
    <div className="flex flex-col bg-concrete-50 shadow-sm rounded-xl">
      <h3 className="p-4 font-raleway rounded-t-xl font-extrabold border-b border-concrete-500 text-pickled-bluewood-400">
        Edit Role
      </h3>
      <div className="p-4">
        <form className="sm:w-7/12 w-full">
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Role
            </label>
            <input
              type="role"
              id="role"
              name="role"
              value={role}
              className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-3 dark:text-white"
              placeholder="role"
              required
              onChange={(event) => setRole(event.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Description
            </label>
            <textarea
              type="description"
              id="description"
              name="description"
              value={description}
              className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-3 dark:text-white"
              placeholder="description"
              required
              onChange={(event) => setDescription(event.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-start space-x-4">
            <button
              type="button"
              onClick={() => handleSubmit()}
              className="text-concrete-50 font-extrabold rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center  bg-gradient-to-r from-cerise to-amaranth"
            >
              Save role
            </button>
            <button
              type="button"
              className="hover:text-concrete-50 font-extrabold rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center border-2 border-cerise-500 text-concrete-900 hover:bg-gradient-to-r from-cerise to-amaranth"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
