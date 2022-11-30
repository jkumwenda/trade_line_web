import React, { Component } from "react";
import { Outlet } from "react-router-dom";

class Settings extends Component {
  render() {
    return (
      <div>
        <h2>Settings</h2>
        <Outlet />
      </div>
    );
  }
}
export default Settings;
