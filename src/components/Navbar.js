import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import logodg from "../assets/img/logodg.png"

const Navbar = () => {
    const location = useLocation();
    const [navbar, setNavbar] = useState(false);
    const activeLink = "text-[#F05423] font-bold";

    return (
      <>
        <nav className="w-full bg-[#2F323E] shadow sticky top-0 z-10 font-poppins">
            <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <img src={logodg} className="w-18 h-8"/>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-white rounded-md outline-none focus:border-[#F05423] focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-3 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-3 md:flex md:space-x-2 md:space-y-0">
                            <li className="text-white hover:text-[#FF8F00]">
                            <NavLink reloadDocument to="/" className={({ isActive }) => (isActive ? activeLink : "")}>
                                Home
                            </NavLink>
                            </li>
                            <li>
                {!Cookies.get("token") && (
                  <Link reloadDocument
                    to="/register"
                    className="md:ml-4 text-white hover:text-[#FF8F00] py-2 block"
                  >
                     <NavLink to="/register" className={({ isActive }) => (isActive ? activeLink : "")}>
                               Register
                            </NavLink>
                  </Link>
                )}
              </li>
                            <li>
                {!Cookies.get("token") && (
                  <Link reloadDocument
                    to="/login"
                    className="px-6 md:ml-4 py-2 block bg-[#FF8F00] text-white rounded-lg"
                  >
                    Login
                  </Link>
                )}
              </li>
              <li>
                {Cookies.get("token") && (
                  <Link reloadDocument
                    to="/dashboard"
                    className={` py-2 block text-white hover:text-[#FF8F00] font-semibold ${location.pathname.startsWith('/dashboard') ? 'text-white' : ''}`}
                  >
                    Dashboard
                  </Link>
                )}
              </li>
                            <li>
                            {Cookies.get("token") && (
                  <a
                    className="px-6 md:ml-4 py-2 block bg-[#FF8F00] text-white rounded-lg hover:opacity-80"
                    href="/"
                    onClick={() => {
                      Cookies.remove("token");
                      Cookies.remove("name");
                      Cookies.remove("email");
                      Cookies.remove("image_url");
                    }}
                  >
                    Logout
                  </a>
                )}
              </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar