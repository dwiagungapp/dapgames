import React from "react";
import logodg from "../assets/img/logodg1.png";

const Footer = () => {
  return (
    <>
    <footer className="flex w-full justify-end text-gray-600 font-poppins bg-[#2F323E]">
      <div className="container p-4 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src={logodg} alt="Logo" className="h-12 w-18" />
        </a>
        <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 DAP Games
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        </span>
      </div>
      <div className="flex justify-center py-2">
      </div>
    </footer>
    </>
  );
};

export default Footer;