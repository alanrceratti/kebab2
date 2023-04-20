"use client";
import React from "react";



export default async function OurSpecial() {
	const offers = await getOffers();
	const response = offers.json();

	return (
		<div>
			<h1>SADASD</h1>
		</div>
	);
}
