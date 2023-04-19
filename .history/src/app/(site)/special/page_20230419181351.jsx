"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Plus from "/public/our-special/plus.svg";
import { getProjects } from "../../../../sanity/sanity-utils";

async function OurSpecial() {
	const projects = await getProjects();
	return (
		<section>
				<main className="text-white ml-10 mr-10">
			{projects.map((project) => {
					<div
						className="lg:grid lg:auto-cols-auto lg:pt-10"
						key={project._id}
					>
						<div className=" grid grid-cols-1 auto-rows-auto grid-flow-row gap-2 lg:flex lg:flex-wrap lg:w-11/12">
							<div className=" pt-32 col-start-1 col-end-3 row-start-1 row-end-2 mb-8 sm:w-8/12 ">
								<h1 className="text-6xl font-aclonica ">
									{project.name}
									{/* GY<span className="text-green">ROS</span> */}
								</h1>
								<p className="mt-4 ">
									Gyros is a popular Greek dish that typically
									consists of seasoned meat (traditionally
									pork or chicken, but sometimes beef or lamb)
									cooked on a vertical rotisserie and then
									sliced thin. The meat is often served in a
									pita bread with tomatoes, onions, and
									tzatziki sauce.
								</p>
							</div>
							<div className=" col-start-1 col-end-3 row-start-3 row-end-4 sm:w-8/12  mt-8 lg:col-end-2 lg:row-start-2 lg:row-end-3 ">
								<h1 className="text-2xl font-inter font-bold ">
									What&apos;s
									<span className="text-green">inside</span>?
								</h1>
								<p className="mt-4 ">
									Meat (pork or chicken),Salt, Pepper, Garlic
									powder, Onion powder, Oregano, Thyme, Olive
									oil (for marinade), Pita bread, Tomatoes,
									Onions, Tzatziki sauce (yogurt, cucumber,
									garlic, dill, lemon juice, salt)
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
												<td className="text-right">
													{" "}
													22g
												</td>
											</tr>

											<tr className="border-2 text-gray-400">
												<th>Saturated Fat:</th>
												<td className="text-right">
													6g
												</td>
											</tr>
											<tr className="border-2 text-gray-400">
												<th>Trans Fat: </th>
												<td className="text-right">
													0g
												</td>
											</tr>
											<tr className="border-2 text-gray-400">
												<th>Cholesterol: </th>
												<td className="text-right">
													70mg
												</td>
											</tr>
											<tr className="border-2 text-gray-400">
												<th>Sodium: </th>
												<td className="text-right">
													1180mg
												</td>
											</tr>
											<tr className="border-2 text-gray-400">
												<th>Carbohydrate:</th>
												<td className="text-right">
													47g
												</td>
											</tr>
											<tr className="border-l-2 text-gray-400 border-r-2">
												<th>Dietary Fiber:</th>
												<td className="text-right">
													4g
												</td>
											</tr>
											<tr className="border-2 text-gray-400">
												<th>Sugars:</th>
												<td className="text-right">
													6g
												</td>
											</tr>
											<tr className="border-2 text-gray-400">
												<th>Protein:</th>
												<td className="text-right">
													29g
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
									className="rounded-xl  min-w-[450px] w-[600px] h-[800px] object-center object-cover "
								/>
								<div>
									<p className="absolute left-2 bottom-24 text-xs text-gray-500">
										*Illustrative image
									</p>
									<p className="font-inter font-extrabold text-lg text-center absolute bottom-36 ml-2 ">
										Only
										<span className="text-green ">
											£7.99
										</span>
										<Link href={"/location"}>
											<Image
												src={Plus}
												alt=""
												className=""
											/>
										</Link>
									</p>
								</div>
								<div className="text-center mt-2"></div>
							</div>
						</div>
						<div className=" grid grid-cols-1 auto-rows-auto grid-flow-row gap-2 lg:flex lg:flex-wrap lg:w-11/12">
							<div className=" pt-32 col-start-3 col-end-4 row-start-1 row-end-2 mb-8 sm:w-8/12 ">
								<h1 className="text-6xl font-aclonica ">
									GY<span className="text-green">ROS</span>
								</h1>
								<p className="mt-4 ">
									Gyros is a popular Greek dish that typically
									consists of seasoned meat (traditionally
									pork or chicken, but sometimes beef or lamb)
									cooked on a vertical rotisserie and then
									sliced thin. The meat is often served in a
									pita bread with tomatoes, onions, and
									tzatziki sauce.
								</p>
							</div>
							<div className=" col-start-1 col-end-3 row-start-3 row-end-4 sm:w-8/12  mt-8 lg:col-end-2 lg:row-start-2 lg:row-end-3 ">
								<h1 className="text-2xl font-inter font-bold ">
									What&apos;s
									<span className="text-green">inside</span>?
								</h1>
								<p className="mt-4 ">
									Meat (pork or chicken),Salt, Pepper, Garlic
									powder, Onion powder, Oregano, Thyme, Olive
									oil (for marinade), Pita bread, Tomatoes,
									Onions, Tzatziki sauce (yogurt, cucumber,
									garlic, dill, lemon juice, salt)
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
												<td className="text-right">
													{" "}
													22g
												</td>
											</tr>

											<tr className="border-2 text-gray-400">
												<th>Saturated Fat:</th>
												<td className="text-right">
													6g
												</td>
											</tr>
											<tr className="border-2 text-gray-400">
												<th>Trans Fat: </th>
												<td className="text-right">
													0g
												</td>
											</tr>
											<tr className="border-2 text-gray-400">
												<th>Cholesterol: </th>
												<td className="text-right">
													70mg
												</td>
											</tr>
											<tr className="border-2 text-gray-400">
												<th>Sodium: </th>
												<td className="text-right">
													1180mg
												</td>
											</tr>
											<tr className="border-2 text-gray-400">
												<th>Carbohydrate:</th>
												<td className="text-right">
													47g
												</td>
											</tr>
											<tr className="border-l-2 text-gray-400 border-r-2">
												<th>Dietary Fiber:</th>
												<td className="text-right">
													4g
												</td>
											</tr>
											<tr className="border-2 text-gray-400">
												<th>Sugars:</th>
												<td className="text-right">
													6g
												</td>
											</tr>
											<tr className="border-2 text-gray-400">
												<th>Protein:</th>
												<td className="text-right">
													29g
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
					</div>
				</main>;
			})}
		</section>
	);
}

export default OurSpecial;
