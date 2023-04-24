import React from "react";

const RightMenu = () => {
	return (
		<div className="hidden lg:block lg:col-start-3 col-end-4 mt-24 h-[668px]  overflow-y-scroll">
			{data.map((offer) => {
				return (
					<div
						key={offer._id}
						className="w-80 pb-4 last:pb-0 pt-2  bg-slate-300  "
					>
						<div
							className={`${
								offer._id === selectedOffer
									? " flex flex-row bg-black opacity-80 "
									: " flex flex-row "
							}`}
						>
							<div className="   ">
								<Image
									onClick={handleClick}
									data-id={offer._id}
									key={offer._id}
									src={offer.image}
									alt={offer.name}
									width={150}
									height={200}
									className="rounded-xl aspect-[3/4] cursor-pointer ml-2 hover:opacity-60  "
								/>
							</div>
							<div className="basis-1/2 ml-4">
								<h2
									className={`${
										offer._id === selectedOffer
											? " flex flex-row bg-black opacity-80 text-white font-inter font-black capitalize mb-2 "
											: "  text-black font-inter font-black capitalize mb-2 "
									}`}
								>
									{offer.name}
								</h2>
								<h3
									className={`${
										offer._id === selectedOffer
											? "text-slate-300 text-sm mb-2"
											: " text-gray-500 text-sm mb-2"
									}`}
								>
									{offer.short_description}
								</h3>
								<h4
									className={`${
										offer._id === selectedOffer
											? "text-slate-300 font-light font-inter"
											: "text-black font-normal font-inter"
									}`}
								>
									£ {offer.price}
								</h4>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default RightMenu;
