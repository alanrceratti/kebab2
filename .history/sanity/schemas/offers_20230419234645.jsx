const offers = {
	name: "offers",
	title: "Offers",
	type: "document",
	fields: [
		{ name: "name", title: "Name", type: "string" },
		{ name: "price", title: "Price", type: "number" },
		{
			name: "short_description",
			title: "Short Description",
			type: "text",
		},
		{
			name: "long_description",
			title: "Long Description",
			type: "text",
		},
		{
			name: "ingredients",
			title: "Ingredients",
			type: "text",
		},
		{
			name: "nutritional",
			title: "Nutritional",
			type: "object",
			fields: [
				{ name: "calories", type: "number", title: "Total Calories" },
				{ name: "fat", type: "number", title: "Total Fat" },
				{
					name: "saturated_fat",
					type: "number",
					title: "Saturated Fat",
				},
				{ name: "trans_fat", type: "number", title: "Trans Fat" },
				{ name: "cholesterol", type: "number", title: "Cholesterol" },
				{ name: "sodium", type: "number", title: "Sodium" },
				{ name: "carbohydrate", type: "number", title: "Carbohydrate" },
				{
					name: "dietary_fiber",
					type: "number",
					title: "Dietary Fiber",
				},
				{ name: "sugar", type: "number", title: "Sugar" },
				{ name: "protein", type: "number", title: "Protein" },
			],
		},

		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: { source: "name" },
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			options: { hotspot: true },
			fields: [{ name: "alt", title: "Alt", type: "string" }],
		},
		{
			name: "url",
			title: "URL",
			type: "url",
		},
	],
};

export default projects;
