"use client";
import React from "react";
import { getOffers } from "../../../../sanity/sanity-utils";

async function OurSpeci() {
	const offers = await getOffers();

	return (
		<div>
			<h1>SADASD</h1>
			<h1>SADASD</h1>
			<h1>SADASD</h1>
			<h1>SADASD</h1>
		</div>
	);
}

export default OurSpeci;
