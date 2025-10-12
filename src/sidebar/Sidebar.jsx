import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import photo from "../assets/photo.jpg";
import { PiGithubLogoFill } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import AsideList from "../components/sidebar/AsideList";
import skillsIcon from "../assets/skillsIcon.svg";

const languages = {
	Arabic: 100,
	English: 70,
};
const skills = {
	HTML5: 99,
	CSS3: 99,
	JavaScript: 95,
	Git: 90,
};
const extraSkills = ["MCP Protocol", "Version Controll System"];

const Sidebar = () => {
	return (
		<aside className="flex flex-col justify-center items-center my-5 gap-5 ">
			{/* picture, name, links */}
			<div className="flex flex-col justify-center items-center gap-5">
				{/* profile picture */}
				<img
					src={photo}
					alt="profile"
					className="rounded-full w-20 border-1"
				/>

				{/* name and links */}
				<div className="flex flex-col justify-center items-center">
					<h1 className="text-secondary font-bold">
						ABDALLA MOHAMED
					</h1>
					<h1 className="text-paragraph">Front-End Developer</h1>
				</div>
				<div className="flex gap-2">
					<a
						href="https://www.linkedin.com/in/abdalla-mohamed-ashag/"
						className="href"
					>
						<FaLinkedinIn className="size-7 p-2 rounded-md bg-primary" />
					</a>
					<a href="https://github.com/proabdallami" className="">
						<PiGithubLogoFill className="size-7 p-2 rounded-md bg-primary" />
					</a>
					<a href="https://abdallamashaq.com" className="href">
						<TbWorld className="size-7 p-2 rounded-md bg-primary" />
					</a>
				</div>
			</div>

			<hr className="text-background w-full" />

			{/* details about me */}
			<div className="flex flex-col w-full gap-3">
				<div className="flex justify-between">
					<h4 className="bg-primary px-2">Age:</h4>
					<span> {new Date().getFullYear() - 2004} </span>
				</div>

				<div className="flex justify-between">
					<h4 className="bg-primary px-2">Resedence:</h4>
					<span> UAE </span>
				</div>

				<div className="flex justify-between">
					<h4 className="bg-primary px-2">Freelance:</h4>
					<span className="text-green-500"> Available </span>
				</div>
			</div>

			{/* languages and skills*/}
			<AsideList skillsAndLanguages={[languages, skills]} />

			{/* extra skills */}
			<div>
				{extraSkills.map((el) => (
					<div>
						<img src={skillsIcon} alt="item icon" />
						<span>{el}</span>
					</div>
				))}
			</div>
		</aside>
	);
};

export default Sidebar;

