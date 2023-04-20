"use client";
import React from "react";
import { getOffers } from "../../../../sanity/sanity-utils";

async function OurSpeci() {
	const offers = await getOffers();

	return (
		<div className="hidden lg:block lg:col-start-3 col-end-4 mt-24 bg-white">
			{data.map((offer) => {
				<Image
					src={offer.image}
					alt={offer.image.alt}
					width={150}
					height={150}
					className="rounded-xl aspect-square object-cover object-right-top  "
				/>;
			})}
		</div>
	);
}

export default OurSpeci;
