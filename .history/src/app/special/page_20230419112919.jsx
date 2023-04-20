"use client";
import React from "react";
import Image from "next/image";

const OurSpecial = () => {
	return (
		<section>
			<main className="text-white ml-10 mr-10">
				<div className=" grid auto-cols-1 auto-rows-auto grid-flow-row gap-10  ">
					<div className="pt-32 col-start-1 col-end-3 row-start-1 row-end-2 ">
						<h1 className="text-6xl font-aclonica">
							GY<span className="text-green">ROS</span>
						</h1>
						<p className="mt-4">
							Gyros is a popular Greek dish that typically
							consists of seasoned meat (traditionally pork or
							chicken, but sometimes beef or lamb) cooked on a
							vertical rotisserie and then sliced thin. The meat
							is often served in a pita bread with tomatoes,
							onions, and tzatziki sauce.
						</p>
					</div>
					<div className=" col-start-1 col-end-3 row-start-3 row-end-4">
						<h1 className="text-2xl font-inter font-bold mb-5">
							What&apos;s
							<span className="text-green">inside</span>?
						</h1>
						<p>
							Meat (pork or chicken),Salt, Pepper, Garlic powder,
							Onion powder, Oregano, Thyme, Olive oil (for
							marinade), Pita bread, Tomatoes, Onions, Tzatziki
							sauce (yogurt, cucumber, garlic, dill, lemon juice,
							salt)
						</p>
					</div>
					<div className="col-start-1 col-end-3 row-start-4 row-end-5 text-gray-500 text-sm font-inter">
						<details className="flex">
							<summary>Nutritional Information</summary>
							<div>
								<table className="ml-1 w-44">
									<tr className="border-2 text-gray-400 ">
										<td>Calories:</td>
										<td className="text-right">500kcal</td>
									</tr>
									<tr className="border-2 text-gray-400">
										<td>Total Fat:</td>
										<td className="text-right"> 22g</td>
									</tr>

									<tr className="border-2 text-gray-400">
										<td>Saturated Fat:</td>
										<td className="text-right">6g</td>
									</tr>
									<tr className="border-2 text-gray-400">
										<td>Trans Fat: </td>
										<td className="text-right">0g</td>
									</tr>
									<tr className="border-2 text-gray-400">
										<td>Cholesterol: </td>
										<td className="text-right">70mg</td>
									</tr>
									<tr className="border-2 text-gray-400">
										<td>Sodium: </td>
										<td className="text-right">1180mg</td>
									</tr>
									<tr className="border-2 text-gray-400">
										<td>Carbohydrate:</td>
										<td className="text-right">47g</td>
									</tr>
									<tr className="border-l-2 text-gray-400 border-r-2">
										<td>Dietary Fiber:</td>
										<td className="text-right">4g</td>
									</tr>
									<tr className="border-2 text-gray-400">
										<td>Sugars:</td>
										<td className="text-right">6g</td>
									</tr>
									<tr className="border-2 text-gray-400">
										<td>Protein:</td>
										<td className="text-right">29g</td>
									</tr>
								</table>
							</div>
						</details>
					</div>

					<img
						className=" hidden md:flex md:max-w-[145px] md:w-full  max-h-[159px] "
						src="/about/dot.svg"
						alt="dots_svg"
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
							<p className="absolute left-2 bottom-8 text-xs text-gray-500">
								*Illustrative image
							</p>
							<p className="font-inter font-extrabold text-lg text-center absolute top-0 ">
								Only <span className="text-green ">£7.99</span>
							</p>
						</div>
					</div>
				</div>

				<div>
					<div className="pt-24 col-start-1 col-end-3 row-start-5 row-end-6 "></div>
				</div>
			</main>
		</section>
	);
};

export default OurSpecial;
