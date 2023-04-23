"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Plus from "/public/our-special/plus.svg";
import { getDocument, getOffers } from "../../../../../sanity/sanity-utils";
import { useEffect } from "react";
import { useState } from "react";
import useMedia from "@/hooks/useMedia";
import Name from "@/components/OurSpecial/mobile/Name";
import {
	InViewSectionDown,
	InViewSectionLeft,
	InViewSectionRight,
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
	const [newDocument, SetNewDocument] = useState(0);

	const mobile = useMedia("(min-width: 1280px)");
	const nutriTable = newOffers[0]?.nutritional;
	const documentId = newDocument;

	const router = useRouter();
	const { id } = router.query;

	//function to fetch all documents from Sanity.io
	//this function is to set the first render of the data
	async function FetchOffer() {
		try {
			const offers = await getOffers();
			setData(offers);
		} catch (error) {
			console.error(error);
			// handle error here
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
			// handle error here
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
								<InViewSectionRight>
									<ImageFood
										image={offer.image}
										name={offer.name}
									/>
								</InViewSectionRight>
								<InViewSectionLeft>
									<div className=" col-start-1 col-end-3 row-start-3 row-end-4 sm:w-8/12 ">
										<WhatsInside
											ingredients={offer.ingredients}
										/>
									</div>
								</InViewSectionLeft>
								<div className="flex col-start-1 col-end-3 row-start-4 row-end-5 text-gray-500 text-sm font-inter mt-4">
									{/* {!nutriTable ? (
												<details>
													<summary>
														Nutritional Information
													</summary>

													<table className="ml-1 w-44">
														<tbody>
															<tr className="border-2 text-gray-400 ">
																<th>
																	Calories:
																</th>
																<td className="text-right">
																	{data
																		? data[0]
																				?.nutritional
																				?.calories
																		: newOffers[0]
																				?.nutritional
																				.calories}
																	g
																</td>
															</tr>
															<tr className="border-2 text-gray-400">
																<th>
																	Total Fat:
																</th>
																<td className="text-right">
																	{data &&
																	newOffers.length <
																		!0
																		? data[0]
																				?.nutritional
																				.fat
																		: newOffers[0]
																				?.nutritional
																				.fat}
																	g
																</td>
															</tr>

															<tr className="border-2 text-gray-400">
																<th>
																	Saturated
																	Fat:
																</th>
																<td className="text-right">
																	{data &&
																	newOffers.length <
																		!0
																		? data[0]
																				?.nutritional
																				.saturated_fat
																		: newOffers[0]
																				?.nutritional
																				.saturated_fat}
																	g
																</td>
															</tr>
															<tr className="border-2 text-gray-400">
																<th>
																	Trans Fat:{" "}
																</th>
																<td className="text-right">
																	{data &&
																	newOffers.length <
																		!0
																		? data[0]
																				?.nutritional
																				.trans_fat
																		: newOffers[0]
																				?.nutritional
																				.trans_fat}
																	g
																</td>
															</tr>
															<tr className="border-2 text-gray-400">
																<th>
																	Cholesterol:
																</th>
																<td className="text-right">
																	{data &&
																	newOffers.length <
																		!0
																		? data[0]
																				?.nutritional
																				.cholesterol
																		: newOffers[0]
																				?.nutritional
																				.cholesterol}
																	mg
																</td>
															</tr>
															<tr className="border-2 text-gray-400">
																<th>Sodium:</th>
																<td className="text-right">
																	{data &&
																	newOffers.length <
																		!0
																		? data[0]
																				?.nutritional
																				.sodium
																		: newOffers[0]
																				?.nutritional
																				.sodium}
																	mg
																</td>
															</tr>
															<tr className="border-2 text-gray-400">
																<th>
																	Carbohydrate:
																</th>
																<td className="text-right">
																	{data &&
																	newOffers.length <
																		!0
																		? data[0]
																				?.nutritional
																				.carbohydrate
																		: newOffers[0]
																				?.nutritional
																				.carbohydrate}
																	g
																</td>
															</tr>
															<tr className="border-l-2 text-gray-400 border-r-2">
																<th>
																	Dietary
																	Fiber:
																</th>
																<td className="text-right">
																	{data &&
																	newOffers.length <
																		!0
																		? data[0]
																				?.nutritional
																				.dietary_fiber
																		: newOffers[0]
																				?.nutritional
																				.dietary_fiber}
																	g
																</td>
															</tr>
															<tr className="border-2 text-gray-400">
																<th>Sugars:</th>
																<td className="text-right">
																	{data &&
																	newOffers.length <
																		!0
																		? data[0]
																				?.nutritional
																				.sugar
																		: newOffers[0]
																				?.nutritional
																				.sugar}
																	g
																</td>
															</tr>
															<tr className="border-2 text-gray-400">
																<th>
																	Protein:
																</th>
																<td className="text-right">
																	{data &&
																	newOffers.length <
																		!0
																		? data[0]
																				?.nutritional
																				.protein
																		: newOffers[0]
																				?.nutritional
																				.protein}
																</td>
															</tr>
														</tbody>
													</table>
												</details>
											) : null} */}
								</div>
							</div>
						);
					})}
				</section>
			) : (
				data && (
					<section>
						<div className="text-white ml-10 mr-10  before:">
							<div className="lg:grid lg:auto-cols-auto lg:pt-10 ">
								<div className="lg:block lg:grid-cols-1 ">
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
								<div className="hidden lg:block lg:col-start-2 col-end-3 mt-24 w-[530px] relative ">
									<InViewSectionDown>
										<Link
											href={{
												pathname: "/special/[slug]",
												query: { slug: post.slug },
											}}
										>
											<Image
												src={
													data &&
													newOffers.length < !0
														? data[0]?.image
														: newOffers[0]?.image
												}
												alt={
													data &&
													newOffers.length < !0
														? data[0]?.name
														: newOffers[0]?.name
												}
												fill
												className="rounded-xl aspect-[3/4.5] object-cover  "
											/>
										</Link>
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
