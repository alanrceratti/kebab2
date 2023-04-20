"use client";
import React from "react";
import { getOffers } from "../../../../sanity/sanity-utils";

async function OurSpecial() {
	const offers = await getOffers();
	const response = offers.json();

	return (
		<div>
			<h1>SADASD</h1>
			<h1>SADASD</h1>
			<h1>SADASD</h1>
			<h1>SADASD</h1>
		</div>
	);
}

export default OurSpecial();
