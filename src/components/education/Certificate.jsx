const Certificate = ({ certData }) => {
	return (
		<div className="w-full flex flex-col gap-3">
			<div className="flex flex-col gap-1">
				<h1 className="text-lg font-bold">{certData.school}</h1>
                <span>Student<span className="text-white text-xs bg-primary px-2 py-0.5 ml-3">{certData.date}</span></span>
			</div>
            <div>
                <h1 className="text-md font-bold">{certData.field}</h1>
                <p className="text-paragraph">{certData.about}</p>
            </div>
		</div>
	);
};

export default Certificate;
