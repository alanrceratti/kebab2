"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Plus from "../public/our-special/plus.svg";

const OurSpecial = () => {
	return (
		<section>
			<main className="text-white ml-10 mr-10">
				<div className="lg:grid lg:auto-cols-auto lg:pt-10">
					<div className=" grid grid-cols-1 auto-rows-auto grid-flow-row gap-2 lg:flex lg:flex-wrap lg:w-11/12">
						<div className=" pt-32 col-start-1 col-end-3 row-start-1 row-end-2 mb-8 sm:w-8/12 ">
							<h1 className="text-6xl font-aclonica ">
								GY<span className="text-green">ROS</span>
							</h1>
							<p className="mt-4 ">
								Gyros is a popular Greek dish that typically
								consists of seasoned meat (traditionally pork or
								chicken, but sometimes beef or lamb) cooked on a
								vertical rotisserie and then sliced thin. The
								meat is often served in a pita bread with
								tomatoes, onions, and tzatziki sauce.
							</p>
						</div>
						<div className=" col-start-1 col-end-3 row-start-3 row-end-4 sm:w-8/12  mt-8 lg:col-end-2 lg:row-start-2 lg:row-end-3 ">
							<h1 className="text-2xl font-inter font-bold ">
								What&apos;s
								<span className="text-green">inside</span>?
							</h1>
							<p className="mt-4 ">
								Meat (pork or chicken),Salt, Pepper, Garlic
								powder, Onion powder, Oregano, Thyme, Olive oil
								(for marinade), Pita bread, Tomatoes, Onions,
								Tzatziki sauce (yogurt, cucumber, garlic, dill,
								lemon juice, salt)
							</p>
						</div>
						<div className="flex col-start-1 col-end-3 row-start-4 row-end-5 text-gray-500 text-lg font-inter mt-4">
							<details>
								<summary>Nutritional Information</summary>

								<table className="ml-1 w-44">
									<tbody>
										<tr className="border-2 text-gray-400 ">
											<th>Calories:</th>
											<td className="text-right">
												500kcal
											</td>
										</tr>
										<tr className="border-2 text-gray-400">
											<th>Total Fat:</th>
											<td className="text-right"> 22g</td>
										</tr>

										<tr className="border-2 text-gray-400">
											<th>Saturated Fat:</th>
											<td className="text-right">6g</td>
										</tr>
										<tr className="border-2 text-gray-400">
											<th>Trans Fat: </th>
											<td className="text-right">0g</td>
										</tr>
										<tr className="border-2 text-gray-400">
											<th>Cholesterol: </th>
											<td className="text-right">70mg</td>
										</tr>
										<tr className="border-2 text-gray-400">
											<th>Sodium: </th>
											<td className="text-right">
												1180mg
											</td>
										</tr>
										<tr className="border-2 text-gray-400">
											<th>Carbohydrate:</th>
											<td className="text-right">47g</td>
										</tr>
										<tr className="border-l-2 text-gray-400 border-r-2">
											<th>Dietary Fiber:</th>
											<td className="text-right">4g</td>
										</tr>
										<tr className="border-2 text-gray-400">
											<th>Sugars:</th>
											<td className="text-right">6g</td>
										</tr>
										<tr className="border-2 text-gray-400">
											<th>Protein:</th>
											<td className="text-right">29g</td>
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

								<div
									className="col-start-1 col-end-2 row-start-2 row-end-3 relative w-[320px] 
sm:w-[400px] md:w-[600px] m-auto  "
								>
									<Image
										src="/food/gyros.png"
										alt="gyros"
										width={500}
										height={500}
										className="rounded-xl m-auto "
									/>
									<div>
										<p className="absolute left-4 md:left-16 bottom-12 text-xs text-gray-500">
											*Illustrative image
										</p>
										<p className="font-inter font-extrabold text-lg text-center absolute top-0 left-4 md:left-16 md:ml-16 ">
											Only
											<span className="text-green ">
												£7.99
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
					</div>
					<div className="hidden lg:block lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3 mt-8">
						<Image
							className=" hidden lg:flex lg:max-w-[145px] lg:w-full  max-h-[159px] absolute bottom-0 "
							src="/about/dot.svg"
							alt="dots_svg"
							width={300}
							height={300}
						/>

						<div
							className="col-start-1 col-end-2 row-start-2 row-end-3 relative   m-auto mt-10
                           "
						>
							<Image
								src="/food/gyros.png"
								alt="gyros"
								width={500}
								height={700}
								className="rounded-xl  w-[800px] h-[800px] object-center object-cover "
							/>
							<div>
								<p className="absolute left-2 bottom-24 text-xs text-gray-500">
									*Illustrative image
								</p>
								<p className="font-inter font-extrabold text-lg text-center absolute bottom-36 ml-2 ">
									Only
									<span className="text-green ">£7.99</span>
                                    <Image src={}
								</p>
							</div>
							<div className="text-center mt-2">
								<Link href={"/location"}>
									<button className="h-8 w-32 lg:h-16 lg:w-60 text-base bg-green text-black font-bold transition-all ease-in-out duration-500 hover:bg-black hover:border hover:border-green hover:text-green">
										ORDER NOW
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="lg:col-start-3 lg:col-end-4">
						<div className=" grid auto-cols-1 auto-rows-auto grid-flow-row gap-10  ">
							<div className="pt-32 col-start-1 col-end-3 row-start-1 row-end-2 ">
								<h1 className="text-6xl font-aclonica">
									SOUV<span className="text-green">LAKI</span>
								</h1>
								<p className="mt-4">
									Souvlaki is a Greek dish made of grilled
									skewered meat (usually pork, chicken, or
									lamb) and vegetables, served with pita
									bread, tomatoes, onions, and tzatziki sauce.
								</p>
							</div>
							<div className=" col-start-1 col-end-3 row-start-3 row-end-4">
								<h1 className="text-2xl font-inter font-bold mb-5">
									What&apos;s
									<span className="text-green">inside</span>?
								</h1>
								<p>
									Meat (pork, chicken, or lamb) Olive oil (for
									marinade) Lemon juice Garlic Oregano Salt
									Pepper Skewers Pita bread Tomatoes Onions
									Tzatziki sauce (yogurt, cucumber, garlic,
									dill, lemon juice, salt)
								</p>
							</div>
							<thead>
								<div className="col-start-1 col-end-3 row-start-4 row-end-5 text-gray-500 text-lg font-inter">
									<details className="flex">
										<summary>
											Nutritional Information
										</summary>

										<table className="ml-1 w-44">
											<tr className="border-2 text-gray-400 ">
												<td>Calories:</td>
												<td className="text-right">
													500kcal
												</td>
											</tr>
											<tr className="border-2 text-gray-400">
												<td>Total Fat:</td>
												<td className="text-right">
													15g
												</td>
											</tr>

											<tr className="border-2 text-gray-400">
												<td>Saturated Fat:</td>
												<td className="text-right">
													3g
												</td>
											</tr>
											<tr className="border-2 text-gray-400">
												<td>Trans Fat: </td>
												<td className="text-right">
													0g
												</td>
											</tr>
											<tr className="border-2 text-gray-400">
												<td>Cholesterol: </td>
												<td className="text-right">
													50mg
												</td>
											</tr>
											<tr className="border-2 text-gray-400">
												<td>Sodium: </td>
												<td className="text-right">
													600mg
												</td>
											</tr>
											<tr className="border-2 text-gray-400">
												<td>Carbohydrate:</td>
												<td className="text-right">
													40g
												</td>
											</tr>
											<tr className="border-l-2 text-gray-400 border-r-2">
												<td>Dietary Fiber:</td>
												<td className="text-right">
													4g
												</td>
											</tr>
											<tr className="border-2 text-gray-400">
												<td>Sugars:</td>
												<td className="text-right">
													5g
												</td>
											</tr>
											<tr className="border-2 text-gray-400">
												<td>Protein:</td>
												<td className="text-right">
													32g
												</td>
											</tr>
										</table>
									</details>
								</div>
							</thead>

							<Image
								className=" hidden lg:flex lg:max-w-[145px] lg:w-full  max-h-[159px] "
								src="/about/dot.svg"
								alt="dots_svg"
								width={300}
								height={300}
							/>

							<div className="col-start-1 col-end-3 row-start-2 row-end-3 relative    ">
								<Image
									src="/food/souvlaki.png"
									alt="gyros"
									width={300}
									height={300}
									className="rounded-xl "
								/>
								<div>
									<p className="absolute left-2 bottom-12 text-xs text-gray-500">
										*Illustrative image
									</p>
									<p className="font-inter font-extrabold text-lg text-center absolute top-0 ml-2 ">
										Only{" "}
										<span className="text-green ">
											£6.99
										</span>
									</p>
								</div>
								<div className="text-center mt-2">
									<Link href={"/location"}>
										<button className="h-8 w-32 lg:h-16 lg:w-60 text-base bg-green text-black font-bold transition-all ease-in-out duration-500 hover:bg-black hover:border hover:border-green hover:text-green">
											ORDER NOW
										</button>
									</Link>
								</div>
							</div>
						</div>
						{/* <div className=" grid auto-cols-1 auto-rows-auto grid-flow-row gap-10  ">
						<div className="pt-32 col-start-1 col-end-3 row-start-1 row-end-2 ">
							<h1 className="text-6xl font-aclonica">SSAKA </h1>
							<p className="mt-4">
								Greek moussaka is a traditional dish made of
								layers of eggplant, spiced ground meat (usually
								lamb), and a creamy béchamel sauce. It is baked
								until golden brown and served hot as a hearty
								and flavorful meal.
							</p>
						</div>
						<div className=" col-start-1 col-end-3 row-start-3 row-end-4">
							<h1 className="text-2xl font-inter font-bold mb-5">
								What&apos;s
								<span className="text-green">inside</span>?
							</h1>
							<p>
								Eggplant Ground meat (usually lamb or beef)
								Onion Garlic Tomato sauce or paste Red wine
								(optional) Cinnamon Allspice Olive oil Flour
								Milk Nutmeg Parmesan cheese Salt and pepper to
								taste
							</p>
						</div>
						<thead>
							<div className="col-start-1 col-end-3 row-start-4 row-end-5 text-gray-500 text-lg font-inter">
								<details className="flex">
									<summary>Nutritional Information</summary>

									<table className="ml-1 w-44">
										<tr className="border-2 text-gray-400 ">
											<td>Calories:</td>
											<td className="text-right">
												450kcal
											</td>
										</tr>
										<tr className="border-2 text-gray-400">
											<td>Total Fat:</td>
											<td className="text-right"> 28g</td>
										</tr>

										<tr className="border-2 text-gray-400">
											<td>Saturated Fat:</td>
											<td className="text-right">11g</td>
										</tr>
										<tr className="border-2 text-gray-400">
											<td>Trans Fat: </td>
											<td className="text-right">0g</td>
										</tr>
										<tr className="border-2 text-gray-400">
											<td>Cholesterol: </td>
											<td className="text-right">
												110mg
											</td>
										</tr>
										<tr className="border-2 text-gray-400">
											<td>Sodium: </td>
											<td className="text-right">
												550mg
											</td>
										</tr>
										<tr className="border-2 text-gray-400">
											<td>Carbohydrate:</td>
											<td className="text-right">28g</td>
										</tr>
										<tr className="border-l-2 text-gray-400 border-r-2">
											<td>Dietary Fiber:</td>
											<td className="text-right">4g</td>
										</tr>
										<tr className="border-2 text-gray-400">
											<td>Sugars:</td>
											<td className="text-right">10g</td>
										</tr>
										<tr className="border-2 text-gray-400">
											<td>Protein:</td>
											<td className="text-right">28g</td>
										</tr>
									</table>
								</details>
							</div>
						</thead>

						<Image
							className=" hidden lg:flex lg:max-w-[145px] lg:w-full  max-h-[159px] "
							src="/about/dot.svg"
							alt="dots_svg"
							width={300}
							height={300}
						/>

						<div className="col-start-1 col-end-3 row-start-2 row-end-3 relative ">
							<Image
								src="/food/gyros.png"
								alt="gyros"
								width={300}
								height={300}
								className="rounded-xl"
							/>
							<div>
								<p className="absolute left-2 bottom-12 text-xs text-gray-500">
									*Illustrative image
								</p>
								<p className="font-inter font-extrabold text-lg text-center absolute top-0 ml-2 ">
									Only{" "}
									<span className="text-green ">£7.99</span>
								</p>
							</div>
							<div className="text-center mt-2">
								<Link href={"/location"}>
									<button className="h-8 w-32 lg:h-16 lg:w-60 text-base bg-green text-black font-bold transition-all ease-in-out duration-500 hover:bg-black hover:border hover:border-green hover:text-green">
										ORDER NOW
									</button>
								</Link>
							</div> */}
						{/* </div> */}
						{/* </div> */}
					</div>
				</div>
			</main>
		</section>
	);
};

export default OurSpecial;