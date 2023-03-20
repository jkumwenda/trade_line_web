import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getData, updateData } from "src/services/APIService";
import { useLocation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

export default function AddUser() {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { state } = useLocation();
  const userId = state ? state.userId : null;
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData("users", userId)
      .then((res) => {
        setFirstname(res.firstname);
        setLastname(res.lastname);
        setEmail(res.email);
        setPhone(res.phone);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const handleSubmit = async (event) => {
    let data = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
    };
    await updateData("users", userId, data).then((res) => console.log(res));
    return navigate("/users/", { replace: true });
  };

  return (
    <div className="flex flex-col bg-concrete-50 shadow-sm rounded-xl">
      <h3 className="p-4 font-raleway rounded-t-xl font-extrabold border-b border-concrete-500 text-pickled-bluewood-400">
        Edit User
      </h3>
      <div className="p-4">
        {loading ? (
          <div className="p-4 m-4 grid justify-items-center">
            <ClipLoader color={"#DB2F30"} loading={loading} size={50} />
          </div>
        ) : (
          <form className="sm:w-7/12 w-full">
            <div className="grid grid-cols-2 space-x-4 mb-6">
              <div className="">
                <label
                  htmlFor="firstname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Firstname
                </label>
                <input
                  type="firstname"
                  id="firstname"
                  name="firstname"
                  value={firstname}
                  className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-3 dark:text-white"
                  placeholder="firstname"
                  required
                  onChange={(event) => setFirstname(event.target.value)}
                />
              </div>
              <div className="">
                <label
                  htmlFor="lastname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Lastname
                </label>
                <input
                  type="lastname"
                  id="lastname"
                  name="lastname"
                  value={lastname}
                  className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-3 dark:text-white"
                  placeholder="lastname"
                  required
                  onChange={(event) => setLastname(event.target.value)}
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-3 dark:text-white"
                placeholder="name@tradeline.mw"
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Phone
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                value={phone}
                className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-3 dark:text-white"
                placeholder="phone"
                required
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
            <div className="flex justify-start space-x-4">
              <button
                type="submit"
                onClick={() => handleSubmit()}
                className="text-concrete-50 font-extrabold rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center  bg-gradient-to-r from-cerise to-amaranth"
              >
                Save user
              </button>
              <button
                type="submit"
                className="hover:text-concrete-50 font-extrabold rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center border-2 border-cerise-500 text-concrete-900 hover:bg-gradient-to-r from-cerise to-amaranth"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
