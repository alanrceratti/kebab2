'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	return (
		<header
			className={`p-6 fixed w-full ml-auto  z-50 transition duration-300 ease-in-out ${
				isScrolled ? 'bg-black' : ''
			}`}
		>
			<nav className="">
				<div className="flex justify-between items-center">
					<Link href={'/'}>
						<h1 className="text-white text-3xl  font-inter font-extrabold">
							Greek <span className="text-green ml-[-10px]">Bites</span>
						</h1>
					</Link>

					<div className="text-white flex items-center gap-6">
						<Link
							className="hover:border-b border-green mb-1 hover:text-green duration-200	 "
							href={'/'}
						>
							Home
						</Link>
						<Link
							className="hover:border-b border-green mb-1 hover:text-green duration-200	  "
							href={'/about'}
						>
							About
						</Link>
						<Link
							className="hover:border-b border-green mb-1 hover:text-green  duration-200 "
							href={'/special'}
						>
							Our Special
						</Link>
						<Link
							className="hover:border-b border-green mb-1 hover:text-green duration-200	"
							href={'/menu'}
						>
							Menu
						</Link>
						<Link
							className="hover:border-b border-green mb-1 hover:text-green duration-200 "
							href={'/location'}
						>
							Our Location
						</Link>
					</div>
				</div>
			</nav>{' '}
		</header>
	);
};

export default Header;
