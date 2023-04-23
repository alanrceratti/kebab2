import React from "react";

const Description = (props) => {
	return (
		<div className=" grid grid-cols-1 auto-rows-auto grid-flow-row gap-2 lg:grid lg:grid-flow-col lg:w-11/12">
			<div className=" pt-28 col-start-1 col-end-3 row-start-1 row-end-2 mb-4 sm:w-8/12 lg:w-auto ">
				<h1 className="text-5xl font-aclonica bg-gradient-to-r from-white from-0% via-white via-10%  to-green to-0% bg-clip-text text-transparent">
		{props.name}
				</h1>

				<p className="mt-4 ">
					{props.description}
				</p>
			</div>
			<div className=" col-start-1 col-end-3 row-start-3 row-end-4 sm:w-8/12  mt-8 lg:col-end-2 lg:row-start-2 lg:row-end-3 lg:w-auto ">
				<h1 className="text-2xl font-inter font-bold mt-0 ">
					What&apos;s&nbsp;
					<span className="text-green">inside</span>?
				</h1>
				<p className="mt-4 ">
					{data && newOffers.length < !0
						? data[0]?.ingredients
						: newOffers[0]?.ingredients}
				</p>
			</div>
			<div className="flex col-start-1 col-end-3 row-start-4 row-end-5 text-gray-500 text-sm font-inter mt-4">
				{nutriTable ? (
					<details>
						<summary>Nutritional Information</summary>

						<table className="ml-1 w-44">
							<tbody>
								<tr className="border-2 text-gray-400 ">
									<th>Calories:</th>
									<td className="text-right">
										{data && newOffers.length < !0
											? data[0]?.nutritional.calories
											: newOffers[0]?.nutritional
													.calories}
										g
									</td>
								</tr>
								<tr className="border-2 text-gray-400">
									<th>Total Fat:</th>
									<td className="text-right">
										{data && newOffers.length < !0
											? data[0]?.nutritional.fat
											: newOffers[0]?.nutritional.fat}
										g
									</td>
								</tr>

								<tr className="border-2 text-gray-400">
									<th>Saturated Fat:</th>
									<td className="text-right">
										{data && newOffers.length < !0
											? data[0]?.nutritional.saturated_fat
											: newOffers[0]?.nutritional
													.saturated_fat}
										g
									</td>
								</tr>
								<tr className="border-2 text-gray-400">
									<th>Trans Fat: </th>
									<td className="text-right">
										{data && newOffers.length < !0
											? data[0]?.nutritional.trans_fat
											: newOffers[0]?.nutritional
													.trans_fat}
										g
									</td>
								</tr>
								<tr className="border-2 text-gray-400">
									<th>Cholesterol:</th>
									<td className="text-right">
										{data && newOffers.length < !0
											? data[0]?.nutritional.cholesterol
											: newOffers[0]?.nutritional
													.cholesterol}
										mg
									</td>
								</tr>
								<tr className="border-2 text-gray-400">
									<th>Sodium:</th>
									<td className="text-right">
										{data && newOffers.length < !0
											? data[0]?.nutritional.sodium
											: newOffers[0]?.nutritional.sodium}
										mg
									</td>
								</tr>
								<tr className="border-2 text-gray-400">
									<th>Carbohydrate:</th>
									<td className="text-right">
										{data && newOffers.length < !0
											? data[0]?.nutritional.carbohydrate
											: newOffers[0]?.nutritional
													.carbohydrate}
										g
									</td>
								</tr>
								<tr className="border-l-2 text-gray-400 border-r-2">
									<th>Dietary Fiber:</th>
									<td className="text-right">
										{data && newOffers.length < !0
											? data[0]?.nutritional.dietary_fiber
											: newOffers[0]?.nutritional
													.dietary_fiber}
										g
									</td>
								</tr>
								<tr className="border-2 text-gray-400">
									<th>Sugars:</th>
									<td className="text-right">
										{data && newOffers.length < !0
											? data[0]?.nutritional.sugar
											: newOffers[0]?.nutritional.sugar}
										g
									</td>
								</tr>
								<tr className="border-2 text-gray-400">
									<th>Protein:</th>
									<td className="text-right">
										{data && newOffers.length < !0
											? data[0]?.nutritional.protein
											: newOffers[0]?.nutritional.protein}
									</td>
								</tr>
							</tbody>
						</table>
					</details>
				) : null}
			</div>
		</div>
	);
};

export default Description;
