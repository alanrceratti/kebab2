"use client";
import React from "react";

import { getOffers } from "../../../../sanity/sanity-utils";

export default async function OurSpecial() {
	const offers = await getOffers();
	return (
		<div>
			<h1>SADASD</h1>
		</div>
	);
}
