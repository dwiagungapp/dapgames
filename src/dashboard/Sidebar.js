import { forwardRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HomeIcon, TableCellsIcon, BriefcaseIcon, UserIcon, RectangleGroupIcon } from "@heroicons/react/24/solid";
import logodg from "../assets/img/logodg.png"

const SideBar = forwardRef(({ showNav }, ref) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => {
    if (path === location.pathname) {
      window.location.reload(); // Reload the document if the same path is clicked
    } else {
      navigate(path);
    }
  };

  return (
    <div ref={ref} className="font-poppins fixed w-56 h-full bg-[#2F323E] shadow-sm border-r-2 border-gray-700 z-20">
      <div className="flex justify-center mt-4 mb-14">
        <picture>
        <img className="w-18 h-12" src={logodg} alt="logo" />
        </picture>
      </div>

      <div className="flex flex-col ">
        <div
          className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
            location.pathname === "/"
              ? "bg-[#ff8f00] text-white"
              : "text-gray-300 hover:bg-orange-200 hover:text-[#ff8f00]"
          }`}
          onClick={() => handleNavigate("/")}
        >
          <div className="mr-2">
            <HomeIcon className="h-5 w-5" />
          </div>
          <div>
            <p>Home</p>
          </div>
        </div>
       
        <div
          className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
            location.pathname === "/dashboard"
              ? "bg-[#ff8f00] text-white"
              : "text-gray-300 hover:bg-orange-200 hover:text-[#ff8f00]"
          }`}
          onClick={() => handleNavigate("/dashboard")}
        >
          <div className="mr-2">
            <RectangleGroupIcon className="h-5 w-5" />
          </div>
          <div>
            <p>Dashboard</p>
          </div>
        </div>
        
        <div
          className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
            location.pathname === "/dashboard/list-game"
              ? "bg-[#ff8f00] text-white"
              : "text-gray-300 hover:bg-orange-200 hover:text-[#ff8f00]"
          }`}
          onClick={() => handleNavigate("/dashboard/list-game")}
        >
          <div className="mr-2">
            <TableCellsIcon className="h-5 w-5" />
          </div>
          <div>
            <p>List Games</p>
          </div>
        </div>

        <div
          className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
            location.pathname === "/dashboard/profile"
              ? "bg-[#ff8f00] text-white"
              : "text-gray-300 hover:bg-orange-200 hover:text-[#ff8f00]"
          }`}
          onClick={() => handleNavigate("/dashboard/profile")}
        >
          <div className="mr-2 flex flex-wrap">
            <UserIcon className="h-5 w-5" />
          </div>
          <div>
            <p>Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;