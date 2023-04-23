import React from "react";

const Name = (props) => {
	return (
		<div className=" pt-32 col-start-1 col-end-3 row-start-1 row-end-2 mb-8 sm:w-8/12 ">
			<h1 className="text-5xl font-aclonica bg-gradient-to-r from-white from-0% via-white via-35%  to-green to-20% bg-clip-text text-transparent">
				{props.name}
			</h1>

			<p className="mt-4 ">{props.long_description}</p>
		</div>
	);
};

export default Name;
