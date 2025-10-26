import { useEffect, useRef, useState } from "react";
import HamburgerToggle from "./HumburgerToggle";
import Sidebar from "../../sidebar/Sidebar";

const Navbar = () => {
	const [navbarStatus, setNavbarStatus] = useState(false);
	const component = useRef(null);

	const [stickyHeight, setStickyHeight] = useState(0);
	useEffect( () => {
		setStickyHeight(component.current.scrollHeight - window.innerHeight);
	}, [])

	return (
		<nav ref={component} className={`bg-white p-4 text-gray-800 fixed w-full top-0 left-0 z-10 md:w-25/100 md:h-screen md:sticky md:left-0 md:p-0 md:-top-[${stickyHeight}px]`}>
			<div className="container mx-auto flex justify-center items-center">
				<HamburgerToggle
					className="absolute left-4 top-5 md:hidden"
					onClick={() => setNavbarStatus(!navbarStatus)}
					isOpen={navbarStatus}
				/>
				<div className="text-xl font-bold md:hidden">
					<a href="#">Portfolio</a>
				</div>

				<div onClick={() => setNavbarStatus((prev) => !prev)} className={`absolute h-screen top-0 w-full -left-full transition-all duration-200 md:static md:left-0 md:h-auto ${
							navbarStatus ? "translate-x-full md:translate-0" : ""
						}`}>
					<div onClick={() => setNavbarStatus((prev) => !prev)}
						className={`w-70/100 h-screen overflow-y-auto absolute top-0 left-0 z-10 shadow-2xl bg-white p-10 md:h-auto md:shadow-none md:static md:w-full md:overflow-y-hidden`}
					>
						<Sidebar />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

