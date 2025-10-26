const Certificate = ({ certData }) => {
	return (
		<div className="w-full flex flex-col gap-3 md:flex-row">
			<div className="flex flex-col gap-1 md:w-40/100 md:gap-5">
				<h1 className="text-lg font-bold">{certData.school}</h1>
                <span>Student<span className="text-white text-xs bg-primary px-2 py-0.5 ml-3">{certData.date}</span></span>
			</div>
            <div className="md:flex md:flex-col md:gap-5 md:w-60/100 ">
                <h1 className="text-md font-bold md:text-lg">{certData.field}</h1>
                <p className="text-paragraph">{certData.about}</p>
            </div>
		</div>
	);
};

export default Certificate;
