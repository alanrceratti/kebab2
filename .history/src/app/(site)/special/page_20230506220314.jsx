"use client";
import React from "react";
import Image from "next/image";
import { getDocument, getOffers } from "../../../../sanity/sanity-utils";
import { useEffect, useState } from "react";
import useMedia from "@/hooks/useMedia";
import Name from "@/components/OurSpecial/mobile/Name";
import {
	InViewSectionDown,
	InViewSectionLeft,
} from "@/components/InViewSection";
import ImageFood from "@/components/OurSpecial/mobile/ImageFood";
import WhatsInside from "@/components/OurSpecial/mobile/WhatsInside";
import Description from "@/components/OurSpecial/desktop/Description";
import RightMenu from "@/components/OurSpecial/desktop/RightMenu";
import NutriInfo from "@/components/OurSpecial/desktop/NutriInfo";

function OurSpecial() {
	const [selectedOffer, setSelectedOffer] = useState([]);
	const [newOffers, setNewOffers] = useState([]);
	const [data, setData] = useState([]);

	const mobile = useMedia("(min-width: 1080px)");
	const mobile2 = useMedia("(min-width: 1280px)");
	const nutriTable = newOffers[0]?.nutritional;

	//function to fetch all documents from Sanity.io
	//this function is to set the first render of the data
	async function FetchOffer() {
		try {
			const offers = await getOffers();
			setData(offers);
		} catch (error) {
			console.error(error);
		}
	}
	//function to fetch the clicked document option from Sanity.io
	//this function is to set a new data and then update the elements in the html
	async function FetchDocument(id) {
		try {
			const document = await getDocument(id);
			setNewOffers(document);
			// console.log(newOffers[0]?.nutritional);
		} catch (error) {
			console.error(error);
		}
	}

	//this function is for when user click in the offer, then it gets the correct ID to call the FetchDocument function with the ID choosen
	function handleClick(e) {
		const newDocumentId = e.target.dataset.id;

		FetchDocument(newDocumentId);
		setSelectedOffer(newDocumentId);

		// console.log(typeof newDocumentId, newDocumentId);
	}

	// call the first function to display the data
	useEffect(() => {
		FetchOffer();
	}, []);

	return (
		<>
			{!mobile ? (
				<section>
					{data.map((offer) => {
						return (
							<div
								className="text-white ml-10 mr-10"
								key={offer._id}
							>
								<InViewSectionLeft>
									<div className=" grid grid-cols-1 auto-rows-auto grid-flow-row gap-2 ">
										<Name
											name={offer.name}
											long_description={
												offer.long_description
											}
										/>
									</div>
								</InViewSectionLeft>
								<InViewSectionDown>
									<ImageFood
										image={offer.image}
										name={offer.name}
									/>
								</InViewSectionDown>
								<InViewSectionLeft>
									<div className=" col-start-1 col-end-3 row-start-3 row-end-4 sm:w-8/12 ">
										<WhatsInside
											ingredients={offer.ingredients}
										/>
									</div>
								</InViewSectionLeft>
								<div className="flex col-start-1 col-end-3 row-start-4 row-end-5 text-gray-500 text-sm font-inter mt-4"></div>
							</div>
						);
					})}
				</section>
			) : (
				data && (
					<section>
						<div className="text-white ml-10 mr-10  before:">
							<div className="md:grid md:auto-cols-auto md:pt-10 ">
								<div className="md:block md:grid-cols-1 ">
									<InViewSectionLeft>
										<Description
											data={data}
											newOffers={newOffers}
										/>
									</InViewSectionLeft>
									<div className="flex col-start-1 col-end-3 row-start-4 row-end-5 text-gray-500 text-sm font-inter mt-4">
										{nutriTable ? (
											<NutriInfo
												data={data}
												newOffers={newOffers}
											/>
										) : null}
									</div>
								</div>
								<div
									className={`hidden md:block md:col-start-2 col-end-3 mt-24 ${
										mobile ? "w-[330px]" : ""
									} ${mobi} relative`}
								>
									<InViewSectionDown>
										<Image
											src={
												data && newOffers.length < !0
													? data[0]?.image
													: newOffers[0]?.image
											}
											alt={
												data && newOffers.length < !0
													? data[0]?.name
													: newOffers[0]?.name
											}
											fill
											className="rounded-xl aspect-[3/4.5] object-cover  "
										/>
									</InViewSectionDown>
								</div>

								<RightMenu
									data={data}
									selectedOffer={selectedOffer}
									handleClick={handleClick}
								/>
							</div>
						</div>
					</section>
				)
			)}
		</>
	);
}

export default OurSpecial;
