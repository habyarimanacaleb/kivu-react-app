import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu
import DropdownMenu from "./dropdawn/DropdownMenu";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Change language
  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 fixed w-full top-0 left-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div
            className="app-logo cursor-pointer flex items-center"
            onClick={() => navigate(-1)}
          >
            <img
              src="/kivu-image/bt-logo-52.jpg"
              alt="Kivu Logo"
              className="h-12 w-12 mr-2"
            />
            <div>
              <h1 className="text-white text-xl font-bold">
                Ibirwa Kivu Bike Tours
              </h1>
            </div>
          </div>

          {/* Menu Button (Mobile) */}
          <button
            className="text-white text-2xl md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Navbar Links */}
          <ul
            className={`md:flex md:space-x-6 absolute md:static md:items-center  px-6 py-4 bg-blue-600 md:w-auto w-full left-0 top-16 transition-all duration-300 ease-in-out ${
              isOpen ? "block" : "hidden"
            } z-40`}
          >
            <li className="pb-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "text-white"
                }
              >
                {t("Home")}
              </NavLink>
            </li>
            <li className="pb-2">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "text-white"
                }
              >
                {t("Gallery")}
              </NavLink>
            </li>

            <li className="pb-2">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "text-white"
                }
              >
                {t("Contact")}
              </NavLink>
            </li>
            <li className="pb-2">
              <NavLink
                to="/join"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "text-white"
                }
              >
                {t("Sign up")}
              </NavLink>
            </li>
            {/* Dropdown Menu */}
            <DropdownMenu />
          </ul>
        </div>
      </nav>

      <div className="pt-20"></div>
    </>
  );
};

export default Navbar;
