const Home = () => {
	return (
		<section
			id="home"
			className="flex flex-col md:flex-row h-screen w-full"
		>
			<div className="w-full h-2/5 mt-20 md:mt-0 md:h-full p-10 md:p-30 flex flex-col justify-center gap-y-5 md:gap-y-10">
				<h1 className="text-3xl md:text-4xl font-bold">
					Hi, I'm ABDALLA
				</h1>
				<div className="md:text-lg">
					<p className="">
						Are you looking for a Developer who can finish your
						business application in a fast and safe way?
					</p>
					<p>
						See my work first{" "}
						<a href="#projects" className="text-blue-800">
							here
						</a>
						.
					</p>
				</div>
				<button onClick={() => {location.href = "#contact"}} className="bg-orange-500 w-1/3 md:w-1/6 text-white py-2 px-4 rounded">
					Hire Me
				</button>
			</div>
			<div className="w-full h-2/5 md:h-full p-10 flex flex-col justify-center items-center">
				image
			</div>
		</section>
	);
};

export default Home;

