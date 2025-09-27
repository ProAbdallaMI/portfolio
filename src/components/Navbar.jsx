import { useReducer, useState } from "react";
import HamburgerToggle from "./HumburgerToggle";

const initialItemsState = {
  home: false,
  projects: false,
  skills: false,
  contact: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ACTIVE":
      return { ...initialItemsState, [action.payload]: true };
    default:
      return state;
  }
};

const Navbar = () => {
  const [navbarStatus, setNavbarStatus] = useState(false);
  const [itemsActive, dispatch] = useReducer(reducer, initialItemsState);

  const handleMenuItemClick = (e) => {
    setNavbarStatus(false);
    dispatch({ type: "ACTIVE", payload: e.target.text.toLowerCase() });
  };

  return (
    <nav className="bg-gray-800 p-4 text-white fixed w-full top-0 left-0 z-20">
      <div className="container mx-auto flex justify-center items-center md:justify-between">
        <HamburgerToggle
          className="absolute left-4 top-5 md:hidden"
          onClick={() => setNavbarStatus(!navbarStatus)}
        />
        <div className="text-xl font-bold text-primary">
          <a href="#">Portfolio</a>
        </div>

        <div
          className={`md:flex rounded-sm transition-transform duration-200 bg-gray-800 flex absolute top-4 left-3 md:static items-center ${
            navbarStatus ? "pt-6 flex-col shadow-sm" : "hidden"
          }`}
        >
          <a
            href="#home"
            className={`px-3 py-1 rounded-md hover:text-red-500 ${itemsActive.home ? "text-red-500" : ""}`}
            onClick={handleMenuItemClick}
          >
            Home
          </a>
          <a
            href="#projects"
            className={`px-3 py-1 rounded-md hover:text-red-500 ${itemsActive.projects ? "text-red-500" : ""}`}
            onClick={handleMenuItemClick}
          >
            Projects
          </a>
          <a
            href="#skills"
            className={`px-3 py-1 rounded-md hover:text-red-500 ${itemsActive.skills ? "text-red-500" : ""}`}
            onClick={handleMenuItemClick}
          >
            Skills
          </a>
          <a
            href="#contact"
            className={`px-3 py-1 rounded-md hover:text-red-500 ${itemsActive.contact ? "text-red-500" : ""}`}
            onClick={handleMenuItemClick}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
