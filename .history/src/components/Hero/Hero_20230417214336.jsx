'use client';

import React from 'react';
import { motion } from 'framer-motion';
import '@splidejs/splide/css';

import Carousel from '../Carousel/Carousel';
import { Splide } from '@splidejs/react-splide';
const Hero = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="object-cover font-bold overflow-hidden className="max-w-screen-xl""
		>
			<Splide
				options={{
					type: 'loop',
					direction: 'ttb',
					height: '100vh',
					width: '100vw',
					rewind: true,
					arrows: false,
					autoplay: true,
					interval: 3000,
					wheel: true,
				}}
			>
				<Carousel
					imageSrc={'/food/kabab1.png'}
					imageAlt={
						'Grilled skewers of marinated meat and vegetables, a traditional Greek and Mediterranean dish'
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
						'A Greek street food consisting of meat cooked on a vertical rotisserie, served in a pita with vegetables and tzatziki sauce'
					}
					title={'GY'}
					title2={'ROS'}
					description={
						'Gyros is a Greek dish made from meat cooked on a vertical rotisserie and served in a warm pita with vegetables and tzatziki sauce. Its a popular street food and menu item at Greek restaurants worldwide.'
					}
				/>

				<Carousel
					imageSrc={'/food/moussaka.png'}
					imageAlt={
						'A baked Greek dish with layers of eggplant, potato, and ground meat, topped with creamy béchamel sauce'
					}
					title={'MOUS'}
					title2={'SAKA'}
					description={
						'Moussaka is a traditional Greek dish that features layers of eggplant, potatoes, and ground beef or lamb, topped with a creamy béchamel sauce and baked to perfection. The meat is seasoned with spices like cinnamon and the dish is a classic example of Greek comfort food, perfect for a family dinner or special occasion'
					}
				/>
			</Splide>
		</motion.div>
	);
};

export default Hero;
