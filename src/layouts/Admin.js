import React, { Component } from "react";
import AdminHeader from "./admin/AdminHeader";
import AdminFooter from "./admin/AdminFooter";
import AdminSidebar from "./admin/AdminSidebar";
import { Outlet } from "react-router-dom";

class Admin extends Component {
  render() {
    return (
      <div className="flex sm:flex-row flex-col min-h-screen">
        <div className="flex p-6 sm:w-2/12 w-full grow bg-concrete-50">
          <AdminSidebar />
        </div>
        <div className="flex flex-col sm:w-10/12 w-full grow space-y-4 bg-concrete-500">
          <div className="w-full flex p-6 text-port-gore z-10">
            <AdminHeader />
          </div>
          <div className="w-full px-6 grow z-0">
            <Outlet />
          </div>
          <div className="w-full flex p-6">
            <AdminFooter />
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
