import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center  bg-black w-1/2 px-12 ">
        <div className="max-2-md space-y-6 text-center text-primary">
          <h1 className="text-4xl font-extrabold tracking-tighter">
            {" "}
            Welcome to Ecommerce
          </h1>
        </div>
      </div>
      <div className=" flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px=8 bg-background  ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
