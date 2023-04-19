import { createClient, groq } from "next-sanity";

import React from "react";

import { createClient, groq } from "next-sanity";

const clientConfig = {
	projectId: "c5ym9ela",
	dataset: "production",
	useCdn: false,
	apiVersion: "1",
};

export function getProjects() {
	return createClient(clientConfig).fetch(
		groq`*[_type == "projects"]{
            _id,
            name,
            long_description,

    }`
	);
}

const client = createClient(clientConfig);

// _price,
// _short_description,
// _long_description,
// _ingredients,
// _nutritional,
// "slug":slug.current,
// "image":image.asset->url
