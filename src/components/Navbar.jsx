import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 fixed w-full top-0 left-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="app-logo cursor-pointer" onClick={() => navigate(-1)}>
            <h1 className="text-white text-xl font-bold">Kivu</h1>
            <p className="text-white text-sm">safari & tours</p>
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
            className={`md:flex md:space-x-6 absolute md:static bg-blue-600 md:w-auto w-full left-0 top-16 transition-all duration-300 ease-in-out ${
              isOpen ? "block" : "hidden"
            } z-40`}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "text-white"
                }
              >
                Gallery
              </NavLink>
            </li>

            {/* Dropdown Menu */}
            <li className="relative group">
              <button className="text-white">Explore Rwanda ▼</button>
              <ul className="absolute left-0 mt-2 bg-blue-700 hidden group-hover:block">
                <li>
                  <NavLink
                    to="/parks"
                    className="block text-white p-2 hover:bg-blue-500"
                  >
                    National Parks
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/culture"
                    className="block text-white p-2 hover:bg-blue-500"
                  >
                    Culture & Heritage
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "text-white"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Add padding to prevent content from being hidden under navbar */}
      <div className="pt-20"></div>
    </>
  );
};
