import useMedia from "@/hooks/useMedia";
import Image from "next/image";
import React from "react";

const ImageFood = (props) => {
	const mobile = useMedia("(min-width: 1080px)");
	return (
		<div className="md:hidden  md:col-start-2 col-end-3 mt-4">
			<Image
				src={props.image}
				alt={props.name}
				width={200}
				height={100}
				className="rounded-xl  object-cover object-right-top"
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
