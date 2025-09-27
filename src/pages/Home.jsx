
import profileImage from '../assets/profile.png';

const Home = () => {
	return (
		<section
			id="home"
			className="flex flex-col md:flex-row justify-evenly items-center h-screen px-6"
		>
			<div className='max-w-xl'>
				<h1 className="text-2xl md:text-5xl font-bold mb-4 text-left w-full">
					I'm a Frontend Developer
					{/* <AutoWriter texts={["Frontend Developer", "Web Developer"]} /> */}
				</h1>
				<p className="text-sm md:text-lg text-gray-700 w-full text-left">
					Frontend Developer with 1 year of freelance experience in
					React, web design, and e-commerce platforms. Skilled in
					turning Figma designs into responsive interfaces,
					integrating REST APIs, and collaborating with UX teams to
					deliver user-focused solutions.
				</p>
			</div>

			<div className=''>
				<img src={profileImage} alt="Profile" className='rounded-full w-40 md:w-80' />
			</div>
		</section>
	);
};

export default Home;

