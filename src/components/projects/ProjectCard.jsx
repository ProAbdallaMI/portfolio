import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ projectCard }) => {
	return (
		<div className="max-w-sm bg-white border border-background rounded-sm shadow-sm">
			<a target="_blank" href={projectCard.url} rel="noreferrer">
				<img
					className=""
					src={projectCard.image}
					alt="card image"
				/>
			</a>
			<div className="p-5">
				<h5 className="mb-2 text-2xl font-bold tracking-tight">
					{projectCard.title}
				</h5>
				<p className="mb-3 font-normal text-paragraph">
					{projectCard.about}
				</p>
				<a
					target="_blank"
					href={projectCard.url}
					className="inline-flex items-center px-3 py-1 font-medium text-center text-white bg-primary rounded-sm focus:ring-4 focus:outline-none" rel="noreferrer"
				>
					Visit
					<FaArrowRight className="ml-2" />
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;

