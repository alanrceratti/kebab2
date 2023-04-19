"use client";
import React from "react";

const OurSpecial = () => {
	return (
		<section>
			<main>
				<div>
					<div>
						<h1>
							GY<span>ROS</span>
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
					<div>
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
					<div>
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
				</div>
				<div>
					<img src="/about/gyros.png" alt="gyros" />
					<div>
						<p>£7.99</p>
						<p>*Illustrative image</p>
					</div>
				</div>
				<di>
					<div>
						<img src="/about/gyros.png" alt="gyros" />
						<h2>Gyros</h2>
						<p>
							Greek gyros served in a warm pita with fresh veggies
							and tangy tzatziki sauce.
						</p>
					</div>
				</di>
			</main>
		</section>
	);
};

export default OurSpecial;
