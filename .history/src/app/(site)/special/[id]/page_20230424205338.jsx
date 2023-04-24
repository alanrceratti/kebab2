"use client";
import Description from "@/components/OurSpecial/desktop/Description";
import React, { useState } from "react";
import { getDocument, getOffers } from "../../../../../sanity/sanity-utils";

const Product = () => {
	const [newOffers, setNewOffers] = useState([]);

	async function FetchDocument(id) {
		try {
			const document = await getDocument(id);
			setNewOffers(document);
			// console.log(newOffers[0]?.nutritional);
		} catch (error) {
			console.error(error);
			// handle error here
		}
	}

	async function FetchOffer() {
		try {
			const offers = await getOffers();
			setData(offers);
		} catch (error) {
			console.error(error);
			// handle error here
		}
	}
	return (
		<div>
			<Description offer={newOffers} />
		</div>
	);
};

export default Product;
