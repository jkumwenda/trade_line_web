import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Header from "./web/Header";
import Footer from "./web/Footer";

class Web extends Component {
  render() {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="w-full flex justify-center shadow-md">
          <Header />
        </div>
        <div className="flex justify-center grow">
          <Outlet />
        </div>
        <div className="w-full flex justify-center bg-white">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Web;
