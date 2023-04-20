"use client";
import React from "react";
import { getOffers } from "../../../../sanity/sanity-utils";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

function OurSpeci() {
	const [data, setData] = useState([]);

	async function FetchOfferr() {
		const offers = await getOffers();
		setData(offers);
	}

	useEffect(() => {
		FetchOfferr();
		console.log(data);
	}, []);

	return (
		<main>
			{data.map((offer) => {
				<div className="hidden lg:block lg:col-start-3 col-end-4 mt-24 bg-white">
					<Image
						src={offer.image}
						alt={offer.image.alt}
						width={150}
						height={150}
						className="rounded-xl aspect-square object-cover object-right-top  "
					/>
					;<h1>SADASDASASASD</h1>
				</div>;
			})}
		</main>
	);
}

export default OurSpeci;
