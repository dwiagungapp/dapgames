import React from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
    <div className="pt-6 font-poppins">
    <div className="border p-4 mb-4 bg-white">
        <nav aria-label="breadcrumb">
  <ol className="flex leading-none text-indigo-600 text-sm divide-x divide-[#FF8F00]">
    <li className="pr-4">
    <Link reloadDocument
                    to="/dashboard"
                    className="text-[#FF8F00] hover:text-opacity-70 py-2"
                  >
                          Dashboard
                  </Link>
    </li>
    <li className="px-4 text-gray-700" aria-current="page">Profile</li>
  </ol>
</nav>
          </div></div>
          
      <div className="font-poppins flex flex-col bg-white min-w-0 break-words w-full mb-6 shadow-md pt-10 rounded-lg border-2 border-gray-50 mt-6">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="flex">
                <img
                  alt="..."
                  src={Cookies.get("image_url")}
                  className="shadow-xl w-[300px] inline-block align-middle rounded-full "
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-12 mb-12">
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400">
              <span className="text-l block font-bold ">
                Nama Lengkap :
              </span>
              {Cookies.get("name")}
            </div>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400">
              <span className="text-l font-bold block tracking-wide ">
                Email :
              </span>
              {Cookies.get("email")}
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}