const offers = {
	name: "menu_offers",
	title: "Projects",
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
				{ name: "calories", type: "number", title: "Street name" },
				{ name: "fat", type: "number", title: "Street number" },
				{ name: "saturated_fat", type: "number", title: "Street number" },
				{ name: "trans_fat", type: "number", title: "Street number" },
				{ name: "cholesterol", type: "number", title: "Street number" },
				{ name: "sodium", type: "number", title: "Street number" },
				{ name: "carbohydrate", type: "number", title: "Street number" },
				{ name: "dietary_fiber", type: "number", title: "Street number" },
				{ name: "sugar", type: "number", title: "Street number" },
				{ name: "protein", type: "number", title: "Street number" },
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

export default offers;
