import Image from "next/image";
import React from "react";

const ImageFood = (props) => {
	return (
		<div className="lg:hidden  lg:col-start-2 col-end-3 mt-4">
			<Image
				src={props.image}
				alt={props.name}
				width={100}
				height={100}
				className="rounded-xl "
				aria-label={props.name}
				role="img"
				loading="lazy"
				onError={(e) => {
					e.target.onerror = null;
					e.target.src = "fallback-image.jpg"; // replace with your fallback image
				}}
			/>
		</div>
	);
};

export default ImageFood;
