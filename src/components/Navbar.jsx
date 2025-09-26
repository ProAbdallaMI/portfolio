import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-center items-center">
        <LuMenu className="absolute top-5 left-5 text-white text-xl" />
        <div className="text-lg font-bold">Portfolio</div>
        <div className="hidden">
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
