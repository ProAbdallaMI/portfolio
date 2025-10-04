import AutoWriter from "../components/home/AutoWriter";

const About = () => {
	return (
		<section id="about" className="flex flex-col md:flex-row h-screen w-full pt-20">

			<div className="w-full h-full">
				<h1 className="text-2xl md:text-4xl font-bold mb-4 text-left w-full">About Me</h1>
			</div>



			<div className="w-full h-full">
				<h1 className="text-2xl md:text-2xl font-bold mb-4 text-left w-full">
					<AutoWriter
						texts={["Frontend Developer", "Web Developer"]}
					/>
				</h1>
				<p className="text-sm md:text-lg text-gray-700 w-full text-left">
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
