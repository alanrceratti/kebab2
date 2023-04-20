"use client";
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
								<h1 className="text-6xl font-aclonica ">
									{offer.name}
								</h1>
								<p className="mt-4 ">{offer.long_description}</p>
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
													{offer.total_fat}g
												</td>
											</tr>

											<tr className="border-2 text-gray-400">
												<th>Saturated Fat:</th>
												<td className="text-right">
													{offer.saturated_fat}g
												</td>
											</tr>
											<tr className="border-2 text-gray-400">
												<th>Trans Fat: </th>
												<td className="text-right">
													{offer.trans_fat}g
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
													{offer.sodium}
												</td>
											</tr>
											<tr className="border-2 text-gray-400">
												<th>Protein:</th>
												<td className="text-right">
													{protein}g
												</td>
											</tr>
										</tbody>
									</table>
								</details>
							</div>
							<div className="pt-4 col-start-1 col-end-3 row-start-5 row-end-6 sm:w-8/12 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 mt-8">
								<h1 className="text-2xl font-inter font-bold mt-10">
									How much?
								</h1>
								<p className="mt-4">{short_description}</p>
								<p className="text-4xl font-bold mt-8">
									{price}{" "}
									<span className="text-gray-400">
										/ each
									</span>
								</p>
								<div className="mt-10">
									<Link href="/menu">
										<a className="bg-green text-white px-8 py-3 rounded-full font-semibold inline-block ">
											Order Now
										</a>
									</Link>
									<div className="float-right mt-8">
										<button onClick={handleChoice}>
											<Image
												src={Plus}
												alt="Add to cart icon"
												width="25px"
												height="25px"
											/>
										</button>
									</div>
								</div>
							</div>
							<div className="col-start-3 col-end-4 row-start-1 row-end-6">
								<div className="relative h-96 w-96">
									<Image
										src={image}
										alt={imageAlt}
										layout="fill"
										objectFit="contain"
										quality={100}
									/>
								</div>
							</div>
						</div>
					</div>
				</main>
			))}
		</section>
	);
}
