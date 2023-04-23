import React from "react";

const NutriInfo = (props) => {
	return (
		<>
			<details>
				<summary>Nutritional Information</summary>

				<table className="ml-1 w-44">
					<tbody>
						<tr className="border-2 text-gray-400 ">
							<th>Calories:</th>
							<td className="text-right">
								{props.data && props.newOffers.length < !0
									? props.data[0]?.nutritional.calories
									: props.newOffers[0]?.nutritional.calories}
								g
							</td>
						</tr>
						<tr className="border-2 text-gray-400">
							<th>Total Fat:</th>
							<td className="text-right">
								{props.data && props.newOffers.length < !0
									? props.data[0]?.nutritional.fat
									: props.newOffers[0]?.nutritional.fat}
								g
							</td>
						</tr>

						<tr className="border-2 text-gray-400">
							<th>Saturated Fat:</th>
							<td className="text-right">
								{props.data && props.newOffers.length < !0
									? props.data[0]?.nutritional.saturated_fat
									: props.newOffers[0]?.nutritional
											.saturated_fat}
								g
							</td>
						</tr>
						<tr className="border-2 text-gray-400">
							<th>Trans Fat: </th>
							<td className="text-right">
								{props.data && props.newOffers.length < !0
									? props.data[0]?.nutritional.trans_fat
									: props.newOffers[0]?.nutritional.trans_fat}
								g
							</td>
						</tr>
						<tr className="border-2 text-gray-400">
							<th>Cholesterol:</th>
							<td className="text-right">
								{props.data && props.newOffers.length < !0
									? props.data[0]?.nutritional.cholesterol
									: props.newOffers[0]?.nutritional
											.cholesterol}
								mg
							</td>
						</tr>
						<tr className="border-2 text-gray-400">
							<th>Sodium:</th>
							<td className="text-right">
								{props.data && props.newOffers.length < !0
									? props.data[0]?.nutritional.sodium
									: props.newOffers[0]?.nutritional.sodium}
								mg
							</td>
						</tr>
						<tr className="border-2 text-gray-400">
							<th>Carbohydrate:</th>
							<td className="text-right">
								{props.data && props.newOffers.length < !0
									? props.data[0]?.nutritional.carbohydrate
									: props.newOffers[0]?.nutritional
											.carbohydrate}
								g
							</td>
						</tr>
						<tr className="border-l-2 text-gray-400 border-r-2">
							<th>Dietary Fiber:</th>
							<td className="text-right">
								{props.data && props.newOffers.length < !0
									? props.data[0]?.nutritional.dietary_fiber
									: props.newOffers[0]?.nutritional
											.dietary_fiber}
								g
							</td>
						</tr>
						<tr className="border-2 text-gray-400">
							<th>Sugars:</th>
							<td className="text-right">
								{props.data && props.newOffers.length < !0
									? props.data[0]?.nutritional.sugar
									: props.newOffers[0]?.nutritional.sugar}
								g
							</td>
						</tr>
						<tr className="border-2 text-gray-400">
							<th>Protein:</th>
							<td className="text-right">
								{props.data && props.newOffers.length < !0
									? props.data[0]?.nutritional.protein
									: props.newOffers[0]?.nutritional.protein}
							</td>
						</tr>
					</tbody>
				</table>
			</details>
		</>
	);
};

export default NutriInfo;
