import React, { useState } from "react";
import { setToken, setUser } from "../../../services/AuthService";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if ((username === "") & (password === "")) {
      return;
    } else {
      axios
        .post("https://mwtradeline.shop/api/auth/login", {
          email: username,
          password: password,
        })
        .then(function (response) {
          if (response.data.access_token) {
            setToken(response.data.access_token);
            setUser(response.data.firstname);
            navigate("/dashboard");
          }
        })
        .catch(function (error) {
          console.log(error, "error");
        });
    }
  };
  return (
    <div>
      <form className="rounded-xl p-8 bg-concrete-50">
        <h1 className="font-extrabold font-raleway uppercase text-xl mb-6 text-center">
          Welcome
        </h1>
        <h1 className="font-raleway-base text-center uppercase mb-6">
          Sign in using your credentials
        </h1>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="text"
            className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-3 dark:text-white"
            placeholder="name@tradeline.mw"
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your password
          </label>
          <input
            type="password"
            className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-3 dark:text-white"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-50 rounded border border-pickled-bluewood-200 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required=""
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <button
          type="button"
          onClick={() => handleSubmit()}
          className="text-concrete-50 font-extrabold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-gradient-to-r from-cerise to-amaranth"
        >
          Login
        </button>
      </form>
    </div>
  );
}
