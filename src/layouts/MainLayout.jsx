import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../componentsUI/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
