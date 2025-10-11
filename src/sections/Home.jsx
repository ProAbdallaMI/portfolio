import profile from "../assets/profile.png";
import arrow from "../assets/arrow.svg";

const Home = () => {
	return (
		<section
			id="home"
			className="flex flex-col h-screen w-full justify-center items-center bg-white"
		>
			<div className="flex justify-center items-center">
				<img src={profile} alt="profile picture" className="w-6/10" />
			</div>
			<div className="w-full p-10 flex flex-col justify-center gap-y-5">
				<h1 className="text-3xl font-bold">
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
						location.href = "#contact";
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

