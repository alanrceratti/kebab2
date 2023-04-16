import React from 'react';
import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import Link from 'next/link';

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
				</div>

				<div className="absolute top-60 left-12">
					<div>
						<h1 className="font-aclonica text-[121px] text-white">
							{title}
							<span className="text-green">{title2}</span>
						</h1>
						<p className="text-xl max-w-[500px]">{description}</p>
					</div>

					<div className="relative top-6 flex gap-4 ">
						<Link href={'/location'}>
							<button className="h-16 w-60 bg-green text-black font-bold transition-all ease-in-out duration-500 hover:bg-black hover:border hover:border-green hover:text-green">
								ORDER NOW
							</button>
						</Link>
						<Link href={'/menu'}>
							<button className="h-16 w-60 bg-trasparent text-white border-2 font-bold transition-all ease-in-out duration-500 hover:bg-black hover:border hover:border-2 hover:border-green hover:text-green">
								VIEW MORE
							</button>
						</Link>
					</div>
				</div>
			</div>
		</SplideSlide>
	);
};

export default Carousel;
