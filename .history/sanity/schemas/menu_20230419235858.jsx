const menu = {
	name: "menu",
	title: "Menu",
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
			name: "image",
			title: "Image",
			type: "image",
			options: { hotspot: true },
			fields: [{ name: "alt", title: "Alt", type: "string" }],
		},
	],
};
