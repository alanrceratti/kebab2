const offers = {
	name: "menu_offers",
	title: "Projects",
	type: "document",
	fields: [
		{ name: "name", title: "Name", type: "string" },
		{
			name: "short_description",
			title: "Short Description",
			type: "array",
			of: [{ type: "block" }],
		},
		{
			name: "long_description",
			title: "Long Description",
			type: "array",
			of: [{ type: "block" }],
		},
		{
			name: "ingredients",
			title: "Ingredients",
			type: "array",
			of: [{ type: "block" }],
		},

		{ name: "ingredients", title: "Name", type: "string" },
		{ name: "kcal", title: "Name", type: "string" },
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
		{
			name: "content",
			title: "Content",
			type: "array",
			of: [{ type: "block" }],
		},
	],
};

export default offers;
