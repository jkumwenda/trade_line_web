import React, { Component } from "react";

class AddUser extends Component {
  render() {
    return (
      <div className="flex flex-col bg-concrete-50 shadow-sm rounded-xl">
        <h3 className="p-4 font-raleway rounded-t-xl font-extrabold border-b border-concrete-500 text-pickled-bluewood-400">
          Add User
        </h3>
        <div className="p-4">
          <form onSubmit={this.handleSubmit} className="sm:w-7/12 w-full">
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Username
              </label>
              <input
                type="username"
                id="username"
                name="username"
                className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-3 dark:text-white"
                placeholder="username"
                required
              />
            </div>

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
                  className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-3 dark:text-white"
                  placeholder="firstname"
                  required
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
                  className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-3 dark:text-white"
                  placeholder="lastname"
                  required
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
                className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-3 dark:text-white"
                placeholder="name@tradeline.mw"
                required
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
                className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-3 dark:text-white"
                placeholder="phone"
                required
              />
            </div>

            <div className="flex justify-start space-x-4">
              <button
                type="submit"
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
        </div>
      </div>
    );
  }
}

export default AddUser;
