"use client";
import React from "react";
import { getOffers } from "../../../../sanity/sanity-utils";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

async function OurSpeci() {
	const [data, setData] = useState([]);

	async function FetchOffer() {
		const offers = await getOffers();
		setData(offers);
	}

	useEffect(() => {
		FetchOffer();
		console.log(data);
	}, []);

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
			<h1>SADASDASASASD</h1>
		</div>
	);
}

export default OurSpeci;
