"use client";
import React from "react";
import useMedia from "@/hooks/useMedia";

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
						className={`flex justify-between ${
							!mobile ? "mx-40" : "mx-0"
						} mt-16 font-inter font-extrabold `}
					>
						<li>
							<a href="#1" className="cursor-pointer m-4">
								Souvlakis/Wraps
							</a>
						</li>
						<li>
							<a href="#2" className="cursor-pointer  ">
								Box Meals
							</a>
						</li>
						<li>
							<a href="#3" className="cursor-pointer m-4">
								Extras/Sides
							</a>
						</li>
						<li>
							<a href="#4" className="cursor-pointer m-4">
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
					<section
						id="1"
						className={`${
							!media
								? "grid grid-cols-[1fr_minmax(1px,_2px)_1fr] auto-rows-auto gap-4 mb-16 "
								: "grid grid-cols-1 mt-8 "
						}`}
					>
						<h1 className="font-aclonica text-4xl row-start-1 row-end-2 sm:col-start-1 sm:col-end-4 text-center mb-4 pt-10 md:text-6xl">
							Souvlakis/Wraps
						</h1>
						<div className="  w-full row-start-2 row-end-3 col-start-1 col-end-2 ">
							<div className="flex justify-between font-inter text-base">
								<h2>Chicken Souvlaki</h2>
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
							<div className="flex justify-between font-inter text-base">
								<h2>Lamb Souvlaki</h2>
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
							<div className="flex justify-between font-inter text-base">
								<h2>Pork Sausage Souvlaki</h2>
								<p>
									Small - £5.90 / Medium - £7.90 / Giant -
									£10.00
								</p>
							</div>
							<hr class="h-px my-0 bg-gray-200 border-0 dark:bg-white" />
							<h3 className="font-inter font-base text-[14px] text-slate-300">
								Chargrilled pork sausage with gruyere cheese,
								tomatoes, onions, lettuce, homemade tzatziki
								sauce and chunky chips in handmade corn pita
								bread.
							</h3>
						</div>

						<div
							className={`${
								media ? "mt-8" : ""
							} w-full row-start-5 row-end-6 col-start-1 col-end-2`}
						>
							<div className="flex justify-between font-inter text-base">
								<h2>Vegan Falafel Souvlaki</h2>
								<p>Small - £5.90 / Medium - £7.90</p>
							</div>
							<hr class="h-px my-0 bg-gray-200 border-0 dark:bg-white" />
							<h3 className="font-inter font-base text-[14px] text-slate-300">
								Falafels, chargrilled courgettes, aubergines,
								red peppers with tomatoes, onions, lettuce,
								homemade tzatziki sauce and chunky chips in
								handmade corn pita bread.
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
							<div className="flex justify-between font-inter text-base">
								<h2>Vegetarian Halloumi Souvlaki</h2>
								<p>Small - £5.90 / Medium - £7.90</p>
							</div>
							<hr class="h-px my-0 bg-gray-200 border-0 dark:bg-white" />
							<h3 className="font-inter font-base text-[14px] text-slate-300">
								Chargrilled courgettes, aubergines, red peppers
								plus halloumi fries with tomatoes, onions,
								lettuce, homemade tzatziki sauce and chunky
								chips in handmade corn pita bread.
							</h3>
						</div>

						<div
							className={`${
								media ? "mt-8" : ""
							} w-full row-start-3 row-end-4 col-start-3 col-end-4`}
						>
							<div className="flex justify-between font-inter text-base">
								<h2>Medium Mixed Souvlaki</h2>
								<p>£7.90</p>
							</div>
							<hr class="h-px my-0 bg-gray-200 border-0 dark:bg-white" />
							<h3 className="font-inter font-base text-[14px] text-slate-300">
								(Chicken & Lamb / Lamb & Sausage / Chicken &
								Sausage) Mixed meat skewer, tomatoes, onions,
								lettuce, homemade tzatziki sauce and chunky
								chips in handmade corn pita bread.
							</h3>
						</div>

						<div
							className={`${
								media ? "mt-8" : ""
							} w-full row-start-4 row-end-5 col-start-3 col-end-4`}
						>
							<div className="flex justify-between font-inter text-base">
								<h2>Giant Mixed Souvlaki</h2>
								<p>£10.00</p>
							</div>
							<hr class="h-px my-0 bg-gray-200 border-0 dark:bg-white" />
							<h3 className="font-inter font-base text-[14px] text-slate-300">
								(Chicken & Lamb & Sausage) Mixed meat skewer,
								tomatoes, onions, lettuce, homemade tzatziki
								sauce and chunky chips in handmade corn pita
								bread.
							</h3>
						</div>
						<div
							className={`${
								media ? "mt-8" : ""
							} w-full row-start-5 row-end-6 col-start-3 col-end-4`}
						>
							<div className="flex justify-between font-inter text-base">
								<h2>Mixed Vegetarian</h2>
								<p>£7.90</p>
							</div>
							<hr class="h-px my-0 bg-gray-200 border-0 dark:bg-white" />
							<h3 className="font-inter font-base text-[14px] text-slate-300">
								(Chicken & Lamb & Sausage) Mixed meat skewer,
								tomatoes, onions, lettuce, homemade tzatziki
								sauce and chunky chips in handmade corn pita
								bread.
							</h3>
						</div>
					</section>

					<section
						id="2"
						className={`${
							!media
								? "grid grid-cols-[1fr_minmax(1px,_2px)_1fr] auto-rows-auto gap-4 mb-16 "
								: "block mt-16  "
						}`}
					>
						<h1 className="font-aclonica text-6xl row-start-1 row-end-2 col-start-1 col-end-4 text-center ">
							Box Meals
						</h1>
						<div
							className={`${
								media ? "mt-8" : ""
							} w-full row-start-2 row-end-3 col-start-1 col-end-2`}
						>
							<div className="flex justify-between font-inter text-base">
								<h2>The Cypriot</h2>
								<p>£7.50</p>
							</div>
							<hr class="h-px my-0 bg-gray-200 border-0 dark:bg-white" />
							<h3 className="font-inter font-base text-[14px] text-slate-300">
								Authentic Cypriot sheftalias with tomatoes,
								onions, lettuce, homemade tzatziki sauce in corn
								pita bread and large chips on the side.
							</h3>
						</div>

						<div
							className={`${
								media ? "mt-8" : ""
							} w-full row-start-3 row-end-4 col-start-1 col-end-2`}
						>
							<div className="flex justify-between font-inter text-base ">
								<h2>The Pitta Burger</h2>
								<p>£7.00</p>
							</div>
							<hr class="h-px my-0 bg-gray-200 border-0 dark:bg-white" />
							<h3 className="font-inter font-base text-[14px] text-slate-300">
								100% beef patty in corn pitta bread with
								tomatoes, onions, lettuce, homemade tzatziki
								sauce in corn pita bread and large chips on the
								side.
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
								<div className="flex">
									<h2>The Greek Box &nbsp; </h2>
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
								chargrilled courgettes, aubergines, red peppers
								plus halloumi fries with tomatoes, onions,
								lettuce, homemade tzatziki sauce in corn pita
								bread and large chips on the side.
							</h3>
						</div>
					</section>

					<section
						id="3"
						className={`${
							!media
								? "grid grid-cols-[1fr_minmax(1px,_2px)_1fr] auto-rows-auto gap-4 mb-16 "
								: "block mt-16  "
						}`}
					>
						<h1 className="font-aclonica text-6xl row-start-1 row-end-2 col-start-1 col-end-4 text-center ">
							Extras/Sides
						</h1>
						<div
							className={`${
								media ? "mt-8" : ""
							} w-full row-start-2 row-end-3 col-start-1 col-end-2`}
						>
							<div className="flex justify-between font-inter text-base ">
								<h2>Halloumi Fries</h2>
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
								<h2>Chips Large</h2>
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
								<h2>
									Meast Skewers on a stick
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
								<h2>Tzatziki dip</h2>
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
								<h2>
									Other dips
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
					<section
						id="4"
						className={`${
							!media
								? "grid grid-cols-[1fr_minmax(1px,_2px)_1fr] auto-rows-auto gap-4 mb-16 "
								: "block mt-16  "
						} pb-12`}
					>
						<h1 className="font-aclonica text-6xl row-start-1 row-end-2 col-start-1 col-end-4 text-center ">
							Drinks
						</h1>
						<div
							className={`${
								media ? "mt-8" : ""
							} w-full row-start-2 row-end-3 col-start-1 col-end-2`}
						>
							<div className="flex justify-between font-inter text-base ">
								<h2>Coca Cola</h2>
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
								<h2>Diet Coke</h2>
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
								<h2>Tango Orange</h2>
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
								<h2>Water</h2>
								<p>£1.50</p>
							</div>
							<hr class="h-px my-0 bg-gray-200 border-0 dark:bg-white" />
						</div>
					</section>
				</main>
			</div>
		</div>
	);
};

export default Menu;
