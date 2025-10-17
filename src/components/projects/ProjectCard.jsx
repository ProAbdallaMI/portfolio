import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ projectCard }) => {
	return (
		<div class="max-w-sm bg-white border border-background rounded-lg shadow-sm">
			<a target="_blank" href={projectCard.url}>
				<img
					class="rounded-t-lg"
					src={projectCard.image}
					alt="card image"
				/>
			</a>
			<div class="p-5">
				<h5 class="mb-2 text-2xl font-bold tracking-tight">
					{projectCard.title}
				</h5>
				<p class="mb-3 font-normal text-paragraph">
					{projectCard.about}
				</p>
				<a
					target="_blank"
					href={projectCard.url}
					class="inline-flex items-center px-3 py-2 font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:outline-none"
				>
					Visit
					<FaArrowRight className="ml-2" />
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;

