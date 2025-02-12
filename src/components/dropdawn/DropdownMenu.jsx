import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";

function DropdownMenu() {
  const { i18n } = useTranslation();
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
  // const handleLinkClick = () => {
  //   setIsOpen(false);
  // };

  // Change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <li className="relative">
      <ul
        ref={dropdownRef}
        className={`absolute left-0 mt-2 bg-blue-700 ${
          isOpen ? "block" : "hidden"
        } z-10 px-2 w-[200px] py-4`}
      >
        <li className="mt-4 md:mt-0">
          <button
            onClick={() => changeLanguage("en")}
            className="block text-white p-2 hover:bg-blue-500"
          >
            English
          </button>
          <button
            onClick={() => changeLanguage("fr")}
            className="block text-white p-2 hover:bg-blue-500"
          >
            Français
          </button>
          <button
            onClick={() => changeLanguage("es")}
            className="block text-white p-2 hover:bg-blue-500"
          >
            Español
          </button>
          <button
            onClick={() => changeLanguage("rw")}
            className="block text-white p-2 hover:bg-blue-500"
          >
            Kinyarwanda
          </button>
          <button
            onClick={() => changeLanguage("ar")}
            className="block text-white p-2 hover:bg-blue-500"
          >
            العربية
          </button>
        </li>
      </ul>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-white flex items-center text-2xl"
        title="Language Translation"
      >
        <FaGlobe className="text-3xl cursor-pointer " /> <span>Translate</span>
      </button>
    </li>
  );
}

export default DropdownMenu;
