import React from "react";
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import Link from "next/link";
import justeat from "../../../public/justeat.svg";
import deliveroo from "../../../public/deliveroo.svg";
import Image from "next/image";

const Carousel = ({ imageSrc, imageAlt, title, title2, description }) => {
	return (
		<SplideSlide>
			<div className="relative  text-white overflow-hidden">
				<div className="">
					<img
						className="w-screen h-screen object-cover object-center"
						src={imageSrc}
						alt={imageAlt}
					/>
					<div className="absolute inset-0 bg-black opacity-20"></div>
				</div>

				<div className="absolute top-60 left-12">
					<div>
						<h1 className="font-aclonica text-[50px] sm:text-[80px] md:text-[121px] text-white">
							{title}
							<span className="text-green">{title2}</span>
						</h1>
						<p className="text-sm md:text-xl pr-4 w-full max-w-[500px]">
							{description}
						</p>
					</div>

					<div className="relative top-6 flex gap-4 ">
						<Link href={"/location"}>
							<button className="h-12 w-32 sm:h-16 sm:w-60  bg-green text-black font-bold transition-all ease-in-out duration-500 hover:bg-black hover:border hover:border-green hover:text-green">
								ORDER NOW
							</button>
						</Link>

						<Link href={"/menu"}>
							<button className="h-12 w-32 sm:h-16 sm:w-60   bg-trasparent text-white border-2 font-bold transition-all ease-in-out duration-500 hover:bg-black  hover:border-2 hover:border-green hover:text-green">
								VIEW MENU
							</button>
						</Link>
					</div>
				</div>
			</div>
		</SplideSlide>
	);
};

export default Carousel;
