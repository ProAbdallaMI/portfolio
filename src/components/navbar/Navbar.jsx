import { useState } from "react";
import HamburgerToggle from "./HumburgerToggle";
import Sidebar from "../../sidebar/Sidebar";

const Navbar = () => {
	const [navbarStatus, setNavbarStatus] = useState(true);

	return (
		<nav className="bg-white p-4 text-gray-800 fixed w-full top-0 left-0 z-10">
			<div className="container mx-auto flex justify-center items-center">
				<HamburgerToggle
					className="absolute left-4 top-5"
					onClick={() => setNavbarStatus(!navbarStatus)}
					isOpen={navbarStatus}
				/>
				<div className="text-xl font-bold">
					<a href="#">Portfolio</a>
				</div>

				<div onClick={() => setNavbarStatus((prev) => !prev)} className={`absolute h-screen top-0 w-full -left-full transition-all duration-200 ${
							navbarStatus ? "translate-x-full" : ""
						}`}>
					<div onClick={() => setNavbarStatus((prev) => !prev)}
						className={`w-70/100 h-screen overflow-y-auto absolute top-0 left-0 z-10 shadow-2xl bg-white p-10`}
					>
						<Sidebar />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

