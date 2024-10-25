import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex flex-row w-100">
        <Navbar id="app-navbar" />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
