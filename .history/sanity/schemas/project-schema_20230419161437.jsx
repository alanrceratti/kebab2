const project = {
	name: "project",
	title: "Projects",
	type: "document",
	filds: [
		{ name: "name", title: "Name", type: "string" },
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
            fields: [{name: "alt", title: "Alt", type:""}]
		},
	],
};
