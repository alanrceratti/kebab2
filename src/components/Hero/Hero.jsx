'use client';

import React from 'react';

import '@splidejs/splide/css';

import Carousel from '../Carousel/Carousel';
import { Splide } from '@splidejs/react-splide';
const Hero = () => {
	return (
		<div>
			<Splide
				options={{
					type: 'loop',
					direction: 'ttb',
					height: '100%',
					width: '100%',

					rewind: true,
					arrows: false,
					autoplay: true,
					interval: 5000,
					pauseOnHover: true,
					wheel: true,
				}}
			>
				<Carousel
					imageSrc={'/food/kabab.png'}
					imageAlt={
						'Delicious Gyros with seasoned meat, fresh vegetables, and zesty sauce'
					}
					title={'KA'}
					title2={'BAB'}
					description={
						'Greek kabab, also known as souvlaki, is a popular Greek street food made of grilled pieces of meat (usually pork, chicken, or lamb) on a skewer, served in a pita bread with tomatoes, onions, and tzatziki sauce.'
					}
				/>

				<Carousel
					imageSrc={'/food/gyros.png'}
					imageAlt={
						'Delicious Gyros with seasoned meat, fresh vegetables, and zesty sauce'
					}
					title={'GY'}
					title2={'ROS'}
					description={
						'Greek kabab, also known as souvlaki, is a popular Greek street food made of grilled pieces of meat (usually pork, chicken, or lamb) on a skewer, served in a pita bread with tomatoes, onions, and tzatziki sauce.'
					}
				/>

				<Carousel
					imageSrc={'/food/salad.png'}
					imageAlt={
						'Delicious Gyros with seasoned meat, fresh vegetables, and zesty sauce'
					}
					title={'SA'}
					title2={'LAD'}
					description={
						'Greek kabab, also known as souvlaki, is a popular Greek street food made of grilled pieces of meat (usually pork, chicken, or lamb) on a skewer, served in a pita bread with tomatoes, onions, and tzatziki sauce.'
					}
				/>
			</Splide>
		</div>

		// <div className="relative">
		// 	<Splide
		// 		options={{
		// 			type: 'loop',
		// 			direction: 'ttb',
		// 			height: '100vh',
		// 			width: '100vw',
		// 			autoHeight: true,
		// 			autoWidth: true,
		// 			rewind: true,
		// 			arrows: false,
		// 			autoplay: true,
		// 			interval: 5000,
		// 			pauseOnHover: true,
		// 			wheel: true,
		// 		}}
		// 	>
		// 		<SplideSlide>
		// 			<div className="relative h-screen text-white">
		// 				<div>
		// 					<img
		// 						className="w-full h-full"
		// 						src="food/gyros.png"
		// 						alt="Gyros with meat, onion, sauce, and vegetable"
		// 					/>
		// 				</div>

		// 				<div className="absolute top-60 left-6">
		// 					<div>
		// 						<h1 className="font-aclonica text-[121px] text-white">
		// 							GY<span className="text-green">ROS</span>
		// 						</h1>
		// 						<p className="text-xl">
		// 							Lorem ipsum dolor sit amet consectetur adipisicing elit.
		// 							Eligendi, at?
		// 						</p>
		// 					</div>

		// 					<div className="relative top-6 flex gap-4 ">
		// 						<Link href={'/location'}>
		// 							<button className="h-16 w-60 bg-green text-black font-bold transition-all ease-in-out duration-300 hover:bg-transparent hover:border hover:text-white">
		// 								ORDER NOW
		// 							</button>
		// 						</Link>
		// 						<Link href={'/menu'}>
		// 							<button className="h-16 w-60 bg-trasparent text-white border-2 font-bold transition-all ease-in-out duration-300 hover:bg-green hover:border-none hover:text-black">
		// 								VIEW MORE
		// 							</button>
		// 						</Link>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</SplideSlide>

		// 		<SplideSlide>
		// 			<div className="relative text-white">
		// 				<div>
		// 					<img
		// 						className="w-full h-full"
		// 						src="food/kabab.png"
		// 						alt="Gyros with meat, onion, sauce, and vegetable"
		// 					/>
		// 				</div>

		// 				<div className="absolute top-60 left-6">
		// 					<div>
		// 						<h1 className="font-aclonica text-[121px] text-white">
		// 							GY<span className="text-green">ROS</span>
		// 						</h1>
		// 						<p className="text-xl">
		// 							Lorem ipsum dolor sit amet consectetur adipisicing elit.
		// 							Eligendi, at?
		// 						</p>
		// 					</div>

		// 					<div className="relative top-6 flex gap-4 ">
		// 						<Link href={'/location'}>
		// 							<button className="h-16 w-60 bg-green text-black font-bold transition-all ease-in-out duration-300 hover:bg-transparent hover:border hover:text-white">
		// 								ORDER NOW
		// 							</button>
		// 						</Link>
		// 						<Link href={'/menu'}>
		// 							<button className="h-16 w-60 bg-trasparent text-white border-2 font-bold transition-all ease-in-out duration-300 hover:bg-green hover:border-none hover:text-black">
		// 								VIEW MORE
		// 							</button>
		// 						</Link>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</SplideSlide>
		// 	</Splide>
		// </div>
	);
};

export default Hero;
