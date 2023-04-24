import React from "react";

const Description = (props) => {
	return (
		<div className=" grid grid-cols-1 auto-rows-auto grid-flow-row gap-2 lg:grid lg:grid-flow-col lg:w-11/12">
			<div className=" pt-28 col-start-1 col-end-3 row-start-1 row-end-2 mb-4 sm:w-8/12 lg:w-auto ">
				<h1 className="text-5xl font-aclonica bg-gradient-to-r from-white from-0% via-white via-10%  to-green to-0% bg-clip-text text-transparent">
					{data && newOffers.length < !0
						? data[0]?.name
						: newOffers[0]?.name}
				</h1>

				<p className="mt-4 ">
					{data && newOffers.length < !0
						? data[0]?.long_description
						: newOffers[0]?.long_description}
				</p>
			</div>
			<div className=" col-start-1 col-end-3 row-start-3 row-end-4 sm:w-8/12  mt-8 lg:col-end-2 lg:row-start-2 lg:row-end-3 lg:w-auto ">
				<h1 className="text-2xl font-inter font-bold mt-0 ">
					What&apos;s&nbsp;
					<span className="text-green">inside</span>?
				</h1>
				<p className="mt-4 ">{props.ingredients}</p>
			</div>
		</div>
	);
};

export default Description;
