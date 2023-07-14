import React from "react";
import Cookies from "js-cookie";

const Dashboard = () => {

  return (
    <>
    <div className="pt-10">
    <div className="flex bg-white">
      <h2 className="font-bold text-dark text-3xl lg:text-3xl m-20">
        {" "}
        Welcome, {Cookies.get("name")} 👋
      </h2>
      </div>
      </div>
      <div className="pb-10"></div>
    </>
  );
};

export default Dashboard;