"use client";
import React from "react";
import useMedia from "@/hooks/useMedia";
import {
	InViewSectionLeft,
	InViewSectionRight,
} from "@/components/InViewSection";

const Menu = () => {
	const media = useMedia("(max-width: 1340px)");
	const mobile = useMedia("(max-width: 760px)");

	return (
		<div className="text-white block h-full pb-10 justify-center ">
			<h1 className=" text-6xl md:text-7xl pt-[213px] font-aclonica ml-12">
				Our <span className="text-green">Options</span>
			</h1>
			<div
				className={`${
					!media
						? "max-w-[1340px] w-full ml-auto mr-auto"
						: "max-w-[1000px] w-full ml-auto mr-auto"
				}  `}
			>
				<nav>
					<ul
						className={`flex flex-wrap sm:justify-between justify-center ${
							!mobile ? "mx-40" : "mx-4"
						} mt-16 font-inter font-extrabold `}
					>
						<li>
							<a
								href="#1"
								className="cursor-pointer m-6 hover:text-green"
							>
								Souvlakis/Wraps
							</a>
						</li>
						<li>
							<a href="#2" className="cursor-pointer m-6 ">
								Box Meals
							</a>
						</li>
						<li>
							<a href="#3" className="cursor-pointer m-6">
								Extras/Sides
							</a>
						</li>
						<li>
							<a href="#4" className="cursor-pointer m-6">
								Drinks
							</a>
						</li>
					</ul>
				</nav>
			</div>

			<div
				className={`${
					!media
						? "max-w-[1340px] w-full ml-auto mr-auto"
						: "max-w-[1000px] w-full ml-auto mr-auto"
				} bg-[url('/menu/menu.png')] bg-cover bg-no-repeat `}
			>
				<main className="block m-4 md:m-16">
					<InViewSectionLeft>
						<section
							id="1"
							className={`${
								!media
									? "grid grid-cols-[1fr_minmax(1px,_2px)_1fr] auto-rows-auto gap-4 mb-16 "
									: "block mt-8 "
							}`}
						>
							<h1 className="font-aclonica text-4xl row-start-1 row-end-2 sm:col-start-1 col-end-4 text-center mb-4 pt-10 md:text-6xl ">
								Souvlakis/Wraps
							</h1>
							<div className="  w-full row-start-2 row-end-3 col-start-1 col-end-2 ">
								<div className="block sm:flex  justify-between font-inter ">
									<h2 className="font-bold font-inter text-lg">
										Chicken Souvlaki
									</h2>
									<p>
										Small - £5.90 / Medium - £7.90 / Giant -
										£10.00
									</p>
								</div>
								<hr class="h-px my-0 bg-gray-200 border-0 w-auto dark:bg-white" />
								<h3 className="font-inter font-base text-[14px] text-slate-300">
									Chargrilled chicken thigh skewer, tomatoes,
									onions, lettuce, homemade tzatziki sauce and
									chunky chips in handmade corn pita bread.
								</h3>
							</div>

							<div
								className={`${
									media ? "mt-8" : ""
								} w-full row-start-3 row-end-4 col-start-1 col-end-2`}
							>
								<div className="block sm:flex justify-between font-inter text-base">
									<h2 className="font-bold font-inter text-lg">
										Lamb Souvlaki
									</h2>
									<p>
										Small - £5.90 / Medium - £7.90 / Giant -
										£10.00
									</p>
								</div>
								<hr class="h-px my-0 bg-gray-200 border-0 dark:bg-white" />
								<h3 className="font-inter font-base text-[14px] text-slate-300">
									Chargrilled lamb skewer, tomatoes, onions,
									lettuce, homemade tzatziki sauce and chunky
									chips in handmade corn pita bread.
								</h3>
							</div>

							<div
								className={`${
									media ? "mt-8" : ""
								} w-full row-start-4 row-end-5 col-start-1 col-end-2`}
							>
								<div className="block sm:flex justify-between font-inter text-base">
									<h2 className="font-bold font-inter text-lg">
										Pork Sausage Souvlaki
									</h2>
									<p>
										Small - £5.90 / Medium - £7.90 / Giant -
										£10.00
									</p>
								</div>
								<hr class="h-px my-0 bg-gray-200 border-0 dark:bg-white" />
								<h3 className="font-inter font-base text-[14px] text-slate-300">
									Chargrilled pork sausage with gruyere
									cheese, tomatoes, onions, lettuce, homemade
									tzatziki sauce and chunky chips in handmade
									corn pita bread.
								</h3>
							</div>

							<div
								className={`${
									media ? "mt-8" : ""
								} w-full row-start-5 row-end-6 col-start-1 col-end-2`}
							>
								<div className="block sm:flex justify-between font-inter text-base">
									<h2 className="font-bold font-inter text-lg">
										Vegan Falafel Souvlaki
									</h2>
									<p>Small - £5.90 / Medium - £7.90</p>
								</div>
								<hr class="h-px my-0 bg-gray-200 border-0 dark:bg-white" />
								<h3 className="font-inter font-base text-[14px] text-slate-300">
									Falafels, chargrilled courgettes,
									aubergines, red peppers with tomatoes,
									onions, lettuce, homemade tzatziki sauce and
									chunky chips in handmade corn pita bread.
								</h3>
							</div>
							{!media ? (
								<span className="border-l-2 h-full w-auto border-green  col-start-2 col-end-3 row-start-2 row-end-6  "></span>
							) : null}
							<div
								className={`${
									media ? "mt-8" : ""
								} w-full row-start-2 row-end-3 col-start-3 col-end-4`}
							>
								<div className="block sm:flex justify-between font-inter text-base">
									<h2 className="font-bold font-inter text-lg">
										Vegetarian Halloumi Souvlaki
									</h2>
									<p>Small - £5.90 / Medium - £7.90</p>
								</div>
								<hr class="h-px my-0 bg-gray-200 border-0 dark:bg-white" />
								<h3 className="font-inter font-base text-[14px] text-slate-300">
									Chargrilled courgettes, aubergines, red
									peppers plus halloumi fries with tomatoes,
									onions, lettuce, homemade tzatziki sauce and
									chunky chips in handmade corn pita bread.
								</h3>
							</div>

							<div
								className={`${
									media ? "mt-8" : ""
								} w-full row-start-3 row-end-4 col-start-3 col-end-4`}
							>
								<div className="flex justify-between font-inter text-base">
									<h2 className="font-bold font-inter text-lg">
										Medium Mixed Souvlaki
									</h2>
									<p>£7.90</p>
								</div>
								<hr class="h-px my-0 bg-gray-200 border-0 dark:bg-white" />
								<h3 className="font-inter font-base text-[14px] text-slate-300">
									(Chicken & Lamb / Lamb & Sausage / Chicken &
									Sausage) Mixed meat skewer, tomatoes,
									onions, lettuce, homemade tzatziki sauce and
									chunky chips in handmade corn pita bread.
								</h3>
							</div>

							<div
								className={`${
									media ? "mt-8" : ""
								} w-full row-start-4 row-end-5 col-start-3 col-end-4`}
							>
								<div className="flex justify-between font-inter text-base">
									<h2 className="font-bold font-inter text-lg">
										Giant Mixed Souvlaki
									</h2>
									<p>£10.00</p>
								</div>
								<hr class="h-px my-0 bg-gray-200 border-0 dark:bg-white" />
								<h3 className="font-inter font-base text-[14px] text-slate-300">
									(Chicken & Lamb & Sausage) Mixed meat
									skewer, tomatoes, onions, lettuce, homemade
									tzatziki sauce and chunky chips in handmade
									corn pita bread.
								</h3>
							</div>
							<div
								className={`${
									media ? "mt-8" : ""
								} w-full row-start-5 row-end-6 col-start-3 col-end-4`}
							>
								<div className="flex justify-between font-inter text-base">
									<h2 className="font-bold font-inter text-lg">
										Mixed Vegetarian
									</h2>
									<p>£7.90</p>
								</div>
								<hr class="h-px my-0 bg-gray-200 border-0 dark:bg-white" />
								<h3 className="font-inter font-base text-[14px] text-slate-300">
									(Chicken & Lamb & Sausage) Mixed meat
									skewer, tomatoes, onions, lettuce, homemade
									tzatziki sauce and chunky chips in handmade
									corn pita bread.
								</h3>
							</div>
						</section>
					</InViewSectionLeft>
					<InViewSectionRight>
						<section
							id="2"
							className={`${
								!media
									? "grid grid-cols-[1fr_minmax(1px,_2px)_1fr] auto-rows-auto gap-4 mb-16 "
									: "block mt-16  "
							}`}
						>
							<h1 className="font-aclonica text-4xl md:text-6xl row-start-1 row-end-2 col-start-1 col-end-4 text-center ">
								Box Meals
							</h1>
							<div
								className={`${
									media ? "mt-8" : ""
								} w-full row-start-2 row-end-3 col-start-1 col-end-2`}
							>
								<div className="flex justify-between font-inter text-base">
									<h2 className="font-bold font-inter text-lg">
										The Cypriot
									</h2>
									<p>£7.50</p>
								</div>
								<hr class="h-px my-0 bg-gray-200 border-0 dark:bg-white" />
								<h3 className="font-inter font-base text-[14px] text-slate-300">
									Authentic Cypriot sheftalias with tomatoes,
									onions, lettuce, homemade tzatziki sauce in
									corn pita bread and large chips on the side.
								</h3>
							</div>

							<div
								className={`${
									media ? "mt-8" : ""
								} w-full row-start-3 row-end-4 col-start-1 col-end-2`}
							>
								<div className="flex justify-between font-inter text-base ">
									<h2 className="font-bold font-inter text-lg">
										The Pitta Burger
									</h2>
									<p>£7.00</p>
								</div>
								<hr class="h-px my-0 bg-gray-200 border-0 dark:bg-white" />
								<h3 className="font-inter font-base text-[14px] text-slate-300">
									100% beef patty in corn pitta bread with
									tomatoes, onions, lettuce, homemade tzatziki
									sauce in corn pita bread and large chips on
									the side.
								</h3>
							</div>
							{!media ? (
								<span className="border-l-2 h-full w-auto border-green m-auto  col-start-2 col-end-3 row-start-2 row-end-4  "></span>
							) : null}
							<div
								className={`${
									media ? "mt-8" : ""
								} w-full row-start-2 row-end-3 col-start-3 col-end-4`}
							>
								<div className="flex justify-between font-inter text-base ">
									<div className="block sm:flex">
										<h2 className="font-bold font-inter text-lg">
											The Greek Box &nbsp;
										</h2>
										<h3 className="text-sm mt-1 text-slate-300 ">
											(Chicken & Lamb / Lamb & Sausage /
											Chicken & Sausage)
										</h3>
									</div>
									<p>£9.90</p>
								</div>
								<hr class="h-px my-0 bg-gray-200 border-0 dark:bg-white" />
								<h3 className="font-inter font-base text-[14px] text-slate-300">
									Two chargrilled skewers of your choice,
									chargrilled courgettes, aubergines, red
									peppers plus halloumi fries with tomatoes,
									onions, lettuce, homemade tzatziki sauce in
									corn pita bread and large chips on the side.
								</h3>
							</div>
						</section>
					</InViewSectionRight>
					<InViewSectionLeft>
						<section
							id="3"
							className={`${
								!media
									? "grid grid-cols-[1fr_minmax(1px,_2px)_1fr] auto-rows-auto gap-4 mb-16 "
									: "block mt-16  "
							}`}
						>
							<h1 className="font-aclonica text-4xl md:text-6xl row-start-1 row-end-2 col-start-1 col-end-4 text-center ">
								Extras/Sides
							</h1>
							<div
								className={`${
									media ? "mt-8" : ""
								} w-full row-start-2 row-end-3 col-start-1 col-end-2`}
							>
								<div className="flex justify-between font-inter text-base ">
									<h2 className="font-bold font-inter text-lg">
										Halloumi Fries
									</h2>
									<p>£5.00</p>
								</div>
								<hr class="h-px my-0 bg-gray-200 border-0 w-auto dark:bg-white" />
							</div>

							<div
								className={`${
									media ? "mt-4" : ""
								} w-full row-start-3 row-end-4 col-start-1 col-end-2`}
							>
								<div className="flex justify-between font-inter text-base">
									<h2 className="font-bold font-inter text-lg">
										Chips Large
									</h2>
									<p>£3.50</p>
								</div>
								<hr class="h-px my-0 bg-gray-200 border-0 dark:bg-white" />
							</div>

							<div
								className={`${
									media ? "mt-4" : ""
								} w-full row-start-4 row-end-5 col-start-1 col-end-2`}
							>
								<div className="flex justify-between font-inter text-base">
									<h2 className="font-bold font-inter text-lg">
										Meat Skewers on a stick&nbsp;
										<span className="font-inter font-base text-[14px] text-slate-300">
											(Chicken / Lamb / Pork Sausage)
										</span>
									</h2>

									<p>£3.00</p>
								</div>
								<hr class="h-px my-0 bg-gray-200 border-0 dark:bg-white" />
							</div>

							<span class="block border-l-2 border-green my-0 mx-auto col-start-2 col-end-3 row-start-2 row-end-6 "></span>

							<div
								className={`${
									media ? "mt-4" : ""
								} w-full row-start-2 row-end-3 col-start-3 col-end-4`}
							>
								<div className="flex justify-between font-inter text-base">
									<h2 className="font-bold font-inter text-lg">
										Tzatziki dip
									</h2>
									<p>£2.00</p>
								</div>
								<hr class="h-px my-0 bg-gray-200 border-0 dark:bg-white" />
							</div>
							<div
								className={`${
									media ? "mt-4" : ""
								} w-full row-start-3 row-end-4 col-start-3 col-end-4`}
							>
								<div className="flex justify-between font-inter text-base">
									<h2 className="font-bold font-inter text-lg">
										Other dips&nbsp;
										<span className="font-inter font-base text-[14px] text-slate-300">
											(ketchup, mayo, sweet chilly, hot
											chilly)
										</span>
									</h2>
									<p>£0.50</p>
								</div>
								<hr class="h-px my-0 bg-gray-200 border-0 dark:bg-white" />
							</div>
						</section>
					</InViewSectionLeft>
					<InViewSectionRight>
						<section
							id="4"
							className={`${
								!media
									? "grid grid-cols-[1fr_minmax(1px,_2px)_1fr] auto-rows-auto gap-4 mb-16 "
									: "block mt-16  "
							} pb-12`}
						>
							<h1 className="font-aclonica text-4xl md:text-6xl row-start-1 row-end-2 col-start-1 col-end-4 text-center ">
								Drinks
							</h1>
							<div
								className={`${
									media ? "mt-8" : ""
								} w-full row-start-2 row-end-3 col-start-1 col-end-2`}
							>
								<div className="flex justify-between font-inter text-base ">
									<h2 className="font-bold font-inter text-lg">
										Coca Cola
									</h2>
									<p>£1.50</p>
								</div>
								<hr class="h-px my-0 bg-gray-200 border-0 w-auto dark:bg-white" />
							</div>

							<div
								className={`${
									media ? "mt-4" : ""
								} w-full row-start-3 row-end-4 col-start-1 col-end-2`}
							>
								<div className="flex justify-between font-inter text-base ">
									<h2 className="font-bold font-inter text-lg">
										Diet Coke
									</h2>
									<p>£1.50</p>
								</div>
								<hr class="h-px my-0 bg-gray-200 border-0 dark:bg-white " />
							</div>
							<span class="block border-l-2 border-green my-0 mx-auto col-start-2 col-end-3 row-start-2 row-end-6 "></span>

							<div className="pb-10"></div>
							<div
								className={`${
									media ? "mt-4" : ""
								} w-full row-start-2 row-end-3 col-start-3 col-end-4`}
							>
								<div className="flex justify-between font-inter text-base">
									<h2 className="font-bold font-inter text-lg">
										Tango Orange
									</h2>
									<p>£1.50</p>
								</div>
								<hr class="h-px my-0 bg-gray-200 border-0 dark:bg-white" />
							</div>
							<div
								className={`${
									media ? "mt-4" : ""
								} w-full row-start-3 row-end-4 col-start-3 col-end-4`}
							>
								<div className="flex justify-between font-inter text-base">
									<h2 className="font-bold font-inter text-lg">
										Water
									</h2>
									<p>£1.50</p>
								</div>
								<hr class="h-px my-0 bg-gray-200 border-0 dark:bg-white" />
							</div>
						</section>
					</InViewSectionRight>
				</main>
			</div>
		</div>
	);
};

export default Menu;
