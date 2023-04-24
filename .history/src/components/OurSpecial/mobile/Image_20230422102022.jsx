import React from "react";

const ImageFood = (props) => {
	return (
		<div className="lg:hidden  lg:col-start-2 col-end-3 mt-4">
			<Image
				src={props.image}
				alt={props.name}
				width={300}
				height={300}
				className="rounded-xl aspect-square object-cover object-right-top  "
			/>
		</div>
	);
};

export default Image;
