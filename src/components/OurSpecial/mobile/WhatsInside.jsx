import React from "react";

const WhatsInside = (props) => {
	return (
		<div>
			<h1 className="text-2xl font-inter font-bold mt-10 ">
				What&apos;s
				<span className="text-green">inside</span>?
			</h1>
			<p className="mt-4 ">{props.ingredients}</p>
		</div>
	);
};

export default WhatsInside;
