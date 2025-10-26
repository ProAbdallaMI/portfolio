import profile from "../assets/profile.png";
import arrow from "../assets/arrow.svg";
import greenCircle from "../assets/green-circle.svg";
import rectangle26 from "../assets/rectangle-26.svg";
import rectangleBlue from "../assets/rectangle-26-blue.svg";
import yellowCircle from "../assets/yellow-circle.svg";
import triangle from "../assets/triangle.svg";

const Home = () => {
	return (
		<section
			id="home"
			className="flex flex-col h-180 w-full justify-center gap-5 items-center bg-white md:flex-row-reverse"
		>

			{/* picture shape */}
			<img src={greenCircle} alt="shape" className="w-3 absolute left-10 top-20 md:left-65/100 md:top-20/100" />
			<img src={rectangle26} alt="shape" className="hidden w-3 absolute left-90/100 top-25/100 md:block" />
			<img src={yellowCircle} alt="shape" className="hidden w-3 absolute left-70/100 top-80/100 md:block" />
			<img src={triangle} alt="shape" className="w-3 absolute right-15 top-80 md:top-85/100 md:left-95/100" />



			<div className="flex justify-center items-center">
				<img src={profile} alt="profile picture" className="w-6/10" />
			</div>


			{/* text shapes */}
			<img src={yellowCircle} alt="shape" className="hidden absolute w-3 top-25/100 left-30/100 md:block" />
			<img src={greenCircle} alt="shape" className="hidden absolute w-3 top-75/100 left-35/100 md:block" />
			<img src={rectangleBlue} alt="shape" className="w-3 absolute right-35 top-150 md:top-60/100 md:left-50/100" />

			<div className="w-full p-10 flex flex-col justify-center gap-y-5 md:w-5/10">
				<h1 className="text-3xl font-bold">
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					I'm Abdalla Mohamed
					<br />
					<span className="text-primary opacity-95">
						Front-end
					</span>{" "}
					Developer
				</h1>
				<p className="text-paragraph">
					With 1 year of freelance experience in
					React, web design, and e-commerce platforms.
				</p>
				<button
					onClick={() => {
						location.href = "mailto:abdallamohamedb11@gmail.com";
					}}
					className="bg-primary w-fit text-secondary py-2 px-4 rounded flex"
				>
					HIRE ME <img src={arrow} alt="arrow" className="pl-2" />
				</button>
			</div>
		</section>
	);
};

export default Home;

