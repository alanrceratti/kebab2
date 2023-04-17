"use client";
import React from "react";

const Location = () => {
	return (
		<section className="text-white flex ">
			<div>
				<div className="px-12 pt-[213px]">
					<h1 className="text-7xl font-aclonica">
						Where to find <span className="text-green">us</span>?
					</h1>
				</div>
				<div>
					<p>
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
			<div>
				<div>
					<h2>
						Our<span>Address:</span>
					</h2>
					<h3>
						Greek Bites,123 Main Street Manchester, M1 1AB United
						Kingdom
					</h3>
				</div>
				<Image src="/location/map.png" alt="map" width />
			</div>
		</section>
	);
};

export default Location;
