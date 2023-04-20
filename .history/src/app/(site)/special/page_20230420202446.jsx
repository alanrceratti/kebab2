"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Plus from "/public/our-special/plus.svg";
import { getDocument, getOffers } from "../../../../sanity/sanity-utils";
import { useEffect } from "react";
import { useState } from "react";
import useMedia from "@/hooks/useMedia";

function OurSpecial() {
	const [selectedOffer, setSelectedOffer] = useState([]);
	const [newOffers, setNewOffers] = useState([]);
	const [data, setData] = useState([]);
	const mobile = useMedia("(min-width: 1280px)");
	const [newDocument, SetNewDocument] = useState(0);
	const documentId = newDocument;

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
			// console.log(document);
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
								<div className="lg:grid lg:auto-cols-auto lg:pt-10">
									<div className="lg:block lg:grid-cols-1">
										<div className=" grid grid-cols-1 auto-rows-auto grid-flow-row gap-2 lg:grid lg:grid-flow-col lg:w-11/12">
											<div className=" pt-32 col-start-1 col-end-3 row-start-1 row-end-2 mb-8 sm:w-8/12 ">
												<h1 className="text-5xl font-aclonica bg-gradient-to-r from-white from-0% via-white via-35%  to-green to-20% bg-clip-text text-transparent">
													{offer.name}
												</h1>

												<p className="mt-4 ">
													{offer.long_description}
												</p>
											</div>
											<div className=" col-start-1 col-end-3 row-start-3 row-end-4 sm:w-8/12  mt-8 lg:col-end-2 lg:row-start-2 lg:row-end-3 ">
												<h1 className="text-2xl font-inter font-bold mt-10 ">
													What&apos;s
													<span className="text-green">
														inside
													</span>
													?
												</h1>
												<p className="mt-4 ">
													{offer.ingredients}
												</p>
											</div>
											<div className="flex col-start-1 col-end-3 row-start-4 row-end-5 text-gray-500 text-sm font-inter mt-4">
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
																	{
																		offer
																			.nutritional
																			.calories
																	}
																	g
																</td>
															</tr>
															<tr className="border-2 text-gray-400">
																<th>
																	Total Fat:
																</th>
																<td className="text-right">
																	{
																		offer
																			.nutritional
																			.fat
																	}
																	g
																</td>
															</tr>

															<tr className="border-2 text-gray-400">
																<th>
																	Saturated
																	Fat:
																</th>
																<td className="text-right">
																	{
																		offer
																			.nutritional
																			.saturated_fat
																	}
																	g
																</td>
															</tr>
															<tr className="border-2 text-gray-400">
																<th>
																	Trans Fat:{" "}
																</th>
																<td className="text-right">
																	{
																		offer
																			.nutritional
																			.trans_fat
																	}
																	g
																</td>
															</tr>
															<tr className="border-2 text-gray-400">
																<th>
																	Cholesterol:{" "}
																</th>
																<td className="text-right">
																	{
																		offer
																			.nutritional
																			.cholesterol
																	}
																	mg
																</td>
															</tr>
															<tr className="border-2 text-gray-400">
																<th>
																	Sodium:{" "}
																</th>
																<td className="text-right">
																	{
																		offer
																			.nutritional
																			.sodium
																	}
																	mg
																</td>
															</tr>
															<tr className="border-2 text-gray-400">
																<th>
																	Carbohydrate:
																</th>
																<td className="text-right">
																	{
																		offer
																			.nutritional
																			.carbohydrate
																	}
																	g
																</td>
															</tr>
															<tr className="border-l-2 text-gray-400 border-r-2">
																<th>
																	Dietary
																	Fiber:
																</th>
																<td className="text-right">
																	{
																		offer
																			.nutritional
																			.dietary_fiber
																	}
																	g
																</td>
															</tr>
															<tr className="border-2 text-gray-400">
																<th>Sugars:</th>
																<td className="text-right">
																	{
																		offer
																			.nutritional
																			.sugar
																	}
																	g
																</td>
															</tr>
															<tr className="border-2 text-gray-400">
																<th>
																	Protein:
																</th>
																<td className="text-right">
																	{
																		offer
																			.nutritional
																			.protein
																	}
																	g
																</td>
															</tr>
														</tbody>
													</table>
												</details>
											</div>
											<div>
												<div className="lg:hidden">
													<Image
														className="hidden lg:flex lg:max-w-[145px] lg:w-full  max-h-[159px] "
														src="/about/dot.svg"
														alt="dots_svg"
														width={300}
														height={300}
													/>

													<div className="col-start-1 col-end-2 row-start-2 row-end-3 relative w-[280px] h-[280px] m-auto  ">
														<Image
															src={offer.image}
															alt={offer.name}
															width={300}
															height={300}
															className="rounded-xl aspect-square object-cover object-right-top  "
														/>
														<div>
															<p className="absolute ml-4 sm:ml-14 md:ml-40  m bottom-4  text-xs text-gray-500">
																*Illustrative
																image
															</p>
															<p className="font-inter font-extrabold text-lg text-center absolute top-0 ml-4 sm:ml-14 md:ml-40  ">
																Only
																<span className="text-green ">
																	£{" "}
																	{
																		offer.price
																	}
																</span>
															</p>
														</div>
														<div className="text-center mt-2 w-full">
															<Link
																href={
																	"/location"
																}
															>
																<button className="h-8 w-32 lg:h-16 lg:w-60 text-base bg-green text-black font-bold transition-all ease-in-out duration-500 hover:bg-black hover:border hover:border-green hover:text-green">
																	ORDER NOW
																</button>
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="hidden lg:block lg:col-start-2 col-end-3 mt-24">
										<Image
											src={offer.image}
											alt={offer.name}
											width={300}
											height={300}
											className="rounded-xl aspect-square object-cover object-right-top  "
										/>
									</div>
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
									<div className=" grid grid-cols-1 auto-rows-auto grid-flow-row gap-2 lg:grid lg:grid-flow-col lg:w-11/12">
										<div className=" pt-28 col-start-1 col-end-3 row-start-1 row-end-2 mb-4 sm:w-8/12 lg:w-auto ">
											<h1 className="text-5xl font-aclonica bg-gradient-to-r from-white from-0% via-white via-25%  to-green to-0% bg-clip-text text-transparent">
												{data && newOffers.length < !0
													? data[0]?.name
													: newOffers[0]?.name}
											</h1>

											<p className="mt-4 ">
												{data && newOffers.length < !0
													? data[0]?.long_description
													: newOffers[0]
															?.long_description}
											</p>
										</div>
										<div className=" col-start-1 col-end-3 row-start-3 row-end-4 sm:w-8/12  mt-8 lg:col-end-2 lg:row-start-2 lg:row-end-3 lg:w-auto ">
											<h1 className="text-2xl font-inter font-bold mt-0 ">
												What&apos;s&nbsp;
												<span className="text-green">
													inside
												</span>
												?
											</h1>
											<p className="mt-4 ">
												{data && newOffers.length < !0
													? data[0]?.ingredients
													: newOffers[0]?.ingredients}
											</p>
										</div>
										<div className="flex col-start-1 col-end-3 row-start-4 row-end-5 text-gray-500 text-sm font-inter mt-4">
											<details>
												<summary>
													Nutritional Information
												</summary>

												<table className="ml-1 w-44">
													<tbody>
														<tr className="border-2 text-gray-400 ">
															<th>Calories:</th>
															<td className="text-right">
																{data &&
																newOffers.length <
																	!0
																	? data[0]
																			?.nutritional
																			.calories
																	: newOffers[0]
																			?.nutritional
																			.calories}
																g
															</td>
														</tr>
														<tr className="border-2 text-gray-400">
															<th>Total Fat:</th>
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
																Saturated Fat:
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
															<th>Trans Fat: </th>
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
																Dietary Fiber:
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
															<th>Protein:</th>
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
										</div>
									</div>
								</div>
								<div className="hidden lg:block lg:col-start-2 col-end-3 mt-24 w-[530px] h-">
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
										width={600}
										height={500}
										className="rounded-xl aspect-[4/5]    "
									/>
								</div>
								<div className="hidden lg:block lg:col-start-3 col-end-4 mt-24 h-[668px]  overflow-scroll">
									{data.map((offer) => {
										return (
											<div
												key={offer._id}
												className="w-80 bg-white"
											>
												<div className=" bg-gray-200 flex flex-row ">
													<div
														className={`${
															offer._id ===
															selectedOffer
																? "w-56 active current:bg-blue-600 basis-1/3"
																: "w-56 "
														}`}
													>
														<Image
															onClick={
																handleClick
															}
															data-id={offer._id}
															key={offer._id}
															src={offer.image}
															alt={offer.name}
															width={150}
															height={200}
															className="rounded-xl aspect-[3/4] ml-4 cursor-pointer   "
														/>
													</div>
													<div className="basis-1/2">
														<h2 className="text-black font-inter font-black capitalize ">
															{offer.name}
														</h2>
														<h3 className="text-gray-500 text-sm">{offer.short_description}</h3>
													</div>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</section>
				)
			)}
		</>
	);
}

export default OurSpecial;
