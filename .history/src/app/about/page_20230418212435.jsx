"use client";

import {
	InViewSectionDown,
	InViewSectionLeft,
	InViewSectionRight,
} from "@/components/InViewSection";
import React from "react";

const About = () => {
	return (
		<div className="text-white flex h-full pb-10 2xl:justify-center ">
			<div className="lg:flex lg:flex-col  ">
				<InViewSectionLeft>
					<div className="px-12 pt-[213px]">
						<h1 className="text-7xl font-aclonica">
							About<span className="text-green">Us</span>
						</h1>
					</div>

					<div className="mt-16 flex flex-col gap-4 px-12 max-w-2xl text-base">
						<p className="before:block before:bg-green before:w-[5px] before:h-[25px] before:relative before:left-[-10px] before:top-6 ">
							Greek Bites brings the authentic flavors of Greece
							to our community.
						</p>

						<p className=" ">
							Our founder, Maria, grew up in a small village in
							Greece and learned to cook from her grandmother and
							mother. She opened our food truck to share homemade
							Greek cuisine with the masses, and we've since
							expanded to a brick-and-mortar location.{" "}
						</p>

						<p className=" ">
							We still use fresh, simple ingredients to create
							juicy gyros, tender souvlaki, and crisp Greek
							salads, all made from scratch using traditional
							recipes and techniques. Come taste the love we put
							into every bite at Greek Bites.
						</p>
					</div>
				</InViewSectionLeft>

				<InViewSectionDown>
					<div className="px-12 mt-14 flex gap-14 ">
						<img
							className="max-w-[373px] max-h-[373px] rounded-md"
							src="/about/family.png"
							alt=""
						/>
						<div className="flex flex-col items-center gap-9">
							<img
								className="w-72 h-72 mt-[-35px] rounded-md"
								src="/about/sauce.png"
								alt=""
							/>

							<img
								className="max-w-[145px] max-h-[159px]"
								src="/about/dot.svg"
								alt=""
							/>
						</div>
					</div>
				</InViewSectionDown>
			</div>

			<InViewSectionRight>
				<div className="pt-[213px] flex justify-center items-center w-full mx-auto">
					<img
						className="max-w-[600px] max-h-[596px] rounded-md"
						src="/about/restaurant1.png"
						alt="restaurant1"
					/>
				</div>
			</InViewSectionRight>
		</div>
	);
};

export default About;
