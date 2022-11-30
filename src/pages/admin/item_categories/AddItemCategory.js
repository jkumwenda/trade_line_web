import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createData } from "../../../services/APIService";

export default function AddItemCategory() {
  let navigate = useNavigate();
  const [category, setCategory] = useState("");

  const handleSubmit = async (event) => {
    let data = { category: category };
    await createData("categories/", data).then(({ res }) => res);
    return navigate("/item_categories", { replace: true });
  };

  return (
    <div className="flex flex-col bg-concrete-50 shadow-sm rounded-xl">
      <h3 className="p-4 font-raleway rounded-t-xl font-extrabold border-b border-concrete-500 text-pickled-bluewood-400">
        Add ItemCategory
      </h3>
      <div className="p-4">
        <form className="sm:w-7/12 w-full">
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Item Category
            </label>
            <input
              type="category"
              id="category"
              name="category"
              value={category}
              className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-3 dark:text-white"
              placeholder="item_category"
              required
              onChange={(event) => setCategory(event.target.value)}
            />
          </div>

          <div className="flex justify-start space-x-4">
            <button
              type="button"
              onClick={() => handleSubmit()}
              className="text-concrete-50 font-extrabold rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center  bg-gradient-to-r from-cerise to-amaranth"
            >
              Save Item Category
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
