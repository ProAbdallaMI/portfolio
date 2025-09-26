import { useState } from "react";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  
  const [navbarStatus, setNavbarStatus] = useState(true);
  const handleNavbarStatus = () => {
    setNavbarStatus(!navbarStatus);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-center items-center md:justify-between">
        <LuMenu className="absolute top-5 left-5 z-10 text-white text-xl md:hidden" onClick={handleNavbarStatus} />
        <div className="text-lg font-bold">Portfolio</div>
        <div className={`md:flex ${navbarStatus ? "absolute top-0 left-0 w-70/100 h-screen bg-gray-500 flex flex-col" : "hidden"}`}>
          <a href="#home" className="px-3 hover:underline">
            Home
          </a>
          <a href="#projects" className="px-3 hover:underline">
            Projects
          </a>
          <a href="#skills" className="px-3 hover:underline">
            Skills
          </a>
          <a href="#contact" className="px-3 hover:underline">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
