import ProjectCard from "../components/projects/ProjectCard";
import sudamallIcon from "../assets/sudamall.jpg"

const sudamall = {
    image: sudamallIcon,
    url: "https://sudamall.me",
    title: "Sudamall - Ecommerce",
    about: "Mobile-first web app special to fit sudanese unique shopping experience for users as well as increase sales for Stores"
}
const doIt = {
	image: sudamallIcon,
	url: "https://proabdallami.github.io/Do-it/",
	title: "Do-it - To Do List",
	about: "this app can help you orgnize your daily tasks and increase your productivity"
}
const plantShopping = {
	image: sudamallIcon,
	url: "https://proabdallami.github.io/e-plantShopping/",
	title: "Plant Shopping",
	about: "for people who love plants can shop online and find great different experience for plant shopping"
}

const Projects = () => {
	return (
		<section className="flex flex-col gap-5 justify-center items-center">
			<h1 className="text-2xl font-bold">Projects</h1>
			<p className="text-paragraph w-70/100 text-center">
				Here is my live projects along with there links to take a look for different functionalities
			</p>
            <div className="flex justify-center items-center flex-wrap gap-5 w-full p-10">
				<ProjectCard projectCard={sudamall} />
				<ProjectCard projectCard={doIt} />
				<ProjectCard projectCard={plantShopping} />
			</div>
		</section>
	);
};

export default Projects;
