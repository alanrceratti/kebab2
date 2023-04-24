import React from "react";

const NutriInfo = () => {
	return (
		<>
			<details>
				<summary>Nutritional Information</summary>

				<table className="ml-1 w-44">
					<tbody>
						<tr className="border-2 text-gray-400 ">
							<th>Calories:</th>
							<td className="text-right">
								{pros.data && newOffers.length < !0
									? pros.data[0]?.nutritional.calories
									: newOffers[0]?.nutritional.calories}
								g
							</td>
						</tr>
						<tr className="border-2 text-gray-400">
							<th>Total Fat:</th>
							<td className="text-right">
								{pros.data && newOffers.length < !0
									? pros.data[0]?.nutritional.fat
									: newOffers[0]?.nutritional.fat}
								g
							</td>
						</tr>

						<tr className="border-2 text-gray-400">
							<th>Saturated Fat:</th>
							<td className="text-right">
								{pros.data && newOffers.length < !0
									? pros.data[0]?.nutritional.saturated_fat
									: newOffers[0]?.nutritional.saturated_fat}
								g
							</td>
						</tr>
						<tr className="border-2 text-gray-400">
							<th>Trans Fat: </th>
							<td className="text-right">
								{pros.data && newOffers.length < !0
									? pros.data[0]?.nutritional.trans_fat
									: newOffers[0]?.nutritional.trans_fat}
								g
							</td>
						</tr>
						<tr className="border-2 text-gray-400">
							<th>Cholesterol:</th>
							<td className="text-right">
								{pros.data && newOffers.length < !0
									? pros.data[0]?.nutritional.cholesterol
									: newOffers[0]?.nutritional.cholesterol}
								mg
							</td>
						</tr>
						<tr className="border-2 text-gray-400">
							<th>Sodium:</th>
							<td className="text-right">
								{pros.data && newOffers.length < !0
									? pros.data[0]?.nutritional.sodium
									: newOffers[0]?.nutritional.sodium}
								mg
							</td>
						</tr>
						<tr className="border-2 text-gray-400">
							<th>Carbohydrate:</th>
							<td className="text-right">
								{pros.data && newOffers.length < !0
									? pros.data[0]?.nutritional.carbohydrate
									: newOffers[0]?.nutritional.carbohydrate}
								g
							</td>
						</tr>
						<tr className="border-l-2 text-gray-400 border-r-2">
							<th>Dietary Fiber:</th>
							<td className="text-right">
								{pros.data && newOffers.length < !0
									? pros.data[0]?.nutritional.dietary_fiber
									: newOffers[0]?.nutritional.dietary_fiber}
								g
							</td>
						</tr>
						<tr className="border-2 text-gray-400">
							<th>Sugars:</th>
							<td className="text-right">
								{pros.data && newOffers.length < !0
									? pros.data[0]?.nutritional.sugar
									: newOffers[0]?.nutritional.sugar}
								g
							</td>
						</tr>
						<tr className="border-2 text-gray-400">
							<th>Protein:</th>
							<td className="text-right">
								{pros.data && newOffers.length < !0
									? pros.data[0]?.nutritional.protein
									: newOffers[0]?.nutritional.protein}
							</td>
						</tr>
					</tbody>
				</table>
			</details>
		</>
	);
};

export default NutriInfo;
