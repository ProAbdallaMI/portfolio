const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold flex flex-col items-center">
          <h2>My Portfolio</h2>
          <img
            src="./favicon.svg"
            alt="Logo"
            className="inline-block w-8 h-8"
          />
        </div>
        <div>
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
