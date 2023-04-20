import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Plus from "/public/our-special/plus.svg";
import { getOffers } from "../../../../sanity/sanity-utils";

export default function OurSpecial() {
	const [selectedOffer, setSelectedOffer] = useState(null);
	const [offers, setOffers] = useState([]);

	async function fetchOffers() {
		const fetchedOffers = await getOffers();
		setOffers(fetchedOffers);
	}

	function handleClick(offer) {
		setSelectedOffer(offer);
	}

	return (
		<section>
			{offers.map((offer) => (
				<main key={offer._id} className="text-white ml-10 mr-10">
					<div className="lg:grid lg:auto-cols-auto lg:pt-10">
						<div className=" grid grid-cols-1 auto-rows-auto grid-flow-row gap-2 lg:auto-cols-auto  lg:w-full">
							<div className=" pt-32 col-start-1 col-end-3 row-start-1 row-end-2 mb-8 sm:w-8/12 ">
								<h1 className="text-6xl font-aclonica ">{offer.name}</h1>
								<p className="mt-4 ">{offer.longDescription}</p>
							</div>
							<div className=" col-start-1 col-end-3 row-start-3 row-end-4 sm:w-8/12  mt-8 lg:col-end-2 lg:row-start-2 lg:row-end-3 ">
								<h1 className="text-2xl font-inter font-bold mt-10 ">
									What&apos;s
									<span className="text-green">inside</span>?
								</h1>
								<p className="mt-4 ">{offer.ingredients}</p>
							</div>
							<div className="flex col-start-1 col-end-3 row-start-4 row-end-5 text-gray-500 text-sm font-inter mt-4">
								<details>
									<summary>Nutritional Information</summary>

									<table className="ml-1 w-44">
										<tbody>
											<tr className="border-2 text-gray-400 ">
												<th>Calories:</th>
												<td className="text-right">
													{offer.calories}g
												</td>
											</tr>
											<tr className="border-2 text-gray-400">
												<th>Total Fat:</th>
												<td className="text-right">
													{offer.totalFat}g
												</td>
											</tr>

											<tr className="border-2 text-gray-400">
												<th>Saturated Fat:</th>
												<td className="text-right">
													{offer.saturatedFat}g
												</td>
											</tr>
											<tr className="border-2 text-gray-400">
												<th>Trans Fat: </th>
												<td className="text-right">
													{offer.transFat}g
												</td>
											</tr>
											<tr className="border-2 text-gray-400">
												<th>Cholesterol: </th>
												<td className="text-right">
													{offer.cholesterol}mg
												</td>
											</tr>
											<tr className="border-2 text-gray-400">
												<th>Sodium: </th>
												<td className="text-right">
													{offer.s
