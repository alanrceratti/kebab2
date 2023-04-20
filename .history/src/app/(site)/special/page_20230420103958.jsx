import React from "react";
import Image from "next/image";
import Link from "next/link";
import Plus from "/public/our-special/plus.svg";
import { getOffers } from "../../../../sanity/sanity-utils";

export default async function OurSpecial() {
	const offers = await getOffers();
	return (
		<section>
			{offers.map((offer) => {
				return (
					<main className="text-white ml-10 mr-10" key={offer._id}>
						<div className="lg:grid lg:auto-cols-auto lg:pt-10">
							<div className=" grid grid-cols-1 auto-rows-auto grid-flow-row gap-2 lg:grid-cols-3  lg:w-11/12">
								<div className=" pt-32 col-start-1 col-end-3 row-start-1 row-end-2 mb-8 sm:w-8/12 ">
									<h1 className="text-6xl font-aclonica ">
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
									<p className="mt-4 ">{offer.ingredients}</p>
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
														{
															offer.nutritional
																.calories
														}
														g
													</td>
												</tr>
												<tr className="border-2 text-gray-400">
													<th>Total Fat:</th>
													<td className="text-right">
														{offer.nutritional.fat}g
													</td>
												</tr>

												<tr className="border-2 text-gray-400">
													<th>Saturated Fat:</th>
													<td className="text-right">
														{
															offer.nutritional
																.saturated_fat
														}
														g
													</td>
												</tr>
												<tr className="border-2 text-gray-400">
													<th>Trans Fat: </th>
													<td className="text-right">
														{
															offer.nutritional
																.trans_fat
														}
														g
													</td>
												</tr>
												<tr className="border-2 text-gray-400">
													<th>Cholesterol: </th>
													<td className="text-right">
														{
															offer.nutritional
																.cholesterol
														}
														mg
													</td>
												</tr>
												<tr className="border-2 text-gray-400">
													<th>Sodium: </th>
													<td className="text-right">
														{
															offer.nutritional
																.sodium
														}
														mg
													</td>
												</tr>
												<tr className="border-2 text-gray-400">
													<th>Carbohydrate:</th>
													<td className="text-right">
														{
															offer.nutritional
																.carbohydrate
														}
														g
													</td>
												</tr>
												<tr className="border-l-2 text-gray-400 border-r-2">
													<th>Dietary Fiber:</th>
													<td className="text-right">
														{
															offer.nutritional
																.dietary_fiber
														}
														g
													</td>
												</tr>
												<tr className="border-2 text-gray-400">
													<th>Sugars:</th>
													<td className="text-right">
														{
															offer.nutritional
																.sugar
														}
														g
													</td>
												</tr>
												<tr className="border-2 text-gray-400">
													<th>Protein:</th>
													<td className="text-right">
														{
															offer.nutritional
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

										<div className="col-start-1 col-end-2 row-start-2 row-end-3 relative w-[320px] h-[320px] sm:w-[400px] md:w-[600px] m-auto  ">
											<Image
												src={offer.image}
												alt={offer.image.alt}
												width={320}
												height={320}
												className="rounded-xl m-auto aspect-square object-cover object-right-top "
											/>
											<div>
												<p className="absolute ml-4 sm:ml-14 md:ml-40  m bottom-4  text-xs text-gray-500">
													*Illustrative image
												</p>
												<p className="font-inter font-extrabold text-lg text-center absolute top-0 ml-4 sm:ml-14 md:ml-40  ">
													Only
													<span className="text-green ">
														£ {offer.price}
													</span>
												</p>
											</div>
											<div className="text-center mt-2 w-full">
												<Link href={"/location"}>
													<button className="h-8 w-32 lg:h-16 lg:w-60 text-base bg-green text-black font-bold transition-all ease-in-out duration-500 hover:bg-black hover:border hover:border-green hover:text-green">
														ORDER NOW
													</button>
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="hidden lg:block pt-32 col-start-2 col-end-3 row-start-1 row-end-5 mb-8 sm:w-8/12 ">
									<Image
										src={offer.image}
										alt={offer.image.alt}
										width={500}
										height={500}
										className="rounded-xl m-auto aspect-square object-cover object-right-top  "
									/>{" "}
								</div>
							</div>
						</div>
					</main>
				);
			})}
		</section>
	);
}
