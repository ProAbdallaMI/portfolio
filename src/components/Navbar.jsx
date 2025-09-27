import { useState } from "react";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  const [navbarStatus, setNavbarStatus] = useState(false);
  const handleNavbarStatus = () => {
    setNavbarStatus(!navbarStatus);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-center items-center md:justify-between">
        <LuMenu
          className={`absolute top-5 left-5 z-10 text-white text-xl md:hidden transition-transform duration-200 ${navbarStatus && "rotate-180"}`}
          onClick={handleNavbarStatus}
        />
        <div className="text-lg font-bold">Portfolio</div>
        <div
          className={`md:flex transition-transform duration-200 ${navbarStatus ? "absolute top-0 left-0 pt-15 w-70/100 h-screen bg-gray-500 flex flex-col" : "hidden"}`}
        >
          <a
            href="#home"
            className="px-3 hover:text-red-500"
            onClick={handleNavbarStatus}
          >
            Home
          </a>
          <a
            href="#projects"
            className="px-3 hover:text-red-500"
            onClick={handleNavbarStatus}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="px-3 hover:text-red-500"
            onClick={handleNavbarStatus}
          >
            Skills
          </a>
          <a
            href="#contact"
            className="px-3 hover:text-red-500"
            onClick={handleNavbarStatus}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
