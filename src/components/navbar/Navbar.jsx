import { useReducer, useState } from "react";
import HamburgerToggle from "./HumburgerToggle";

const initialItemsState = {
	home: false,
  about: false,
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
		<nav className="bg-white p-4 text-gray-800 fixed w-full top-0 left-0 z-20 shadow-sm md:shadow-md">
			<div className="container mx-auto flex justify-center items-center md:justify-between">
				<HamburgerToggle
					className="absolute left-4 top-5 md:hidden"
					onClick={() => setNavbarStatus(!navbarStatus)}
					isOpen={navbarStatus}
				/>
				<div className="text-xl font-bold text-primary">
					<a href="#">Portfolio</a>
				</div>

				<div
					className={`md:flex gap-x-2 rounded-sm transition-transform duration-200 bg-white flex absolute top-4 left-3 md:static items-center font-bold ${
						navbarStatus ? "pt-6 flex-col shadow-lg" : "hidden"
					}`}
				>
					<a
						href="#home"
						className={`px-3 py-1 rounded-md ${
							itemsActive.home ? "bg-orange-500 text-white" : "hover:bg-gray-200"
						}`}
						onClick={handleMenuItemClick}
					>
						Home
					</a>
          <a
						href="#about"
						className={`px-3 py-1 rounded-md ${
							itemsActive.about ? "bg-orange-500 text-white" : "hover:bg-gray-200"
						}`}
						onClick={handleMenuItemClick}
					>
						About
					</a>
					<a
						href="#projects"
						className={`px-3 py-1 rounded-md ${
							itemsActive.projects ? "bg-orange-500 text-white" : "hover:bg-gray-200"
						}`}
						onClick={handleMenuItemClick}
					>
						Projects
					</a>
					<a
						href="#skills"
						className={`px-3 py-1 rounded-md  ${
							itemsActive.skills ? "bg-orange-500 text-white" : "hover:bg-gray-200"
						}`}
						onClick={handleMenuItemClick}
					>
						Skills
					</a>
					<a
						href="#contact"
						className={`px-3 py-1 rounded-md  ${
							itemsActive.contact ? "bg-orange-500 text-white" : "hover:bg-gray-200"
						}`}
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

