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
			type: "array",
			of: [{ title: "type: "string" }],
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
