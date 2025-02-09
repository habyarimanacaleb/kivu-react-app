import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close the dropdown when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <li className="relative">
      <button onClick={() => setIsOpen((prev) => !prev)} className="text-white">
        Explore Rwanda ▼
      </button>
      <ul
        ref={dropdownRef}
        className={`absolute left-0 mt-2 bg-blue-700 ${
          isOpen ? "block" : "hidden"
        } z-10 px-2 w-[200px] py-4`}
      >
        <li>
          <NavLink
            to="/parks"
            className="block text-white p-2 hover:bg-blue-500"
            onClick={handleLinkClick} // Close the dropdown when clicked
          >
            National Parks
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/culture"
            className="block text-white p-2 hover:bg-blue-500"
            onClick={handleLinkClick} // Close the dropdown when clicked
          >
            Culture & Heritage
          </NavLink>
        </li>
      </ul>
    </li>
  );
}

export default DropdownMenu;
