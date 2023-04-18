"use client";
import React from "react";
import Image from "next/image";

const Location = () => {
	return (
		<section className="text-white ">
			<div>
				<div className=" px-12 pt-32 2xl:pt-[213px]">
					<h1 className="text-6xl 2xl:text-7xl font-aclonica">
						Where to find <span className="text-green">us</span>?
					</h1>
				</div>
				<div className="font-inter w-5/12 m-10 lg:text-lg md:text-xl ">
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
			<div className="flex flex-col 2xl:grid 2xl:grid-cols-4 2xl:grid-rows-2 pt-10">
				<div className="col-start-1 col-end-3 row-start-1 row-end-1 ml-10 ">
					<h2 className="text-2xl font-bold mb-4">
						Our<span className="text-green"> Address</span>:
					</h2>
					<h3 className="text-xl w-2/5">
						Greek Bites,<br></br>123 Main Street<br></br>{" "}
						Manchester,
						<br></br> M1 1AB<br></br> United Kingdom
					</h3>
				</div>

				

				<div className="col-start-1 col-end-3 row-start-2 row-end-3 ml-10">
					<h3 className="text-2xl font-bold mb-4">
						Opening <span className="text-green">hours</span>:
					</h3>
					<p className="text-xl w-auto">
						Monday - Thursday: 11:00am - 9:00pm<br></br>Friday -
						Saturday: 11:00am - 10:00pm<br></br>Sunday: Closed
					</p>
				</div>
			</div>
		</section>
	);
};

export default Location;
