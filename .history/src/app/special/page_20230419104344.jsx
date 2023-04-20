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
						<details>
							<summary>Nutritional Information</summary>
							<dl>
								<dt>
									<dd>Calories: 500kcal </dd>
									<dd>Total Fat: 22g</dd>
									<dd> 6g</dd>
									<dd>Trans Fat: 0g</dd>
									<dd>Cholesterol: 70mg</dd>
								</dt>
								<dl>
									<dl>Sodium: 1180mg</dl>
									<dl>Total Carbohydrate: 47g</dl>
									<dl>Dietary Fiber: 4g</dl>
									<dl>Sugars: 6g</dl>
									<dl>Protein: 29g</dl>
								</dl>
							</dl>
							<table className="mr-1 border-4 ">
								<tr>
									<th>Calories:</th>
									<td>500kcal</td>

									<th>Total Fat:</th>
									<td> 22g</td>
								</tr>

								<tr>
									<th>Saturated Fat:</th>
									<td>6g</td>
								</tr>
								<tr></tr>
							</table>
						</details>

						<img
							className=" hidden md:flex md:max-w-[145px] md:w-full  max-h-[159px] "
							src="/about/dot.svg"
							alt="dots_svg"
						/>
					</div>

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
							<p className="font-inter font-extrabold text-lg ">
								Only <span className="text-green ">£7.99</span>
							</p>
						</div>
					</div>

					{/* <div>
						<h1>
							What&apos;s <span>inside</span>?
						</h1>
						<p>
							Meat (pork or chicken),Salt, Pepper, Garlic powder,
							Onion powder, Oregano, Thyme, Olive oil (for
							marinade), Pita bread, Tomatoes, Onions, Tzatziki
							sauce (yogurt, cucumber, garlic, dill, lemon juice,
							salt)
						</p>
					</div> */}

					<div className="hidden">
						<img src="/food/gyros.png" alt="gyros" />
						<h2>Gyros</h2>
						<p>
							Greek gyros served in a warm pita with fresh veggies
							and tangy tzatziki sauce.
						</p>
						<p>£7.99</p>
					</div>
					<div className="col-start-1 col-end-3 row-start-5 row-end-6 ">
						<img src="/food/souvlaki.png" alt="Souvlaki" />
						<h2>Souvlaki</h2>
						<p>
							Greek grilled souvlaki skewers served with pita,
							veggies, and tzatziki sauce.
						</p>
						<p>£7.99</p>
					</div>
					<div className="col-start-1 col-end-3 row-start-6 row-end-7">
						<img src="/food/salad.png" alt="Salad" />
						<h2>Greek Salad</h2>
						<p>
							Greek grilled souvlaki skewers served with pita,
							veggies, and tzatziki sauce.
						</p>
						<p>£7.99</p>
					</div>
					<div className="col-start-1 col-end-3 row-start-7 row-end-8">
						<img src="/food/burger.png" alt="Burger" />
						<h2>Burger</h2>
						<p>
							Greek grilled souvlaki skewers served with pita,
							veggies, and tzatziki sauce.
						</p>
						<p>£7.99</p>
					</div>
				</div>
			</main>
		</section>
	);
};

export default OurSpecial;
