import React from "react";
import menu from "../../../../public/menu/menu.png";
import Image from "next/image";

const Menu = () => {
	return (
		<div className="text-white flex flex-col lg:flex-row h-full pb-10 desktop:justify-center">
			<Image
				src={menu}
				alt="menu"
				className="absolute -z-10 mt-80 left-0 right-0 ml-auto mr-auto opacity-30"
			/>
			<div className="px-12 pt-[213px]">
				<h1 className=" text-6xl md:text-7xl font-aclonica">
					Our <span className="text-green">Options</span>
				</h1>
				<nav className="w-[1340px]">
					<ul className="flex justify-between mx-40 mt-16 font-inter font-extrabold">
						<li>
							<a className="cursor-pointer">Souvlakis/Wraps</a>
						</li>
						<li>
							<a className="cursor-pointer">Box Meals</a>
						</li>
						<li>
							<a className="cursor-pointer">Extras/Sides</a>
						</li>
						<li>
							<a className="cursor-pointer">Drinks</a>
						</li>
					</ul>
				</nav>
				<main>
					<section className="grid grid-cols-2 auto-rows-auto m-16">
						<h1 className="font-aclonica text-6xl row-start-1 row-end-2 col-start-1 col-end-3 text-center">
							Souvlakis/Wraps
						</h1>
						<div className="flex justify-between w-1/2 row-start-2 row-end-3 col-start-1 col-end-2">
							<div>
								<h2>Chicken Souvlaki</h2>
								<p>
									Small - £5.90 / Medium - £7.90 / Giant -
									£10.00
								</p>
							</div>

							<h3>
								Chargrilled chicken thigh skewer, tomatoes,
								onions, lettuce, homemade tzatziki sauce and
								chunky chips in handmade corn pita bread.
							</h3>
						</div>
					</section>
					{/* <section>
						<h1>Souvlakis/Wraps</h1>

						<div className="flex justify-between w-1/2">
							<h2>Chicken Souvlaki</h2>
							<p>
								Small - £5.90 / Medium - £7.90 / Giant - £10.00
							</p>
						</div>
						<h3>
							Chargrilled chicken thigh skewer, tomatoes, onions,
							lettuce, homemade tzatziki sauce and chunky chips in
							handmade corn pita bread.
						</h3>
					</section> */}
				</main>
			</div>
		</div>
	);
};

export default Menu;
