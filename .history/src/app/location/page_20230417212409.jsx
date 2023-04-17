"use client";
import React from "react";
import Image from "next/image";

const Location = () => {
	return (
		<section className="text-white ">
			<div>
				<div className="px-12 pt-[213px]">
					<h1 className="text-7xl font-aclonica">
						Where to find <span className="text-green">us</span>?
					</h1>
				</div>
				<div className="font-inter w-6/12 m-10">
					<p className="before:block before:bg-green before:w-[5px] before:h-[25px] before:relative before:left-[-10px] before:top-6 mb-5">
						Visit us at our brick-and-mortar location to experience
						the vibrant flavors of Greece in a warm and welcoming
						atmosphere.
					</p>
					<p>
						Our restaurant is located in the heart of downtown,
						where you can enjoy traditional Greek dishes made with
						fresh, locally sourced ingredients.
					</p>
				</div>
			</div>
			<div className="grid grid-cols-2">
				<div className="grid-">
					<h2>
						Our<span className="text-green">Address</span>:
					</h2>
					<h3>
						Greek Bites,123 Main Street Manchester, M1 1AB United
						Kingdom
					</h3>
				</div>

				<Image
					src="/location/map.png"
					alt="map"
					width={500}
					height={500}
				/>
				<div>
					<h3>
						Opening <span className="text-green">hours</span>:
					</h3>
					<p>
						Monday - Thursday: 11:00am - 9:00pm Friday - Saturday:
						11:00am - 10:00pm Sunday: Closed
					</p>
				</div>
			</div>
		</section>
	);
};

export default Location;
