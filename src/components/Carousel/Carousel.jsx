import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import Link from 'next/link';
import Image from 'next/image';

const Carousel = ({ imageSrc, imageAlt, title, title2, description }) => {
	return (
		<SplideSlide>
			<div className="relative text-white">
				<div className="object-center">
					<Image
						src={imageSrc}
						alt={imageAlt}
						quality={100}
						width={2400}
						height={1400}
						className="object-center"
					/>
				</div>

				<div className="absolute top-60 left-6">
					<div>
						<h1 className="font-aclonica text-[121px] text-white">
							{title}
							<span className="text-green">{title2}</span>
						</h1>
						<p className="text-xl max-w-[500px]">{description}</p>
					</div>

					<div className="relative top-6 flex gap-4 ">
						<Link href={'/location'}>
							<button className="h-16 w-60 bg-green text-black font-bold transition-all ease-in-out duration-300 hover:bg-transparent hover:border hover:text-white">
								ORDER NOW
							</button>
						</Link>
						<Link href={'/menu'}>
							<button className="h-16 w-60 bg-trasparent text-white border-2 font-bold transition-all ease-in-out duration-300 hover:bg-green hover:border-none hover:text-black">
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
