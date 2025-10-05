import AutoWriter from "../components/home/AutoWriter";

const About = () => {
	return (
		<section id="about" className="flex flex-col md:flex-row h-screen w-full">

			<div className="w-full h-2/5 md:h-full p-10 md:p-30 flex flex-col justify-center gap-y-5 md:gap-y-10">
				<h1 className="text-3xl md:text-4xl font-bold text-center">About Me</h1>
			</div>



			<div className="w-full h-2/5 md:h-full p-10 md:p-30 flex flex-col justify-center gap-5">
				<h1 className="text-1xl md:text-2xl font-bold text-left w-full">
					<AutoWriter
						texts={["Frontend Developer", "Web Developer"]}
					/>
				</h1>
				<p className="text-sm md:text-lg text-gray-800 w-full text-left">
					Frontend Developer with 1 year of freelance experience in
					React, web design, and e-commerce platforms. Skilled in
					turning Figma designs into responsive interfaces,
					integrating REST APIs, and collaborating with UX teams to
					deliver user-focused solutions.
				</p>
			</div>
		</section>
	);
};

export default About;
