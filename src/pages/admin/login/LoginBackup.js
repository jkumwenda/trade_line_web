import React, { Component } from "react";
import { setToken } from "../../../services/AuthService";
import { redirect } from "react-router-dom";
import axios from "axios";
import { useLocation, Navigate } from "react-router-dom";

class LoginBackup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    console.log("Your favorite password is: " + this.state.password);
    console.log("Your email is: " + this.state.email);

    let location = useLocation();
    return <Navigate to="/" state={{ from: location }} />;

    axios
      .post("http://localhost:8000/auth/", {
        username: this.state.email,
        password: this.state.password,
      })
      .then(function (response) {
        console.log(response.data.token, "response.data.token");
        if (response.data.token) {
          setToken(response.data.token);
          return redirect("/dashboard");
        }
      })
      .catch(function (error) {
        console.log(error, "error");
      });

    // event.preventDefault();
  };

  render() {
    const { email, password } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        className="rounded-xl p-8 bg-concrete-50"
      >
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
            type="email"
            id="email"
            name="email"
            className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-3 dark:text-white"
            placeholder="name@tradeline.mw"
            required
            value={email}
            onChange={this.handleChange}
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
            id="password"
            name="password"
            className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-3 dark:text-white"
            required
            value={password}
            onChange={this.handleChange}
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
          type="submit"
          className="text-concrete-50 font-extrabold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-gradient-to-r from-cerise to-amaranth"
        >
          Login
        </button>
      </form>
    );
  }
}
export default LoginBackup;
