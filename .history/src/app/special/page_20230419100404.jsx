"use client";
import React from "react";
import Image from "next/image";

const OurSpecial = () => {
	return (
		<section>
			<main className="text-white ml-10 mr-10">
				<div className=" grid grid-rows-6 grid-flow-row gap-10 ">
					<div className="pt-32 row-start-1 row-end-2 ">
						<h1 className="text-6xl font-aclonica">
							GY<span className="text-green">ROS</span>
						</h1>
						<p>
							Gyros is a popular Greek dish that typically
							consists of seasoned meat (traditionally pork or
							chicken, but sometimes beef or lamb) cooked on a
							vertical rotisserie and then sliced thin. The meat
							is often served in a pita bread with tomatoes,
							onions, and tzatziki sauce.
						</p>
					</div>
					<div className="row-start-3 row-end-4">
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
					</div>
					<div className="row-start-3 row-end-4">
						<p>
							Calories: 500 Total fat: 22g Saturated fat: 6g Trans
							fat: 0g Cholesterol: 70mg
						</p>
						<p>
							Sodium: 1180mg Total carbohydrate: 47g Dietary
							fiber: 4g Sugars: 6g Protein: 29g
						</p>
						<img
							className=" hidden md:flex md:max-w-[145px] md:w-full  max-h-[159px] "
							src="/about/dot.svg"
							alt="dots_svg"
						/>
					</div>

					<div className="row-start-2 row-end-3">
						<Image
							src="/food/gyros.png"
							alt="gyros"
							width={300}
							height={300}
						/>
						<div>
							<p>£7.99</p>
							<p>*Illustrative image</p>
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
					<div className="row-span-4">
						<img src="/food/souvlaki.png" alt="Souvlaki" />
						<h2>Souvlaki</h2>
						<p>
							Greek grilled souvlaki skewers served with pita,
							veggies, and tzatziki sauce.
						</p>
						<p>£7.99</p>
					</div>
					<div className="row-span-5">
						<img src="/food/salad.png" alt="Salad" />
						<h2>Greek Salad</h2>
						<p>
							Greek grilled souvlaki skewers served with pita,
							veggies, and tzatziki sauce.
						</p>
						<p>£7.99</p>
					</div>
					<div className="row-span-6">
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
