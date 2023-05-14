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

				<div className="absolute sm:top-44 md:top-32 left-6 sm:left-12 top-40">
					<h1 className="font-aclonica text-[50px] sm:text-[80px] md:text-[100px] text-white">
						{title}
						<span className="text-green">{title2}</span>
					</h1>
					<p className="text-sm md:text-xl pr-4 w-full max-w-[320px] sm:max-w-[500px]">
						{description}
					</p>

					<div className="relative top-6 sm:w-[500px] w-[300px] block gap-4 text-center ">
						<Link href={"/menu"}>
							<button className="h-12 w-32 sm:h-12 sm:w-44  bg-green text-black font-bold transition-all ease-in-out duration-500 hover:bg-black hover:border hover:border-green hover:text-green">
								VIEW MENU
							</button>
						</Link>
						<div className="flex gap-8 mt-8 ">
							<a
								href="https://www.just-eat.co.uk/restaurants-greek-traditional-souvlaki-leigh/menu"
								target="_blank"
							>
								<Image
									src={justeat}
									alt="justeat"
									className=" cursor-pointer"
									width={200}
								/>
							</a>

							<a
								href="https://deliveroo.co.uk/menu/wigan/warrington/greek-traditional-souvlaki-warrington?geohash=gcqptku59pd9"
								target="_blank"
							>
								<Image
									src={deliveroo}
									alt="justeat"
									className=" cursor-pointer"
									width={200}
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</SplideSlide>
	);
};

export default Carousel;
