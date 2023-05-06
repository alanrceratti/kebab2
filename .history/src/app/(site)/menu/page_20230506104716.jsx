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
				<section>
					<h1>Souvlakis/Wraps</h1>
					
				</section>
			</div>
		</div>
	);
};

export default Menu;
