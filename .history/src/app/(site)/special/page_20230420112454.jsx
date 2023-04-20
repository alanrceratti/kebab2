import React from "react";
import Image from "next/image";
import Link from "next/link";
import Plus from "/public/our-special/plus.svg";
import { getOffers } from "../../../../sanity/sanity-utils";
import { useState } from "react";

export default async function OurSpecial() {
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [shortDescription, setShortDescription] = useState("");
	const [longDescription, setLongDescription] = useState("");
	const [ingredients, setIngredients] = useState("");
	const [image, setImage] = useState("");
	const [imageAlt, setImageAlt] = useState("");

	const [calories, setCalories] = useState(0);
	const [totalFat, setTotalFat] = useState(0);
	const [saturatedFat, setSaturatedFat] = useState(0);
	const [transFat, setTransFat] = useState(0);
	const [cholesterol, setCholesterol] = useState(0);
	const [sodium, setSodium] = useState(0);
	const [carbohydrate, setCarbohydrate] = useState(0);
	const [dietaryFiber, setDietaryFiber] = useState(0);
	const [sugars, setSugars] = useState(0);
	const [protein, setProtein] = useState(0);

	function handleChoice() {
		setName(name);
		setPrice(price);
		setShortDescription(shortDescription);
		setLongDescription(longDescription);
		setIngredients(ingredients);
		setImage(image);
		setImageAlt(imageAlt);
		setCalories(calories);
		setTotalFat(totalFat);
		setSaturatedFat(saturatedFat);
		setTransFat(transFat);
		setCholesterol(cholesterol);
		setSodium(sodium);
		setCarbohydrate(carbohydrate);
		setDietaryFiber(dietaryFiber);
		setSugars(sugars);
		setProtein(protein);
	} 

	const offers = await getOffers();
	return (
		<section>
			{/* {offers.map((offer) => { */}
			return (
			<main className="text-white ml-10 mr-10">
				<div className="lg:grid lg:auto-cols-auto lg:pt-10">
					<div className=" grid grid-cols-1 auto-rows-auto grid-flow-row gap-2 lg:auto-cols-auto  lg:w-full">
						<div className=" pt-32 col-start-1 col-end-3 row-start-1 row-end-2 mb-8 sm:w-8/12 ">
							<h1 className="text-6xl font-aclonica ">
								{name}
							</h1>

							<p className="mt-4 ">{longDescription}</p>
						</div>
						<div className=" col-start-1 col-end-3 row-start-3 row-end-4 sm:w-8/12  mt-8 lg:col-end-2 lg:row-start-2 lg:row-end-3 ">
							<h1 className="text-2xl font-inter font-bold mt-10 ">
								What&apos;s
								<span className="text-green">inside</span>?
							</h1>
							<p className="mt-4 ">{ingredients}</p>
						</div>
						<div className="flex col-start-1 col-end-3 row-start-4 row-end-5 text-gray-500 text-sm font-inter mt-4">
							<details>
								<summary>Nutritional Information</summary>

								<table className="ml-1 w-44">
									<tbody>
										<tr className="border-2 text-gray-400 ">
											<th>Calories:</th>
											<td className="text-right">
												{calories}g
											</td>
										</tr>
										<tr className="border-2 text-gray-400">
											<th>Total Fat:</th>
											<td className="text-right">
												{fat}g
											</td>
										</tr>

										<tr className="border-2 text-gray-400">
											<th>Saturated Fat:</th>
											<td className="text-right">
												{
													nutritional
														.saturated_fat
												}
												g
											</td>
										</tr>
										<tr className="border-2 text-gray-400">
											<th>Trans Fat: </th>
											<td className="text-right">
												{nutritional.trans_fat}g
											</td>
										</tr>
										<tr className="border-2 text-gray-400">
											<th>Cholesterol: </th>
											<td className="text-right">
												{nutritional.cholesterol}
												mg
											</td>
										</tr>
										<tr className="border-2 text-gray-400">
											<th>Sodium: </th>
											<td className="text-right">
												{nutritional.sodium}
												mg
											</td>
										</tr>
										<tr className="border-2 text-gray-400">
											<th>Carbohydrate:</th>
											<td className="text-right">
												{nutritional.carbohydrate}
												g
											</td>
										</tr>
										<tr className="border-l-2 text-gray-400 border-r-2">
											<th>Dietary Fiber:</th>
											<td className="text-right">
												{
													nutritional
														.dietary_fiber
												}
												g
											</td>
										</tr>
										<tr className="border-2 text-gray-400">
											<th>Sugars:</th>
											<td className="text-right">
												{nutritional.sugar}g
											</td>
										</tr>
										<tr className="border-2 text-gray-400">
											<th>Protein:</th>
											<td className="text-right">
												{nutritional.protein}g
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
										src={image}
										alt={image.alt}
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
												£ {price}
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
						<div className="hidden lg:flex pt-32 col-start-2 col-end-3 row-start-1 row-end-5 sm:w-8/12 ">
							{offers.map((offer) => {
								<Image
									src={image}
									alt={image.alt}
									width={600}
									height={700}
									className="rounded-xl    "
								/>;
							})}
						</div>
						<div className="hidden lg:flex pt-32 col-start-3 col-end-4 row-start-1 row-end-5 sm:w-8/12 ">
							<div className="w-full bg-white overflow-scroll ">
								<Image
									src={image}
									alt={image.alt}
									width={300}
									height={200}
									className="rounded-xl    "
								/>
							</div>
						</div>
					</div>
				</div>
			</main>
			);
			{/* // })} */}
		</section>
	);
}
