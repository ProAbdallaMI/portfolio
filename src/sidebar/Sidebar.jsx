import { FaLinkedinIn } from "react-icons/fa";
import photo from "../assets/photo.jpg";
import { PiGithubLogoFill } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import AsideList from "../components/sidebar/AsideList";
import skillsIcon from "../assets/skillsIcon.svg";
import downloadIcon from "../assets/downloadIcon.svg";
import { MdOutlineMail } from "react-icons/md";

const aboutMe = {
	Age: new Date().getFullYear() - 2004,
	Residence: "UAE",
	Freelance: <span className="text-green-500"> Available </span>,
};
const languages = {
	Arabic: 100,
	English: 70,
};
const skills = {
	HTML5: 99,
	CSS3: 99,
	Tailwindcss: 98,
	JavaScript: 95,
	React: 90,
};
const extraSkills = [
	"React-router - SPA routing",
	"Redux - state management",
	"Git - Version Controll",
	"MCP Protocol",
];

const Sidebar = () => {
	return (
		<aside className="flex flex-col justify-center items-center my-5 gap-5">
			{/* picture, name, links */}
			<div className="flex flex-col justify-center items-center gap-5">
				{/* profile picture */}
				<img
					src={photo}
					alt="profile"
					className="rounded-full w-20"
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
						className=""
					>
						<FaLinkedinIn className="size-7 p-2 rounded-md bg-primary" />
					</a>
					<a href="https://github.com/proabdallami" className="">
						<PiGithubLogoFill className="size-7 p-2 rounded-md bg-primary" />
					</a>
                    {/* my own website will be added in the near future */}
					{/* <a href="https://abdallamashaq.com" className="">
						<TbWorld className="size-7 p-2 rounded-md bg-primary" />
					</a> */}
                    <a href="mailto:abdallamohamedb11@gmail.com" className="">
						<MdOutlineMail className="size-7 p-2 rounded-md bg-primary" />
					</a>
				</div>
			</div>

			<hr className="text-background w-full" />

			{/* details about me */}
			<div className="flex flex-col w-full gap-3">
				{Object.keys(aboutMe).map((item) => (
					<div className="flex justify-between">
						<h4 className="bg-primary px-2">{item}:</h4>
						<span> {aboutMe[item]} </span>
					</div>
				))}
			</div>

			<hr className="text-background w-full" />

			{/* languages and skills*/}
			<AsideList title="Languages" dataSet={languages} />
			<hr className="text-background w-full" />
			<AsideList title="Skills" dataSet={skills} />

			<hr className="text-background w-full" />

			{/* extra skills */}
			<div className="flex flex-col w-full gap-3">
				<h1 className="font-bold">Extra Skills</h1>
				{extraSkills.map((el) => (
					<div className="flex gap-x-2 text-paragraph">
						<img src={skillsIcon} alt="item icon" className="w-3" />
						<span>{el}</span>
					</div>
				))}
			</div>

			<hr className="text-background w-full" />

			{/* download CV button */}
			<div className="flex justify-center gap-x-3 bg-primary text-secondary px-5 py-2 w-full font-bold">
				<a
					href="https://drive.google.com/uc?export=download&id=1Aw4T8xL5U0SQ31zkWNTkd3TvxMeUe3ZL"
					download={"Frontend Developer.pdf"}
				>
					<button>Download CV</button>
				</a>
				<img src={downloadIcon} alt="download icon" />
			</div>
		</aside>
	);
};

export default Sidebar;

