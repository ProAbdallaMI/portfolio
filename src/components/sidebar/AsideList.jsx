const AsideList = ({ title, dataSet }) => {
	return (
		<div className="flex flex-col w-full gap-5">
			<h1 className="font-bold">{title}</h1>
			<div className="flex flex-col w-full gap-3">
				{Object.keys(dataSet).map((item, index) => (
					<div key={index} className="text-paragraph flex flex-col">
						<div className="flex justify-between">
							<h4 className="">{item}</h4>
							<span className="text-green-500">
								{" "}
								{dataSet[item]}%{" "}
							</span>
						</div>
						<div className="w-full rounded flex border-1 border-primary p-[1px]">
							<progress
								className="w-full h-1 [&::-webkit-progress-bar]:bg-transparent [&::-webkit-progress-value]:bg-primary [&::-webkit-progress-value]:rounded"
								value={dataSet[item]}
								max={100}
							></progress>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AsideList;

