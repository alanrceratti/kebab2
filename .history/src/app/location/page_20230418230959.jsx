"use client";
import React from "react";
import Image from "next/image";
import { InViewSectionLeft } from "@/components/InViewSection";

const Location = () => {
	return (
		<section className="text-white ">
            <InViewSectionLeft>
                <div>
			<div>
				<div className=" px-12 pt-32 2xl:pt-[213px]">
					<h1 className="text-6xl 2xl:text-7xl font-aclonica">
						Where to find <span className="text-green">us</span>?
					</h1>
				</div>
				<div className="font-inter 2xl:w-5/12 m-10 lg:text-lg md:text-xl ">
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
			<div className="flex flex-col md:grid md:grid-cols-4 md:grid-rows-2 pt-10">
				<div className="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2 ml-10  ">
					<h2 className="text-md md:text-lg font-bold mb-4">
						Our<span className="text-green"> Address</span>:
					</h2>
					<h3 className="text-base md:text-lg w-56 sm:w-2/5 mb-16">
						Greek Bites,<br></br>123 Main Street<br></br>
						Manchester,
						<br></br> M1 1AB<br></br> United Kingdom
					</h3>
				</div>

				<div className="col-start-1 col-end-3 row-start-2 row-end-3 ml-10">
					<h3 className="text-base md:text-lg font-bold mb-4">
						Opening <span className="text-green">hours</span>:
					</h3>
					<p className="text-md md:text-lg w-auto mb-16">
						Monday - Thursday: 11:00am - 9:00pm<br></br>Friday -
						Saturday: 11:00am - 10:00pm<br></br>Sunday: Closed
					</p>
				</div>
                </InViewSectionLeft>
                </div>
				<iframe
					className="sm:hidden rounded-2xl m-auto 2xl: "
					width={350}
					height={350}
					title="map"
					loading="lazy"
					allowFullScreen
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.28129781798!2d-2.5289239229619684!3d53.49917026327752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b03d8820d16c7%3A0xbe6b0660b55e53f4!2sGreek%20Traditional%20Eatery%20Leeds!5e0!3m2!1sen!2suk!4v1681766363112!5m2!1sen!2suk"
				></iframe>
				<iframe
					className="hidden rounded-2xl  2xl: sm:max-lg:block col-start-3 col-end-5 row-start-1 row-end-3  ml-auto mr-auto  "
					width={500}
					height={350}
					title="map"
					loading="lazy"
					allowFullScreen
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.28129781798!2d-2.5289239229619684!3d53.49917026327752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b03d8820d16c7%3A0xbe6b0660b55e53f4!2sGreek%20Traditional%20Eatery%20Leeds!5e0!3m2!1sen!2suk!4v1681766363112!5m2!1sen!2suk"
				></iframe>
				<iframe
					className="hidden rounded-2xl  2xl: lg:block col-start-2 col-end-5 row-start-1 row-end-3  ml-auto mr-auto  "
					width={600}
					height={450}
					title="map"
					loading="lazy"
					allowFullScreen
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.28129781798!2d-2.5289239229619684!3d53.49917026327752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b03d8820d16c7%3A0xbe6b0660b55e53f4!2sGreek%20Traditional%20Eatery%20Leeds!5e0!3m2!1sen!2suk!4v1681766363112!5m2!1sen!2suk"
				></iframe>
			</div>
		</section>
	);
};

export default Location;
