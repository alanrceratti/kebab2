import Description from "@/components/OurSpecial/desktop/Description";
import React from "react";

const Product = () => {
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
	return (
		<div>
			<Description offer={offer} />
		</div>
	);
};

export default Product;
