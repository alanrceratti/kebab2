"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [menuMobile, setMenuMobile] = useState(true);
	const router = usePathname();

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	const handleOpenMenuMobile = () => {
		setMenuMobile(!menuMobile);
	};

	return (
		<>
			<header
				className={`p-12 fixed w-full ml-auto z-10 transition all duration-500 ease-in-out ${
					isScrolled
						? " transition all bg-black py-6 border-b border-green duration-1000"
						: ""
				}`}
			>
				<nav className="font-extrabold">
					<div className="flex justify-between items-center">
						<Link href={"/"}>
							<h1 className="text-white text-3xl  font-inter ">
								Greek{" "}
								<span className="text-green ml-[-10px]">
									Bites
								</span>
							</h1>
						</Link>

						<div className="text-white  hidden sm:flex items-center gap-6">
							<Link
								className={
									router == "/"
										? "text-green border-b-2 border-green mb-1 "
										: "hover:text-green transition all ease-in-out duration-500"
								}
								href={"/"}
							>
								Home
							</Link>
							<Link
								className={
									router == "/about"
										? "text-green border-b-2 border-green mb-1 "
										: "hover:text-green transi all ease-in-out duration-500"
								}
								href={"/about"}
							>
								About
							</Link>
							<Link
								className={
									router == "/special"
										? "text-green border-b-2 border-green mb-1 "
										: "hover:text-green transi all ease-in-out duration-500"
								}
								href={"/special"}
							>
								Our Special
							</Link>
							<Link
								className={
									router == "/menu"
										? "text-green border-b-2 border-green mb-1 "
										: "hover:text-green transi all ease-in-out duration-500"
								}
								href={"/menu"}
							>
								Menu
							</Link>

							<Link
								className={
									router == "/location"
										? "text-green border-b-2 border-green mb-1 "
										: "hover:text-green transi all ease-in-out duration-500"
								}
								href={"/location"}
							>
								Location
							</Link>
							<Link
								className={
									router == "/contact"
										? "text-green border-b-2 border-green mb-1 "
										: "hover:text-green transi all ease-in-out duration-500"
								}
								href={"/contact"}
							>
								Contact
							</Link>
						</div>
					</div>
				</nav>

				<nav
					onClick={handleOpenMenuMobile}
					className="block sm:hidden "
				>
					{!menuMobile ? (
						<AiOutlineClose
							className="z-20 absolute right-12 top-12"
							color="white"
							size={25}
						/>
					) : (
						<AiOutlineMenu
							className="z-20 absolute right-12 top-12"
							color="white"
							size={25}
						/>
					)}

					<div
						className={
							!menuMobile
								? "fixed  h-screen right-0 top-0 w-[75%]   border-l border-l-green/20 ease-in-out transition-all  duration-700"
								: "fixed  h-screen top-0 right-[-75%]  border-l border-l-green/20 ease-in-out transition-all duration-700"
						}
					>
						<ul className=" bg-black/95 w-full h-full relative flex gap-4 flex-col uppercase text-xl text-white justify-center items-center">
							<Link
								className={
									router == "/"
										? "text-green border-b-2 border-green mb-1 "
										: "hover:text-green transition all ease-in-out duration-500"
								}
								href={"/"}
							>
								Home
							</Link>
							<Link
								className={
									router == "/about"
										? "text-green border-b-2 border-green mb-1 "
										: "hover:text-green transi all ease-in-out duration-500"
								}
								href={"/about"}
							>
								About
							</Link>
							<Link
								className={
									router == "/special"
										? "text-green border-b-2 border-green mb-1 "
										: "hover:text-green transi all ease-in-out duration-500"
								}
								href={"/special"}
							>
								Our Special
							</Link>
							<Link
								className={
									router == "/menu"
										? "text-green border-b-2 border-green mb-1 "
										: "hover:text-green transi all ease-in-out duration-500"
								}
								href={"/menu"}
							>
								Menu
							</Link>
							<Link
								className={
									router == "/location"
										? "text-green border-b-2 border-green mb-1 "
										: "hover:text-green transi all ease-in-out duration-500"
								}
								href={"/location"}
							>
								Location
							</Link>
							<Link
								className={
									router == "/contact"
										? "text-green border-b-2 border-green mb-1 "
										: "hover:text-green transi all ease-in-out duration-500"
								}
								href={"/contact"}
							>
								Contact
							</Link>
						</ul>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Header;
