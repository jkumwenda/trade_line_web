import React, { Component } from "react";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

class ContactUs extends Component {
  render() {
    return (
      <div className="w-full flex flex-col space-y-8">
        <div className="flex justify-center p-6">
          <div className="flex flex-col w-9/12 p-4 py-6">
            <h1 className="text-4xl pb-6">
              <span className="font-extrabold font-raleway-base">Contact </span>
              <span className="font-raleway-thin"> Us</span>
            </h1>
            <div className="flex sm:flex-row flex-col space-x-8 w-full">
              <div className="flex sm:flex-row flex-col sm:w-4/12 w-full">
                <div className="w-full flex flex-col space-y-2">
                  <h3 className="w-full border-b border-selago pb-2 text-raleway text-2xl font-bold">
                    Address
                  </h3>
                  <span className="w-full flex flex-row items-center space-x-2 pb-6">
                    <MapPinIcon className="h-6 w-6 text-cerise-red" />
                    <p>#10 Victoria Avenue, 10034</p>
                  </span>
                  <h3 className="w-full border-b border-selago pb-2 text-raleway text-2xl font-bold">
                    Phone
                  </h3>
                  <span className="w-full flex flex-row items-center space-x-2 pb-6">
                    <PhoneIcon className="h-6 w-6 text-cerise-red" />
                    <p>+265 999 371 088</p>
                  </span>
                  <h3 className="w-full border-b border-selago pb-2 text-raleway text-2xl font-bold">
                    Email
                  </h3>
                  <span className="w-full flex flex-row items-center space-x-2 pb-6">
                    <EnvelopeIcon className="h-6 w-6  text-cerise-red" />
                    <p>mail@tradeline.mw</p>
                  </span>
                </div>
              </div>
              <div className="sm:w-8/12 w-full">
                <form className="flex flex-col w-full space-y-4">
                  <div className="flex flex-col w-full space-y-4">
                    <span className="flex sm:flex-row flex-col w-full sm:space-x-4">
                      <input
                        className="sm:w-6/12 w-full p-3.5 border rounded-xl text-sm border-pickled-bluewood-200"
                        placeholder="Firstname"
                      />
                      <input
                        className="sm:w-6/12 w-full p-3.5 border rounded-xl text-sm border-pickled-bluewood-200"
                        placeholder="Lastname"
                      />
                    </span>
                    <span className="flex sm:flex-row flex-col w-full sm:space-x-4">
                      <input
                        className="sm:w-6/12 w-full p-3.5 border rounded-xl text-sm border-pickled-bluewood-200"
                        placeholder="Phone"
                      />
                      <input
                        className="sm:w-6/12 w-full p-3.5 border rounded-xl text-sm border-pickled-bluewood-200"
                        placeholder="Email"
                      />
                    </span>
                  </div>
                  <div className="flex w-full">
                    <textarea
                      rows="4"
                      className="border p-3.5 w-full rounded-xl text-sm border-pickled-bluewood-200"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="flex w-full">
                    <button className="p-3 px-6 font-raleway-base font-bold text-lg rounded-xl text-raleway cursor-pointer drop-shadow-sm hover:drop-shadow-xl text-cerise-red bg-port-gore-500 hover:text-port-gore-500 hover:bg-cerise-red">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
